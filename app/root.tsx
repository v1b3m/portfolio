import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import FloatingNav from "~/components/FloatingNav";
import MagnifyingCursor from "~/components/MagnifyingCursor";
import { ContactProvider } from "~/context/ContactContext";
import ContactInfo from "~/components/ContactInfo";
import { AnimatePresence } from "framer-motion";
import { useContact } from "~/context/ContactContext";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

function AppContent({ children }: { children: React.ReactNode }) {
  const { showContact } = useContact();

  return (
    <>
      <MagnifyingCursor />
      <FloatingNav />
      <main className="pt-16">{children}</main>
      <AnimatePresence>{showContact && <ContactInfo />}</AnimatePresence>
    </>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white md:cursor-none">
        <ContactProvider>
          <AppContent>{children}</AppContent>
        </ContactProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

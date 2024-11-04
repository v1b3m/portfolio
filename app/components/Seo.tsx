import { useLocation } from "@remix-run/react";

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

export default function Seo({
  title = "Benjamin Mayanja - Fullstack Developer",
  description = "Experienced fullstack developer specializing in React, Next.js, and modern web technologies. Building scalable, user-friendly applications with a touch of humor.",
  image = "https://portfolio-v1b3m.vercel.app/images/og-image.svg", // Add your OG image
  type = "website",
}: SeoProps) {
  const { pathname } = useLocation();
  const url = `https://portfolio-v1b3m.vercel.app${pathname}`;

  return (
    <>
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      {/* Basic Meta */}
      <meta name="description" content={description} />
      <meta name="author" content="Benjamin Mayanja" />
      <meta
        name="keywords"
        content="fullstack developer, react developer, javascript developer, web developer, software engineer, Benjamin Mayanja"
      />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Benjamin Mayanja" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@BenjaMayanja" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* Additional Meta */}
      <meta name="theme-color" content="#3B82F6" /> {/* Your brand color */}
      <link rel="canonical" href={url} />
    </>
  );
}

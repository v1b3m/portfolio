import { motion, AnimatePresence } from "framer-motion";
import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect, Fragment } from "react";
import { useContact } from "~/context/ContactContext";

export const meta: MetaFunction = () => {
  return [
    { title: "Benjamin Mayanja - Fullstack TypeScript Developer" },
    {
      name: "description",
      content:
        "Experienced fullstack developer specializing in TypeScript, React, and Next.js. Building scalable web applications with modern technologies and a focus on user experience.",
    },
    {
      name: "keywords",
      content:
        "TypeScript, React, Next.js, Fullstack Developer, Software Engineer, Web Development, Benjamin Mayanja",
    },
    {
      property: "og:title",
      content: "Benjamin Mayanja - Fullstack TypeScript Developer",
    },
    {
      property: "og:description",
      content:
        "Experienced fullstack developer specializing in TypeScript, React, and Next.js. Building scalable web applications with modern technologies and a focus on user experience.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content:
        "https://portfolio-v1b3m.vercel.app/images/b2b1f25f-8c41-40d1-abc8-0b6def2981ed.png",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Benjamin Mayanja - Fullstack TypeScript Developer",
    },
    {
      name: "twitter:description",
      content:
        "Experienced fullstack developer specializing in TypeScript, React, and Next.js. Building scalable web applications with modern technologies and a focus on user experience.",
    },
    {
      name: "twitter:image",
      content:
        "https://portfolio-v1b3m.vercel.app/images/b2b1f25f-8c41-40d1-abc8-0b6def2981ed.png",
    },
  ];
};

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
}

const FloatingElement = ({ children, delay = 0 }: FloatingElementProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: 1,
      y: [0, -10, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        },
        opacity: {
          duration: 0.5,
          delay,
        },
      },
    }}
  >
    {children}
  </motion.div>
);

const TypewriterText = () => {
  const [text, setText] = useState("");
  const finalText = "Benja";
  const typoText = "Denja";

  useEffect(() => {
    const timeout = setTimeout(() => {
      const sequence = async () => {
        // Type "Hi, I'm "
        for (let i = 0; i < "Hi, I'm ".length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 100));
          setText((prev) => prev + "Hi, I'm "[i]);
        }

        // Type the typo "Denja"
        for (let i = 0; i < typoText.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 100));
          setText((prev) => prev + typoText[i]);
        }

        // Pause before correction
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Backspace the entire "Denja"
        for (let i = 0; i < typoText.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 50));
          setText((prev) => prev.slice(0, -1));
        }

        // Type the correct name "Benja"
        for (let i = 0; i < finalText.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 100));
          setText((prev) => prev + finalText[i]);
        }
      };

      sequence();
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500">
      <span className="inline-block">{text}</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 0.7 }}
        className="inline-block ml-1 -translate-y-1"
      >
        |
      </motion.span>
    </h1>
  );
};

const isApple =
  typeof navigator !== "undefined" &&
  /Mac|iPod|iPhone|iPad/.test(navigator.platform);

const shortcuts = [
  { keys: [isApple ? "⌘" : "Ctrl", "1"], action: "home" },
  { keys: [isApple ? "⌘" : "Ctrl", "p"], action: "projects" },
  { keys: [isApple ? "⌘" : "Ctrl", "s"], action: "skills" },
  { keys: [isApple ? "⌘" : "Ctrl", "k"], action: "contact" },
  { keys: ["esc"], action: "close modals" },
] as const;

const ShortcutHint = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shortcuts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4 }}
      className="fixed bottom-[2.5vh] left-4 sm:left-1/2 sm:-translate-x-1/2 text-sm text-gray-500 dark:text-gray-400"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="inline-flex items-center gap-1"
        >
          {shortcuts[currentIndex].keys.map((key, idx) => (
            <Fragment key={idx}>
              <kbd className="rounded border border-gray-300 bg-gray-100 px-1.5 font-mono text-xs dark:border-gray-600 dark:bg-gray-800">
                {key}
              </kbd>
              {idx < shortcuts[currentIndex].keys.length - 1 && (
                <span className="mx-0.5">+</span>
              )}
            </Fragment>
          ))}
          <span className="ml-1">{shortcuts[currentIndex].action}</span>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default function Index() {
  const [innerWidth, setInnerWidth] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);
  const { setShowContact } = useContact();

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-blue-500/20"
            initial={{
              x: Math.random() * innerWidth,
              y: Math.random() * innerHeight,
            }}
            animate={{
              x: Math.random() * innerWidth,
              y: Math.random() * innerHeight,
              transition: {
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <TypewriterText />

          <FloatingElement delay={2.5}>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Fullstack Developer | Problem Solver | Tech Enthusiast
            </p>
          </FloatingElement>

          <FloatingElement delay={3}>
            <motion.button
              onClick={() => setShowContact(true)}
              className="mt-8 rounded-full bg-blue-500 px-8 py-3 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-explorable="true"
            >
              Get in Touch
            </motion.button>
          </FloatingElement>
        </div>
      </div>

      <ShortcutHint />

      <div className="absolute bottom-4 right-4 text-sm text-gray-500 dark:text-gray-400">
        Made with <span className="text-red-500">❤</span> by{" "}
        <a
          href="https://github.com/v1b3m"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
          data-explorable="true"
        >
          v1b3m
        </a>
      </div>
    </div>
  );
}

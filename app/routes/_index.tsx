import { motion } from "framer-motion";
import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";
import { useContact } from "~/context/ContactContext";

export const meta: MetaFunction = () => {
  return [
    { title: "Your Name - Fullstack Developer" },
    {
      name: "description",
      content: "Portfolio of a passionate fullstack developer",
    },
  ];
};

const FloatingElement = ({ children, delay = 0 }) => (
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
    </div>
  );
}

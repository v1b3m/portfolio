import { motion, AnimatePresence } from "framer-motion";
import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";

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

const ContactInfo = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    className="absolute left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 space-y-6 rounded-2xl bg-white p-8 shadow-2xl dark:bg-gray-800 z-50"
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="mb-6 text-center text-3xl font-bold">
        Let&apos;s Connect!
      </h2>

      <div className="space-y-4">
        <a
          href="mailto:your.email@example.com"
          className="flex items-center gap-4 rounded-lg p-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
          data-explorable="true"
        >
          <span className="text-2xl">📧</span>
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-600 dark:text-gray-300">
              your.email@example.com
            </p>
          </div>
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-lg p-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
          data-explorable="true"
        >
          <span className="text-2xl">👨‍💻</span>
          <div>
            <h3 className="font-semibold">GitHub</h3>
            <p className="text-gray-600 dark:text-gray-300">@yourusername</p>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-lg p-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
          data-explorable="true"
        >
          <span className="text-2xl">💼</span>
          <div>
            <h3 className="font-semibold">LinkedIn</h3>
            <p className="text-gray-600 dark:text-gray-300">
              linkedin.com/in/yourusername
            </p>
          </div>
        </a>
      </div>
    </motion.div>
  </motion.div>
);

export default function Index() {
  const [innerWidth, setInnerWidth] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);
  const [showContact, setShowContact] = useState(false);

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
          <FloatingElement>
            <h1 className="mb-4 text-6xl font-bold">
              Hi, I'm <span className="text-blue-500">Benja</span>
            </h1>
          </FloatingElement>

          <FloatingElement delay={0.2}>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Fullstack Developer | Problem Solver | Tech Enthusiast
            </p>
          </FloatingElement>

          <FloatingElement delay={0.4}>
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

      {/* Contact Modal */}
      <AnimatePresence>
        {showContact && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowContact(false)}
            />
            <ContactInfo />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

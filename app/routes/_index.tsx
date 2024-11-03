import { motion, AnimatePresence } from "framer-motion";
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
    </div>
  );
}

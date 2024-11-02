import { motion } from "framer-motion";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Your Name - Fullstack Developer" },
    {
      name: "description",
      content: "Portfolio of a passionate fullstack developer",
    },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen">
      <section className="h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold mb-4"
          >
            Hi, I'm <span className="text-blue-500">Your Name</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Fullstack Developer | Problem Solver | Tech Enthusiast
          </motion.p>
        </div>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
}

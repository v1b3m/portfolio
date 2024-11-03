import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@remix-run/react";

const navItems = [
  { name: "Home", path: "/", icon: "🏠" },
  { name: "Projects", path: "/projects", icon: "💻" },
  { name: "Skills", path: "/skills", icon: "🚀" },
  { name: "Contact", path: "/contact", icon: "📬" },
];

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Trigger Button with attention ring */}
      <div className="fixed right-8 top-8 z-50">
        <motion.div
          className="absolute -inset-4 rounded-full bg-blue-500/20"
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative h-12 w-12 rounded-full bg-blue-500 text-white shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-xl">{isOpen ? "×" : "+"}</span>
        </motion.button>
      </div>

      {/* Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            {/* Navigation Items */}
            <div className="fixed inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex gap-4"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{
                      scale: 1,
                      rotate: 0,
                      transition: { delay: index * 0.1 },
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Link
                      to={item.path}
                      className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white shadow-lg dark:bg-gray-800"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="mt-1 text-sm">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

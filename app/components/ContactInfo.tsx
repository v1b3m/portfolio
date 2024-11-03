import { motion } from "framer-motion";
import { useContact } from "~/context/ContactContext";
import { useEffect } from "react";

export default function ContactInfo() {
  const { setShowContact } = useContact();

  // Add event listener for Escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowContact(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [setShowContact]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={() => setShowContact(false)}
      />
      <div className="fixed inset-0 z-50 overflow-y-auto p-4 pointer-events-none">
        <div className="min-h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="w-full max-w-lg rounded-2xl bg-white dark:bg-gray-800 p-4 sm:p-8 shadow-2xl pointer-events-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="mb-6 text-center text-2xl sm:text-3xl font-bold">
                Let&apos;s Connect!
              </h2>

              <div className="space-y-4">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-4 rounded-lg p-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                  data-explorable="true"
                >
                  <span className="text-2xl flex-shrink-0">📧</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold">Email</h3>
                    <p className="truncate text-gray-600 dark:text-gray-300">
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
                  <span className="text-2xl flex-shrink-0">👨‍💻</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold">GitHub</h3>
                    <p className="truncate text-gray-600 dark:text-gray-300">
                      @yourusername
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-lg p-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                  data-explorable="true"
                >
                  <span className="text-2xl flex-shrink-0">💼</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold">LinkedIn</h3>
                    <p className="truncate text-gray-600 dark:text-gray-300">
                      linkedin.com/in/yourusername
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

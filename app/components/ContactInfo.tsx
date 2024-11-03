import { motion } from "framer-motion";
import { useContact } from "~/context/ContactContext";

export default function ContactInfo() {
  const { setShowContact } = useContact();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={() => setShowContact(false)}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 space-y-6 rounded-2xl bg-white p-8 shadow-2xl dark:bg-gray-800"
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
                <p className="text-gray-600 dark:text-gray-300">
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
    </>
  );
}

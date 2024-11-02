import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">
            Your Name
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/projects" className="hover:text-blue-500">
              Projects
            </Link>
            <Link to="/skills" className="hover:text-blue-500">
              Skills
            </Link>
            <Link to="/blog" className="hover:text-blue-500">
              Blog
            </Link>
            <Link to="/contact" className="hover:text-blue-500">
              Contact
            </Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              {darkMode ? "🌞" : "🌙"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

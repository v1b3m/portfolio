import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type Skill = {
  name: string;
  icon: string;
  description: string;
  experience: string;
  projects?: string[];
  details: string[];
};

const skills: Skill[] = [
  {
    name: "React",
    icon: "⚛️",
    description: "Modern frontend development with React and its ecosystem",
    experience: "4+ years",
    projects: [
      "Built complex SPAs with Redux",
      "Created reusable component libraries",
      "Implemented real-time features",
    ],
    details: [
      "Advanced state management with Redux and Context API",
      "Performance optimization and code splitting",
      "Custom hooks and component patterns",
      "Server-side rendering with Next.js",
    ],
  },
  {
    name: "Node.js",
    icon: "🟢",
    description: "Backend development with Node.js and Express",
    experience: "3+ years",
    projects: [
      "RESTful API development",
      "Real-time applications with Socket.IO",
      "Microservices architecture",
    ],
    details: [
      "Express.js and Fastify frameworks",
      "API design and implementation",
      "Database integration",
      "Authentication and authorization",
    ],
  },
  {
    name: "Next.js",
    icon: "🔮",
    description: "Modern frontend development with Next.js",
    experience: "2+ years",
    projects: [
      "Built complex SPAs with Redux",
      "Created reusable component libraries",
      "Implemented real-time features",
    ],
    details: [
      "Server-side rendering with Next.js",
      "Static site generation",
      "API routes",
      "Image optimization",
      "TypeScript support",
      "Dynamic routing",
      "Serverless functions",
      "SEO-friendly",
      "Bundling and minification",
      "Hot reloading",
    ],
  },
  // Add more skills...
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(skills[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile("ontouchstart" in window);
  }, []);

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold">
            My <span className="text-blue-500">Skills</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {isMobile ? "Tap" : "Hover over"} a skill to explore details
          </p>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-[1fr,2fr] gap-8">
          {/* Desktop Skills List */}
          <div className="space-y-2">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                onClick={() => setSelectedSkill(skill)}
                onHoverStart={() => !isMobile && setSelectedSkill(skill)}
                className={`rounded-lg p-4 transition-colors ${
                  selectedSkill?.name === skill.name
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-50 dark:hover:bg-gray-800"
                } cursor-none`}
                whileHover={{ x: 10 }}
                data-explorable="true"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-lg font-medium">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Skill Details */}
          <div className="relative">
            <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.2)] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-gray-50 before:to-transparent before:opacity-50 dark:before:from-gray-700/50">
              <AnimatePresence mode="wait">
                {selectedSkill ? (
                  <motion.div
                    key={selectedSkill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="rounded-2xl bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] p-8"
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative">
                      <div className="flex items-center gap-4 text-3xl">
                        <span>{selectedSkill.icon}</span>
                        <h2 className="font-bold">{selectedSkill.name}</h2>
                      </div>

                      <div className="mt-6 space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-blue-500">
                            Experience
                          </h3>
                          <p className="mt-1 text-gray-600 dark:text-gray-300">
                            {selectedSkill.experience}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-blue-500">
                            Overview
                          </h3>
                          <p className="mt-1 text-gray-600 dark:text-gray-300">
                            {selectedSkill.description}
                          </p>
                        </div>

                        {selectedSkill.projects && (
                          <div>
                            <h3 className="text-lg font-semibold text-blue-500">
                              Project Highlights
                            </h3>
                            <ul className="mt-1 list-disc pl-5 text-gray-600 dark:text-gray-300">
                              {selectedSkill.projects.map((project) => (
                                <li key={project}>{project}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div>
                          <h3 className="text-lg font-semibold text-blue-500">
                            Technical Details
                          </h3>
                          <ul className="mt-1 list-disc pl-5 text-gray-600 dark:text-gray-300">
                            {selectedSkill.details.map((detail) => (
                              <li key={detail}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex h-[300px] items-center justify-center rounded-2xl text-gray-500"
                  >
                    <p className="text-lg">
                      {isMobile ? "Tap" : "Hover over"} a skill to see details
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-4">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md"
              initial={false}
            >
              <motion.button
                onClick={() =>
                  setSelectedSkill(
                    selectedSkill?.name === skill.name ? null : skill
                  )
                }
                className="flex w-full items-center justify-between p-4 text-left"
                whileTap={{ scale: 0.98 }}
                data-explorable="true"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-lg font-medium">{skill.name}</span>
                </div>
                <motion.span
                  animate={{
                    rotate: selectedSkill?.name === skill.name ? 180 : 0,
                  }}
                  className="text-xl"
                >
                  ↓
                </motion.span>
              </motion.button>

              <AnimatePresence initial={false}>
                {selectedSkill?.name === skill.name && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="border-t border-gray-100 dark:border-gray-700 p-4 space-y-4">
                      <div>
                        <h3 className="font-semibold text-blue-500">
                          Experience
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {skill.experience}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-blue-500">
                          Overview
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {skill.description}
                        </p>
                      </div>

                      {skill.projects && (
                        <div>
                          <h3 className="font-semibold text-blue-500">
                            Project Highlights
                          </h3>
                          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                            {skill.projects.map((project) => (
                              <li key={project}>{project}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div>
                        <h3 className="font-semibold text-blue-500">
                          Technical Details
                        </h3>
                        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                          {skill.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
  // Add more skills...
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

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
            Hover over a skill to learn more
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr,2fr]">
          {/* Skills List */}
          <div className="space-y-2">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                onHoverStart={() => setSelectedSkill(skill)}
                className={`cursor-none rounded-lg p-4 transition-colors ${
                  selectedSkill?.name === skill.name
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-50 dark:hover:bg-gray-800"
                }`}
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

          {/* Skill Details */}
          <div className="relative h-[500px] rounded-2xl bg-blue-50 p-8 dark:bg-gray-800">
            <AnimatePresence mode="wait">
              {selectedSkill ? (
                <motion.div
                  key={selectedSkill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute inset-0 overflow-y-auto p-8"
                  transition={{ duration: 0.2 }}
                >
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
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex h-full items-center justify-center text-gray-500"
                >
                  <p className="text-lg">Hover over a skill to see details</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

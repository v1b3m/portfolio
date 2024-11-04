import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Seo from "~/components/Seo";
import type { MetaFunction } from "@remix-run/node";

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
    description: "Building UIs so smooth, they make butter jealous",
    experience: "5+ years of React-ionship",
    projects: [
      "Built Twenty's CRM interface",
      "Created TrySavvy's dynamic experiences",
      "Developed RemoteMore's marketplace",
    ],
    details: [
      "State management (Redux, Recoil, Context) - because global state is like gossip, everyone needs to know",
      "Performance optimization - making apps faster than my coffee disappears",
      "Custom hooks - DRYer than my humor",
      "Component architecture - building LEGOs for adults",
      "Server-side rendering with Next.js - because waiting is so 2010",
    ],
  },
  {
    name: "Next.js",
    icon: "▲",
    description: "Making React apps so fast, they arrive before they leave",
    experience: "4+ years of Next-level development",
    projects: [
      "Built Lusa Web's financial platform",
      "Developed RaiD AI's medical imaging interface",
      "Created this portfolio (meta, right?)",
    ],
    details: [
      "Server-side rendering - because client-side is too mainstream",
      "Static site generation - making websites faster than my dad's dad jokes",
      "API routes - REST-assured, I got this",
      "Image optimization - making images lighter than my wallet",
      "Dynamic routing - smoother than my pickup lines",
    ],
  },
  {
    name: "Mobile Dev",
    icon: "📱",
    description: "Making phones do cool stuff since before it was cool",
    experience: "2+ years of pocket programming",
    projects: [
      "Published multiple apps on Google Play Store",
      "Built AfroPay's mobile payment solution",
      "Developed cross-platform experiences",
    ],
    details: [
      "React Native - write once, debug everywhere™",
      "Redux for state management - because global state is like gossip in your pocket",
      "Firebase integration - real-time like my coffee needs",
      "Native module integration - when JS just isn't enough",
      "Performance optimization - making apps smoother than a freshly waxed floor",
    ],
  },
  {
    name: "Backend",
    icon: "🔧",
    description: "The wizard behind the curtain, making the magic happen",
    experience: "5+ years of server-side sorcery",
    projects: [
      "Built GraphQL APIs for Twenty",
      "Developed Express backend for TrySavvy",
      "Created Node.js services for various projects",
    ],
    details: [
      "Node.js & Express - because JavaScript on the server is like putting pineapple on pizza (controversial but delicious)",
      "GraphQL - REST in peace, overfetching",
      "Database design - relationships more complex than my dating life",
      "API architecture - building bridges between frontend and backend (and occasionally burning them)",
      "Security & Authentication - trust issues done right",
    ],
  },
  {
    name: "UI/UX",
    icon: "🎨",
    description: "Making interfaces prettier than my code comments",
    experience: "4+ years of pixel perfection",
    projects: [
      "Designed Chalktalk's learning interface",
      "Created RemoteMore's user experience",
      "Styled numerous React applications",
    ],
    details: [
      "Tailwind CSS - because writing CSS is so 2015",
      "Material-UI - making things look Google-y",
      "Chakra UI - accessibility first, questions later",
      "Responsive design - making websites flex harder than gym bros",
      "Animation & transitions - smooth like JavaScript's type coercion (wait...)",
    ],
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Skills - Benjamin Mayanja" },
    {
      name: "description",
      content:
        "Discover my technical expertise in TypeScript, React, Next.js, Mobile Development, and Backend Development. Over 4 years of experience building scalable applications.",
    },
    {
      name: "keywords",
      content:
        "TypeScript Development, React Development, Next.js, Mobile Development, Backend Development, Full Stack Skills, Benjamin Mayanja",
    },
    {
      property: "og:title",
      content: "Skills - Benjamin Mayanja",
    },
    {
      property: "og:description",
      content:
        "Discover my technical expertise in TypeScript, React, Next.js, Mobile Development, and Backend Development. Over 4 years of experience building scalable applications.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content:
        "https://portfolio-v1b3m.vercel.app/images/21f95680-0305-4fc5-8e0b-4597282bdf1c.png",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Skills - Benjamin Mayanja",
    },
    {
      name: "twitter:description",
      content:
        "Discover my technical expertise in TypeScript, React, Next.js, Mobile Development, and Backend Development. Over 4 years of experience building scalable applications.",
    },
    {
      name: "twitter:image",
      content:
        "https://portfolio-v1b3m.vercel.app/images/21f95680-0305-4fc5-8e0b-4597282bdf1c.png",
    },
  ];
};

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(skills[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile("ontouchstart" in window);
  }, []);

  return (
    <>
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
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Crafting digital experiences with modern technologies
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
    </>
  );
}

import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A full-stack application built with React, Node.js, and MongoDB. Features real-time updates and responsive design.",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
    image: "https://placehold.co/600x400",
    link: "https://project-one.com",
    github: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description:
      "An e-commerce platform with advanced filtering, search, and payment integration.",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
    image: "https://placehold.co/600x400",
    link: "https://project-two.com",
    github: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project One",
    description:
      "A full-stack application built with React, Node.js, and MongoDB. Features real-time updates and responsive design.",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
    image: "https://placehold.co/600x400",
    link: "https://project-one.com",
    github: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description:
      "An e-commerce platform with advanced filtering, search, and payment integration.",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
    image: "https://placehold.co/600x400",
    link: "https://project-two.com",
    github: "https://github.com/yourusername/project-two",
  },
  // Add more projects as needed
];

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-800"
    data-explorable="true"
  >
    <div className="aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>

    <div className="flex flex-1 flex-col p-6">
      <div className="flex-1">
        <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Live <span>→</span>
        </motion.a>
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub <span>↗</span>
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
);

export default function Projects() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold">
            My <span className="text-blue-500">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Here are some of the projects I&apos;ve worked on
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

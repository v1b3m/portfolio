import { motion } from "framer-motion";
import Seo from "~/components/Seo";

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
    title: "Twenty",
    description:
      "The #1 Open-Source CRM\nModern, powerful, affordable platform to manage your customer relationships",
    tags: ["GraphQL", "React", "NestJS", "Recoil"],
    image: "/images/www.twenty.com_.jpg",
    link: "https://twenty.com/",
    github: "https://github.com/twentyhq/twenty",
  },
  {
    title: "TrySavvy",
    description:
      "Savvy is the no-code platform that allows growth and engineers to work faster together to create and test dynamic experiences like; landing pages, custom quizzes and user sign-up flows - all in one place.",
    tags: ["StimulusJS", "Firebase", "Express"],
    image: "/images/trysavvy.com_.jpg",
    link: "https://trysavvy.com/",
  },
  {
    title: "RemoteMore",
    description:
      " Hire from 10,074 remote developers\nOn our marketplace you can find skilled developers easily and in no time.",
    tags: ["ReactJS", "Firebase", "Material-UI"],
    image: "/images/remotemore.com_(Smal Laptop).png",
    link: "https://remotemore.com/",
  },
  {
    title: "Chalktalk",
    description:
      'IT\'S TIME TO PUT THE "PERSON" BACK IN PERSONALIZED LEARNING.\nPERSONALIZED LEARNING SOFTWARE FOR ELA & MATH.\nREAL-TIME, REMOTE OR IN-PERSON.',
    tags: ["ReactJS", "Redux", "CSS"],
    image: "/images/chalktalk.com_(Smal Laptop).png",
    link: "https://chalktalk.com/",
  },
  {
    title: "Lusa Web",
    description:
      "Quick & easy to use financial services empowering your Sacco or investment club to run efficiently & transparently.\nLusa makes it possible for Sacco members to borrow instant micro-loans backed by their Sacco savings and activity.",
    tags: ["ReactJS", "Next.js", "Chakra UI"],
    image: "/images/lusa-web.herokuapp.com_(brittany).png",
    link: "https://lusa-web.herokuapp.com/",
  },
  {
    link: "https://v1b3m.vercel.app/",
    image: "/images/localhost_3000_(small laptop).png",
    title: "Amazing personal site",
    description:
      'An amazing personal site where I showcase my "god-level" dev skills.',
    tags: ["ReactJS", "Next.js", "Chakra UI"],
  },
  {
    link: "https://www.afropay.app/",
    image: "/images/www.afropay.app_(small laptop).png",
    title: "AfroPay",
    description:
      "We are utilizing the power of QR codes to improve the efficiency of making digital payments",
    tags: ["ReactJS", "React-Native", "Redux", "NodeJS"],
  },
  {
    link: "https://raid-ai.vercel.app/",
    image: "/images/raid-ai.vercel.app_(small laptop).png",
    title: "RaiD",
    description:
      "Localization and classification of thoracic abnormalities from chest radiographs with Deep Learning",
    tags: ["ReactJS", "Next.js", "Chakra UI"],
  },
  {
    link: "https://play.google.com/store/apps/developer?id=v1b3m",
    image:
      "/images/play.google.com_store_apps_developer_id=v1b3m(ticketDex).png",
    title: "Mobile Apps",
    description:
      "I&apos;ve played around with ReactNative and apps appeared with me as their author on the Google Play Store all of a sudden 🤯",
    tags: ["React-Native", "Redux", "Firebase"],
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
    <>
      <Seo
        title="Projects - Benjamin Mukisa"
        description="Explore my portfolio of fullstack projects including CRMs, financial platforms, and mobile applications built with React, Next.js, and modern technologies."
      />
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
              Here are some of the projects I've worked on
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

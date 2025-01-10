"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const projects = [
  {
    title: "Gallery Whisper",
    description:
      "Full-stack e-commerce website using React, Node.js, and MongoDB with Stripe integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "Telecom Churn Prediction",
    description:
      "ML model analyzing customer churn patterns using advanced algorithms.",
    tech: ["Python", "Scikit-learn", "Pandas", "TensorFlow"],
    gradient: "from-green-500 to-blue-500",
  },
  {
    title: "Advanced Image Classification",
    description:
      "Five-class image classification system with state-of-the-art CNN architectures.",
    tech: ["Python", "TensorFlow", "CNN", "Deep Learning"],
    gradient: "from-purple-500 to-pink-500",
  },
];

export default function Projects() {
  const router = useRouter();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
    margin: "-100px",
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 min-h-screen flex items-center bg-gray-900/50">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Featured Projects
          </span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              onClick={() => router.push("/projects")}
              className="cursor-pointer"
            >
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-gray-600 transition-all duration-300 h-full transform-gpu">
                <CardHeader>
                  <CardTitle
                    className={`text-xl font-bold bg-gradient-to-r ${project.gradient} text-transparent bg-clip-text`}
                  >
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

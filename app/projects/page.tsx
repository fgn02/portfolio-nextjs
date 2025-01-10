"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Chatify",
    description:
      "A real-time chat application built with Next.js, Firebase, and Tailwind CSS. Features include user authentication, real-time messaging, and a modern UI design.",
    image: "https://i.imgur.com/lxzNb9b.gif",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    link: "https://chatify-fgn02.vercel.app/",
    github: "https://github.com/fgn02/Chatify",
  },

  {
    title: "Telecom Churn Prediction",
    description:
      "Developed machine learning models, including Logistic Regression, Random Forest, and SVM, to predict customer churn in the telecommunications market based on behavioral data, enhancing decision-making for customer retention programs.",
    image: "https://i.imgur.com/pCyOKek.png",
    tags: [
      "Machine Learning",
      "Logistic Regression",
      "Random Forest",
      "SVM",
      "Python",
    ],
    link: "https://github.com/fgn02/Telecom-Churn-Prediction",
    github: "https://github.com/fgn02/Telecom-Churn-Prediction",
  },
  {
    title: "Gallery Whisper",
    description:
      "A comprehensive e-commerce platform tailored for art enthusiasts and collectors, built with ReactJS, NodeJS, and MongoDB. Features include art listings, gallery space bookings, and an admin panel for managing users and listings.",
    image:
      "https://www.dl.dropboxusercontent.com/scl/fi/daayoxpacjtb781v2hksh/Screenshot-2023-09-13-143850.png?rlkey=yijfkxawy6bgn5gtmjyrp1qur&dl=0",
    tags: ["E-commerce", "ReactJS", "NodeJS", "MongoDB", "JavaScript"],
    link: "https://github.com/fgn02/Gallery-Whisper",
    github: "https://github.com/fgn02/Gallery-Whisper",
  },
  {
    title: "Advanced Image Classification through CNNs",
    description:
      "Developed a five-class image classification system using a dataset of 2400 images. Evaluated multiple models, including Logistic Regression, Neural Networks, AlexNet, ResNet-34, InceptionNet, and a custom CNN model, addressing class imbalance through undersampling and oversampling techniques.",
    image: "https://i.imgur.com/kCzvSG9.png",
    tags: [
      "Image Classification",
      "CNN",
      "Deep Learning",
      "Python",
      "Jupyter Notebook",
    ],
    link: "https://github.com/fgn02/Advanced-Image-Classification-through-CNNs",
    github:
      "https://github.com/fgn02/Advanced-Image-Classification-through-CNNs",
  },
];

export default function ProjectsPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main className="pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text mb-4">
              Projects
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore the work I&apos;ve done in AI, software engineering, and
              beyond.
            </p>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="overflow-hidden h-full bg-gray-800/50 backdrop-blur-sm border-gray-700">
                  <div className="relative h-48 md:h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto">
                      <Button asChild variant="default" className="flex-1">
                        <Link href={project.link}>View Project</Link>
                      </Button>
                      <Button asChild variant="outline" className="px-3">
                        <Link href={project.github}>
                          <Github className="h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
      <Footer simplified showDivider={true} />
    </div>
  );
}

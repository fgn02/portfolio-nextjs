"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiTensorflow,
  SiPandas,
} from "react-icons/si";

const techStack = [
  { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
  { name: "TensorFlow", icon: SiTensorflow, color: "text-[#FF6F00]" },
  { name: "Pandas", icon: SiPandas, color: "text-[#150458]" },
];

export default function AboutPage() {
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
              About Me
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get to know more about my journey, passions and aspirations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  Hi! I&apos;m{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Farhan Ishraq Fagun
                  </span>
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Detail-oriented Computer Science graduate with comprehensive
                  experience in web development, machine learning, and data
                  analysis. Proficient in Python, JavaScript, data manipulation
                  libraries, and full- stack web technologies.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Skilled in developing responsive web applications, analyzing
                  complex datasets, and building predictive models. Adept at
                  leveraging both technical and analytical expertise to create
                  efficient solutions, optimize processes, and contribute to
                  informed decision-making in dynamic environments.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-white text-center mb-8">
                  Technical Expertise
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 max-w-6xl mx-auto px-4">
                  {techStack.map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="flex flex-col items-center gap-2"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <tech.icon
                        className={`w-12 h-12 ${tech.color} transition-colors duration-300`}
                      />
                      <span className="text-sm text-gray-400">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20" />
              <div className="relative aspect-square overflow-hidden rounded-full border-4 border-gray-800">
                <Image
                  src="/image.jpg"
                  alt="Farhan Ishraq Fagun"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-32 max-w-4xl mx-auto px-4"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-white text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                Personal Interests
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Beyond the world of coding and technology, I find joy in
                  various pursuits that keep me balanced and inspired:
                </p>
                <ul className="space-y-3 list-disc pl-6">
                  <li>
                    <span className="text-purple-400 font-medium">
                      Photography:
                    </span>{" "}
                    Capturing moments and perspectives through my lens,
                    especially during travels and nature walks.
                  </li>
                  <li>
                    <span className="text-purple-400 font-medium">
                      Reading:
                    </span>{" "}
                    Exploring diverse genres from technical literature to
                    science fiction, constantly expanding my knowledge.
                  </li>
                  <li>
                    <span className="text-purple-400 font-medium">
                      Fitness:
                    </span>{" "}
                    Maintaining an active lifestyle through regular exercise and
                    outdoor activities.
                  </li>
                  <li>
                    <span className="text-purple-400 font-medium">Music:</span>{" "}
                    Playing guitar and exploring different musical genres in my
                    free time.
                  </li>
                </ul>
                <p className="mt-4 text-gray-400 italic">
                  These interests not only provide a creative outlet but also
                  inspire innovative approaches to problem-solving in my
                  technical work.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
      <Footer simplified showDivider={true} />
    </div>
  );
}

"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
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
  SiHtml5,
  SiCss3,
  SiPhp,
  SiNumpy,
  SiScikitlearn,
  SiGit,
  SiJupyter,
  SiOpenjdk,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  logo: string;
  content: React.ReactNode;
  side?: "left" | "right";
}

function TimelineItem({
  title,
  subtitle,
  date,
  logo,
  content,
  side = "left",
}: TimelineItemProps) {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"],
  });

  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      ref={itemRef}
      className="grid grid-cols-[1fr_auto_1fr] gap-8 items-start"
    >
      <div className={side === "left" ? "block" : "invisible"}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 w-full min-h-[300px] transform hover:scale-[1.02] transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
              <Image
                src={logo}
                alt={title}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
              <p className="text-gray-400 mb-1">{subtitle}</p>
              <p className="text-sm text-gray-500">{date}</p>
            </div>
          </div>
          <div className="mt-6 text-gray-300 space-y-3">{content}</div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-purple-500 z-10" />
        <motion.div
          className="w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mt-2"
          style={{
            height: 200,
            scaleY: scaleProgress,
            originY: 0,
          }}
        />
      </div>

      <div className={side === "right" ? "block" : "invisible"}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 w-full min-h-[300px] transform hover:scale-[1.02] transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
              <Image
                src={logo}
                alt={title}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
              <p className="text-gray-400 mb-1">{subtitle}</p>
              <p className="text-sm text-gray-500">{date}</p>
            </div>
          </div>
          <div className="mt-6 text-gray-300 space-y-3">{content}</div>
        </motion.div>
      </div>
    </div>
  );
}

const skillsData = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "Java", icon: SiOpenjdk, color: "text-[#007396]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
    ],
  },
  {
    title: "Data Analysis",
    icon: "📊",
    skills: [
      { name: "Pandas", icon: SiPandas, color: "text-[#150458]" },
      { name: "NumPy", icon: SiNumpy, color: "text-[#013243]" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "text-[#F7931E]" },
      { name: "TensorFlow", icon: SiTensorflow, color: "text-[#FF6F00]" },
    ],
  },
  {
    title: "Web Development",
    icon: "🌐",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]" },
      { name: "CSS", icon: SiCss3, color: "text-[#1572B6]" },
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
    ],
  },
  {
    title: "Tools & Databases",
    icon: "🛠",
    skills: [
      { name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { name: "VS Code", icon: FaCode, color: "text-[#007ACC]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
    ],
  },
];

function SkillSection() {
  return (
    <section className="py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
      >
        Technical Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {skillsData.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>{category.icon}</span>
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <skill.icon
                    className={`w-8 h-8 ${skill.color} transition-all duration-300`}
                  />
                  <span className="text-sm text-gray-400">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  const educationItems = [
    {
      title: "Bachelor of Science in Computer Science and Engineering",
      subtitle: "BRAC University, Dhaka",
      date: "Jan 2020 - Aug 2024",
      logo: "/braculogo.png",
      content: (
        <>
          <p className="font-semibold">CGPA: 3.83 out of 4.00</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Thesis on Enhanced CNN Approaches for Multi-Image Embedding in
              Image Steganography
            </li>
            <li>Image Processing & Information Security Research</li>
            <li>Published paper in ICICT 2024</li>
          </ul>
        </>
      ),
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      subtitle: "Adamjee Cantonment College, Dhaka",
      date: "June 2017 - April 2019",
      logo: "/acc.png",
      content: (
        <>
          <p className="font-semibold">GPA: 5.00 out of 5.00</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Science Group</li>
            <li>Merit Position Holder</li>
          </ul>
        </>
      ),
    },
  ];

  const workItems = [
    {
      title: "Undergraduate Teaching Assistant",
      subtitle: "BRAC University",
      date: "Jan 2023 - Aug 2024",
      logo: "/braculogo.png",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            Facilitated learning in Programming Language-I with hands-on coding
            exercises
          </li>
          <li>
            Supported Object-Oriented Programming course with practical labs
          </li>
          <li>Assisted in MATH II, guiding students through calculus</li>
          <li>Provided coursework assistance to 50+ students</li>
        </ul>
      ),
    },
  ];

  const researchItems = [
    {
      title: "Enhanced CNN Approaches for Multi-Image Embedding",
      subtitle: "Image Processing & Information Security",
      date: "2024",
      logo: "/braculogo.png",
      content: (
        <>
          <p className="mb-4">
            Research focused on developing advanced CNN architectures for secure
            multi-image embedding in steganography applications.
          </p>
          <div className="flex flex-wrap gap-2">
            {["CNN", "Deep Learning", "Image Processing", "Security"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-700/50 rounded-full text-sm"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text mb-4">
              My Portfolio
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover my journey, achievements, and skills.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-32">
            <section>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
              >
                Education
              </motion.h2>
              <div className="space-y-24">
                {educationItems.map((item, index) => (
                  <TimelineItem
                    key={index}
                    {...item}
                    side={index % 2 === 0 ? "left" : "right"}
                  />
                ))}
              </div>
            </section>

            <section>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text"
              >
                Work Experience
              </motion.h2>
              <div className="space-y-24">
                {workItems.map((item, index) => (
                  <TimelineItem
                    key={index}
                    {...item}
                    side={index % 2 === 0 ? "left" : "right"}
                  />
                ))}
              </div>
            </section>

            <section>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text"
              >
                Research & Thesis
              </motion.h2>
              <div className="space-y-24">
                {researchItems.map((item, index) => (
                  <TimelineItem
                    key={index}
                    {...item}
                    side={index % 2 === 0 ? "left" : "right"}
                  />
                ))}
              </div>
            </section>

            <SkillSection />
          </div>
        </div>
      </main>

      <Footer simplified showDivider={true} />
    </div>
  );
}

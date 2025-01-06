"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";

const taglines = [
  "Innovative Computer Science graduate",
  "Passionate about creating solutions",
  "Turning ideas into reality",
  "Building the future with code",
];

export default function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const bounceAnimation = {
    y: [0, 12, -4],
    transition: {
      duration: 1.2,
      times: [0, 0.4, 1],
      repeat: Infinity,
      ease: ["easeOut", "easeIn", "easeOut"],
    },
  };

  const orbs = [
    {
      className: "top-20 left-20 w-96 h-96 bg-blue-500/10",
      animation: {
        x: [0, 30, 0],
        y: [0, -30, 0],
        scale: [1, 1.1, 1],
      },
    },
    {
      className: "top-40 right-20 w-80 h-80 bg-purple-500/10",
      animation: {
        x: [0, -20, 0],
        y: [0, 40, 0],
        scale: [1, 1.05, 1],
      },
    },
    {
      className: "bottom-20 left-1/3 w-72 h-72 bg-pink-500/10",
      animation: {
        x: [0, 40, 0],
        y: [0, 20, 0],
        scale: [1, 1.15, 1],
      },
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full filter blur-3xl ${orb.className}`}
          animate={orb.animation}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: index * 0.5,
          }}
          whileHover={{ scale: 1.2 }}
          drag
          dragConstraints={{
            top: -100,
            left: -100,
            right: 100,
            bottom: 100,
          }}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        />
      ))}

      <div ref={ref} className="container mx-auto px-4 text-center z-10">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            FARHAN ISHRAQ
          </span>
          <br />
          <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
            FAGUN
          </span>
        </motion.h1>

        <div className="relative h-20 mb-8">
          {taglines.map((tagline, index) => (
            <motion.p
              key={index}
              className="text-xl md:text-2xl text-gray-300 absolute left-0 right-0 mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [20, 0, 0, -20],
              }}
              transition={{
                duration: 4,
                delay: index * 4,
                repeat: Infinity,
                repeatDelay: (taglines.length - 1) * 4,
              }}
            >
              {tagline}
            </motion.p>
          ))}
        </div>

        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SocialIcon
            href="https://linkedin.com"
            className="bg-[#0077B5] hover:bg-[#0077B5]/80"
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            }
          />
          <SocialIcon
            href="https://github.com"
            className="bg-gray-800 hover:bg-gray-700"
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            }
          />
          <SocialIcon
            href="mailto:example@gmail.com"
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:opacity-90"
            icon={
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            }
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={bounceAnimation}
      >
        <ChevronDown className="w-8 h-8 text-white opacity-80" />
      </motion.div>
    </section>
  );
}

interface SocialIconProps {
  href: string;
  className?: string;
  icon: React.ReactNode;
}

function SocialIcon({ href, className, icon }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3 rounded-full text-white transform transition-all duration-200 hover:scale-110 ${className}`}
    >
      {icon}
    </a>
  );
}

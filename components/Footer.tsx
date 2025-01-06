"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface FooterProps {
  simplified?: boolean;
  showDivider?: boolean;
}

export default function Footer({
  simplified = false,
  showDivider = true,
}: FooterProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.footer
      className={`relative ${simplified ? "py-12" : "py-20"}`}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      ref={ref}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-10"
        >
          {!simplified && (
            <>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-2">
                Explore More About Me
              </h2>

              <div className="flex flex-wrap justify-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-200" />
                  <Link
                    href="/about"
                    className="relative px-8 py-4 bg-gray-900 rounded-lg text-white font-medium inline-block"
                  >
                    About Me
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-200" />
                  <Link
                    href="/portfolio"
                    className="relative px-8 py-4 bg-gray-900 rounded-lg text-white font-medium inline-block"
                  >
                    Portfolio
                  </Link>
                </motion.div>
              </div>
            </>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={`${
              showDivider ? "mt-8 pt-8 border-t border-gray-800" : "mt-0"
            }`}
          >
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Farhan Ishraq Fagun. All Rights
              Reserved.
            </p>
          </motion.div>
        </motion.div>

        {!simplified && (
          <>
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl" />
          </>
        )}
      </div>
    </motion.footer>
  );
}

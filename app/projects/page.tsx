"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
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
            <p className="text-gray-400 max-w-2xl mx-auto">Coming Soon...</p>
          </div>
        </motion.div>
      </main>
      <Footer simplified showDivider={true} />
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 flex justify-center py-6 bg-gray-900/30 backdrop-blur-sm shadow-lg"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <ul className="flex gap-8">
        {navItems.map((item, index) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <Link
              href={item.href}
              className="text-gray-300 hover:text-white font-medium tracking-wide text-sm transition-colors duration-200 relative group"
            >
              {item.name}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

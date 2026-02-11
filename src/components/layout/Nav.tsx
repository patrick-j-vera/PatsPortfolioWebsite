"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/icons";
import Menu from "./Menu";
import useScrollDirection from "@/hooks/useScrollDirection";
import { navLinks } from "@/lib/config";
import { ANIMATION } from "@/lib/constants";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollDirection, scrolledToTop } = useScrollDirection();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navVisible = scrollDirection === "up" || scrolledToTop;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-20 px-6 md:px-12 flex items-center justify-between bg-warm-white/90 backdrop-blur-sm transition-transform duration-300 ${
          navVisible ? "translate-y-0" : "-translate-y-full"
        } ${scrolledToTop ? "" : "shadow-sm"}`}
      >
        <motion.a
          href="#hero"
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          aria-label="Home"
        >
          <Logo />
        </motion.a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.url}
              className="text-sm text-bark-light hover:text-honey transition-colors"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: shouldReduceMotion ? 0 : ANIMATION.delayChildren + i * 0.1,
              }}
            >
              <span className="font-mono text-honey text-xs mr-1">
                {link.number}.
              </span>
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="/resume.pdf"
            className="border border-honey text-honey px-4 py-2 rounded text-sm font-mono hover:bg-honey-subtle transition-colors"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: shouldReduceMotion
                ? 0
                : ANIMATION.delayChildren + navLinks.length * 0.1,
            }}
          >
            Resume
          </motion.a>
        </nav>

        <motion.button
          className="md:hidden relative z-50 flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <span
            className={`block w-6 h-0.5 bg-bark transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-bark transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-bark transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </motion.button>
      </header>

      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

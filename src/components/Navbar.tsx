"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "TechStack", href: "#techstack" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-60 w-full overflow-x-clip transition-all duration-500 ${
          scrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md py-3 shadow-lg border-b border-slate-200/50"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl min-w-0 items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#"
            className="flex min-w-0 max-w-[calc(100vw-5rem)] items-center gap-2 sm:max-w-none"
          >
            <div className="rounded-xl bg-blue-600 p-1.5 shadow-lg transition-transform duration-300 hover:rotate-12">
              <Code2 size={20} className="text-white sm:size-5.5" />
            </div>
            <span className="block truncate text-lg font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
              Quy<span className="text-blue-600">.Dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center bg-slate-100/50 dark:bg-slate-800/50 p-1.5 rounded-full border border-slate-200/50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-all rounded-full hover:bg-white dark:hover:bg-slate-700"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CV Button Desktop */}
          <div className="hidden md:block">
            <a
              href="#cv"
              className="inline-flex items-center gap-2 bg-slate-900 dark:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-md"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          {/* Mobile Toggle Button - Cải thiện vị trí */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-100 shrink-0 p-1 text-slate-600 dark:text-slate-300 md:hidden"
          >
            <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay làm mờ nền */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-70 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-70 bg-white dark:bg-slate-900 z-80 shadow-2xl md:hidden"
            >
              <div className="flex flex-col h-full p-8">
                <div className="mb-10">
                  <span className="font-bold text-2xl text-blue-600">Menu</span>
                </div>

                <div className="flex flex-col gap-4">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xl font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 py-2 border-b border-slate-100 dark:border-slate-800"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                <div className="mt-auto">
                  <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2">
                    <Download size={20} />
                    Tải CV của tôi
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

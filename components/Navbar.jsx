import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "phosphor-react";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "About", scroll: 900 },
    { name: "Skills", scroll: 1200 },
    { name: "Experience", scroll: 1700 },
    { name: "Projects", scroll: 2300 },
    { name: "Contact", scroll: 4000 },
  ];

  const scrollToSection = (scrollY) => {
    setDropdown(false);
    window.scrollTo({ top: scrollY, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-md bg-surface border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="hidden md:flex items-center justify-between px-8 lg:px-16 py-6">
          <motion.button
            onClick={() => scrollToSection(0)}
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="relative w-12 h-12 rounded-full bg-gradient-to-r from-theme to-secondary flex items-center justify-center font-bold text-white shadow-lg shadow-theme/25"
          >
            S
          </motion.button>

          <ul className="flex items-center space-x-8 font-medium">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                onClick={() => scrollToSection(item.scroll)}
                className="cursor-pointer text-light hover:text-theme transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-theme to-secondary group-hover:w-full transition-all duration-300"></span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <div className={`flex items-center justify-between px-6 py-6 relative z-50 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-md bg-surface' : 'bg-transparent'
        }`}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-theme to-secondary flex items-center justify-center font-bold text-white shadow-lg"
          >
            S
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDropdown(!dropdown)}
            className="p-2 rounded-lg glass-card"
          >
            <AnimatePresence mode="wait">
              {dropdown ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  exit={{ rotate: 0 }}
                >
                  <X size={24} className="text-light" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 180 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 180 }}
                >
                  <List size={24} className="text-light" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {dropdown && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setDropdown(false)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-surface backdrop-blur-md border-l border-white/10 z-50 flex flex-col justify-center"
              >
                <ul className="space-y-8 px-8">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      onClick={() => scrollToSection(item.scroll)}
                      className="text-xl font-medium text-light hover:text-theme transition-colors duration-200 cursor-pointer"
                    >
                      {item.name}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;

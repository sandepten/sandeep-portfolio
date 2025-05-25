import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "phosphor-react";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "About", target: "about" },
    { name: "Skills", target: "skills" },
    { name: "Experience", target: "experience" },
    { name: "Projects", target: "projects" },
    { name: "Contact", target: "contact" },
  ];

  const scrollToSection = (target) => {
    setDropdown(false);
    if (target === "home") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(target);
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          scrolled
            ? 'backdrop-blur-xl bg-slate-950/95 shadow-xl shadow-black/10'
            : 'bg-transparent'
        }`}
        style={{
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
        }}
      >
        <div className="mx-auto px-6 lg:px-8">
          <div className="hidden md:flex items-center justify-between py-4">
            <motion.button
              onClick={() => scrollToSection("home")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-theme via-secondary to-accent rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-theme to-secondary flex items-center justify-center font-bold text-white text-lg shadow-2xl transform transition-all duration-500 group-hover:shadow-theme/50 group-hover:rotate-12">
                S
              </div>
            </motion.button>

            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, staggerChildren: 0.1 }}
              className="flex items-center space-x-2 font-medium"
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onClick={() => scrollToSection(item.target)}
                  className="cursor-pointer relative group"
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="relative px-4 py-2 rounded-xl text-light hover:text-white transition-all duration-300 group-hover:bg-white/5"
                  >
                    <span className="relative z-10 font-medium">{item.name}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-theme/10 via-secondary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                      layoutId="navbar-hover"
                    />
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-theme via-secondary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
            scrolled ? 'backdrop-blur-xl bg-slate-950/95 shadow-xl shadow-black/10' : 'bg-transparent'
          }`}
          style={{
            borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
          }}
        >
          <div className="flex items-center justify-between px-6 py-4">
            <motion.button
              onClick={() => scrollToSection("home")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-theme via-secondary to-accent rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative w-11 h-11 rounded-full bg-gradient-to-r from-theme to-secondary flex items-center justify-center font-bold text-white shadow-2xl transform transition-all duration-500 group-hover:shadow-theme/50 group-hover:rotate-12">
                S
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDropdown(!dropdown)}
              className="p-3 rounded-xl glass-card hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <AnimatePresence mode="wait">
                {dropdown ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} className="text-light" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <List size={22} className="text-light" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {dropdown && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setDropdown(false)}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              />

              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-slate-950/98 backdrop-blur-xl border-l border-white/10 z-50 shadow-2xl"
              >
                <div className="flex flex-col justify-center h-full">
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, staggerChildren: 0.1 }}
                    className="space-y-2 px-8"
                  >
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                        onClick={() => scrollToSection(item.target)}
                        className="cursor-pointer relative group"
                      >
                        <motion.div
                          whileHover={{ x: 8, scale: 1.02 }}
                          className="text-xl font-medium text-light hover:text-white transition-all duration-300 py-4 px-4 rounded-xl hover:bg-white/5 relative group"
                        >
                          <span className="relative z-10">{item.name}</span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-theme/10 via-secondary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                          />
                          <span className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-theme via-secondary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                        </motion.div>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;

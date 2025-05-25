import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkle } from "phosphor-react";
import React from "react";

export default function Dashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-theme to-secondary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-accent to-theme rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
            <Sparkle className="text-theme animate-pulse" size={16} />
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="block text-light">Hello, I'm</span>
          <span className="block gradient-text">Sandeep Kumar</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl lg:text-3xl text-muted font-medium mb-8 max-w-4xl mx-auto">
          Software Developer crafting scalable solutions with modern technologies
        </motion.p>

        <motion.p variants={itemVariants} className="text-lg text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
          I specialize in building full-stack applications, DevOps automation, and cloud infrastructure.
          Currently engineering innovative solutions at{" "}
          <a href="https://www.jio.com/" className="gradient-text font-semibold hover:underline">
            Reliance Jio
          </a>
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-theme to-secondary text-white font-semibold rounded-xl shadow-lg shadow-theme/25 hover:shadow-xl hover:shadow-theme/40 transition-all duration-300"
          >
            <Download size={20} />
            Download Resume
          </motion.a>

          <motion.button
            onClick={() => {
              const element = document.getElementById('about');
              if (element) {
                const yOffset = -100;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 glass-card text-light font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
          >
            <ArrowDown size={20} />
            Explore My Work
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, repeat: Infinity, repeatType: "reverse", duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="text-theme animate-bounce" size={24} />
      </motion.div>
    </div>
  );
}

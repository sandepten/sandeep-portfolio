import { motion } from "framer-motion";
import Image from "next/image";
import { CaretRight, Heart, Code, Rocket } from "phosphor-react";
import React from "react";
import Skills from "./Skills";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section className="section-padding">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Passionate developer with a love for creating beautiful and functional
            web experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-theme" size={24} />
                <h3 className="text-xl font-semibold">My Journey</h3>
              </div>
              <p className="text-muted leading-relaxed">
                The COVID lockdown became a turning point in my life, introducing me
                to the fascinating world of{" "}
                <span className="gradient-text font-semibold">
                  web development and programming
                </span>
                . What started as curiosity quickly evolved into a deep passion for
                creating digital solutions.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-secondary" size={24} />
                <h3 className="text-xl font-semibold">What I Do</h3>
              </div>
              <p className="text-muted leading-relaxed">
                I specialize in{" "}
                <span className="gradient-text font-semibold">
                  full-stack web development
                </span>
                , crafting beautiful user interfaces and robust backend systems. I love
                working with modern technologies like React, Next.js, Node.js, and
                exploring blockchain integrations.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="text-accent" size={24} />
                <h3 className="text-xl font-semibold">Looking Forward</h3>
              </div>
              <p className="text-muted leading-relaxed">
                I'm currently{" "}
                <span className="gradient-text font-semibold">
                  seeking new opportunities
                </span>{" "}
                to work with innovative teams and create impactful digital experiences.
                Let's build something amazing together!
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-theme to-secondary rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative">
                <img
                  src="/profile.jpg"
                  className="w-full rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  alt="Sandeep Kumar - Full Stack Developer"
                />
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-theme to-secondary rounded-full flex items-center justify-center animate-float">
              <Code className="text-white" size={24} />
            </div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-accent to-theme rounded-full flex items-center justify-center animate-float">
              <Rocket className="text-white" size={24} />
            </div>
          </motion.div>
        </div>

        <Skills />
      </motion.div>
    </section>
  );
}

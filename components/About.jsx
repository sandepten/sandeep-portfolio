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
    <section id="about" className="section-padding">
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
            Passionate software developer with expertise in full-stack development,
            DevOps automation, and scalable cloud solutions
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
                My journey into software development began during the COVID lockdown, when I discovered my passion for{" "}
                <span className="gradient-text font-semibold">
                  creating innovative digital solutions
                </span>
                . From learning the fundamentals through Harvard's CS50x to working with Fortune 500 companies,
                I've continuously evolved my skills in modern technologies.
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
                  full-stack development, DevOps automation, and cloud infrastructure
                </span>
                , working with technologies like React, Node.js, Go, Java, Docker, and Kubernetes.
                I've contributed to projects that serve millions of users and reduced deployment times by up to 30%.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="text-accent" size={24} />
                <h3 className="text-xl font-semibold">Looking Forward</h3>
              </div>
              <p className="text-muted leading-relaxed">
                Currently working as a{" "}
                <span className="gradient-text font-semibold">
                  Software Developer at Reliance Jio
                </span>
                , I'm passionate about building scalable solutions and contributing to open-source projects.
                Always excited to take on new challenges and collaborate with innovative teams!
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
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-accent to-theme rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <Rocket className="text-white" size={24} />
            </div>
          </motion.div>
        </div>

        <Skills />
      </motion.div>
    </section>
  );
}

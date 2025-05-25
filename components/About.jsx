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
        viewport={{ once: true, amount: 0.3 }}
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

        <div className="relative">
          {/* Main content with overlapping design */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">

            {/* Photo section - positioned creatively */}
            <motion.div variants={itemVariants} className="lg:col-span-5 relative">
              <div className="sticky top-32">
                {/* Main photo container with creative positioning */}
                <div className="relative group">
                  {/* Gradient background */}
                  <div className="absolute -inset-6 bg-gradient-to-br from-theme/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-700"></div>

                  {/* Photo frame */}
                  <div className="relative">
                    <div className="w-full aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden border-2 border-white/10 group-hover:border-theme/30 transition-all duration-500 shadow-2xl">
                      <img
                        src="/profile.jpg"
                        className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                        alt="Sandeep Kumar - Software Developer"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Interactive overlay with info */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <div className="text-white">
                          <p className="font-semibold text-lg">Sandeep Kumar</p>
                          <p className="text-sm opacity-90">Software Developer @ Reliance Jio</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating tech icons */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring", stiffness: 200 }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-theme to-secondary rounded-2xl flex items-center justify-center shadow-xl animate-float"
                  >
                    <Code className="text-white" size={24} />
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent to-theme rounded-2xl flex items-center justify-center shadow-xl animate-float"
                    style={{ animationDelay: '1s' }}
                  >
                    <Rocket className="text-white" size={24} />
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                    className="absolute top-1/2 -left-6 w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center shadow-lg animate-float"
                    style={{ animationDelay: '2s' }}
                  >
                    <Heart className="text-white" size={20} />
                  </motion.div>
                </div>

                {/* Quick stats below photo */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-2 gap-4 mt-8"
                >
                  {[
                    { number: "3+", label: "Years Exp" },
                    { number: "15+", label: "Projects" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="glass-card p-4 rounded-xl text-center group hover:shadow-xl hover:shadow-theme/10 transition-all duration-300"
                    >
                      <div className="text-2xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-muted text-xs group-hover:text-light transition-colors duration-300">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Content section with overlapping cards */}
            <motion.div variants={itemVariants} className="lg:col-span-7 space-y-8">
              {/* First card - Journey */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2 }}
                className="glass-card p-8 rounded-2xl group hover:shadow-xl hover:shadow-theme/10 transition-all duration-500 relative z-10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-theme/20 to-theme/10 group-hover:from-theme/30 group-hover:to-theme/20 transition-all duration-300">
                    <Heart className="text-theme" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-theme transition-colors duration-300">My Journey</h3>
                    <p className="text-muted leading-relaxed group-hover:text-light transition-colors duration-300">
                      My journey into software development began during the COVID lockdown, when I discovered my passion for{" "}
                      <span className="gradient-text font-semibold">creating innovative digital solutions</span>.
                      From learning through Harvard's CS50x to working with Fortune 500 companies.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Second card - What I Do (overlapping) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4 }}
                className="glass-card p-8 rounded-2xl group hover:shadow-xl hover:shadow-secondary/10 transition-all duration-500 relative z-20 lg:-mt-4 lg:ml-8"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 group-hover:from-secondary/30 group-hover:to-secondary/20 transition-all duration-300">
                    <Code className="text-secondary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary transition-colors duration-300">What I Do</h3>
                    <p className="text-muted leading-relaxed group-hover:text-light transition-colors duration-300">
                      I specialize in{" "}
                      <span className="gradient-text font-semibold">full-stack development, DevOps automation, and cloud infrastructure</span>,
                      working with React, Node.js, Go, Java, Docker, and Kubernetes. Contributed to projects serving millions of users.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Third card - Looking Forward (overlapping more) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.6 }}
                className="glass-card p-8 rounded-2xl group hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 relative z-30 lg:-mt-4"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300">
                    <Rocket className="text-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">Looking Forward</h3>
                    <p className="text-muted leading-relaxed group-hover:text-light transition-colors duration-300">
                      Currently working as a{" "}
                      <span className="gradient-text font-semibold">Software Developer at Reliance Jio</span>,
                      passionate about building scalable solutions and contributing to open-source projects.
                      Always excited for new challenges!
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Additional achievement highlights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-2 gap-4 lg:ml-4"
              >
                {[
                  { number: "3", label: "Companies", desc: "Fortune 500 to Startups" },
                  { number: "50+", label: "Technologies", desc: "Modern Tech Stack" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass-card p-6 rounded-xl text-center group hover:shadow-lg hover:shadow-theme/10 transition-all duration-300"
                  >
                    <div className="text-2xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-light text-sm font-medium mb-1 group-hover:text-theme transition-colors duration-300">
                      {stat.label}
                    </div>
                    <div className="text-muted text-xs group-hover:text-light transition-colors duration-300">
                      {stat.desc}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Decorative background elements */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-theme/5 to-secondary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-accent/5 to-theme/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <Skills />
      </motion.div>
    </section>
  );
}

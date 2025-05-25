import { motion } from "framer-motion";
import { CaretRight, Calendar, Globe, Buildings } from "phosphor-react";
import React from "react";

export default function Work() {
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
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-xl text-dark max-w-2xl mx-auto">
            Building innovative solutions and growing with amazing teams
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-theme to-secondary hidden md:block"></div>

          <div className="glass-card p-8 md:p-12 rounded-2xl relative md:ml-20">
            {/* Timeline dot */}
            <div className="absolute -left-12 top-12 w-6 h-6 bg-gradient-to-r from-theme to-secondary rounded-full border-4 border-slate-900 hidden md:block"></div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Buildings className="text-theme" size={24} />
                    <h3 className="text-2xl font-bold gradient-text">
                      Create Protocol
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="text-xl font-semibold text-light">
                      Full-Stack Web Developer
                    </span>
                    <a
                      href="https://createprotocol.org/"
                      className="inline-flex items-center gap-2 text-theme hover:text-secondary transition-colors duration-200"
                    >
                      <Globe size={16} />
                      Visit Website
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-dark font-mono text-sm mb-6">
                    <Calendar size={16} />
                    October 2022 - Present (2+ years)
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Architected and developed full-stack web applications integrating cutting-edge blockchain technologies and smart contracts",
                    "Led backend development initiatives, implementing robust authentication systems, API optimization, and database architecture improvements",
                    "Collaborated with international clients to understand requirements and delivered scalable solutions that exceeded expectations",
                    "Spearheaded a complete platform redesign and technology upgrade, resulting in improved user experience and performance",
                    "Mentored junior developers and established best practices for code quality and development workflows",
                  ].map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 group"
                    >
                      <CaretRight className="mt-1 text-theme flex-shrink-0 group-hover:text-secondary transition-colors duration-200" size={20} />
                      <p className="text-dark leading-relaxed group-hover:text-light transition-colors duration-200">
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="font-semibold mb-3 gradient-text">
                    Key Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Next.js",
                      "Node.js",
                      "TypeScript",
                      "Blockchain",
                      "MongoDB",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-theme/20 to-secondary/20 text-light text-xs rounded-full border border-theme/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-6 rounded-xl">
                  <h4 className="font-semibold mb-3 gradient-text">Impact</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-dark">Projects Delivered</span>
                      <span className="font-semibold text-light">15+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark">Client Satisfaction</span>
                      <span className="font-semibold text-light">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark">Team Growth</span>
                      <span className="font-semibold text-light">200%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

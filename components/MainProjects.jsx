import { motion } from "framer-motion";
import { GithubLogo, Link, ArrowUpRight, Star } from "phosphor-react";
import React from "react";
import projectData from "../utilities/mainProjectData";

export default function MainProjects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="projects" className="section-padding">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            A showcase of some of my best work and side projects
          </p>
        </motion.div>

        <div className="space-y-20 lg:space-y-32">
          {projectData.map((project, index) => (
            <motion.div
              key={project.name}
              variants={itemVariants}
              className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:text-right" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`lg:col-span-7 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-theme to-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <div className="aspect-video bg-gradient-to-br from-surface to-slate-800 rounded-2xl border border-white/10 overflow-hidden group-hover:border-theme/50 transition-all duration-300">
                        {project.image ? (
                          <img
                            src={`/${project.image}`}
                            alt={project.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-6xl gradient-text opacity-50">
                              {project.name.charAt(0)}
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <span className="text-white font-semibold flex items-center gap-2">
                            View Project{" "}
                            <ArrowUpRight size={20} className="animate-bounce" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Project Info */}
              <div
                className={`lg:col-span-5 space-y-6 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="text-theme" size={20} />
                    <span className="text-theme font-mono text-sm uppercase tracking-wider">
                      Featured Project
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-light mb-4 hover:text-theme transition-colors duration-200">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {project.name}
                    </a>
                  </h3>
                </div>

                <div className="glass-card p-6 rounded-xl backdrop-blur-md">
                  <p className="text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div
                  className={`flex flex-wrap gap-3 ${
                    index % 2 === 1 ? "lg:justify-end" : ""
                  }`}
                >
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-theme/20 to-secondary/20 text-light text-sm rounded-full border border-theme/30 hover:border-theme/60 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className={`flex items-center gap-6 ${
                    index % 2 === 1 ? "lg:justify-end" : ""
                  }`}
                >
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl glass-card hover:bg-white/20 transition-all duration-200"
                  >
                    <GithubLogo
                      size={24}
                      className="text-light hover:text-theme"
                    />
                  </motion.a>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl glass-card hover:bg-white/20 transition-all duration-200"
                  >
                    <Link size={24} className="text-light hover:text-theme" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Folder, GithubLogo, Link, ArrowUpRight } from "phosphor-react";
import React, { useState } from "react";
import projectData from "../utilities/otherProjectsData";

export default function OtherProjects() {
  const [showMore, setShowMore] = useState(false);
  const displayedProjects = showMore ? projectData : projectData.slice(0, 6);

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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Other Notable Projects</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A collection of other projects I've worked on during my learning
            journey
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="glass-card p-8 rounded-2xl h-full flex flex-col hover:shadow-2xl hover:shadow-theme/10 transition-all duration-300 border-2 border-transparent hover:border-theme/30">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-theme/20 to-secondary/20 group-hover:from-theme/30 group-hover:to-secondary/30 transition-all duration-300">
                    <Folder size={24} className="text-theme" />
                  </div>

                  <div className="flex items-center gap-3">
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1, rotate: 12 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GithubLogo
                          size={20}
                          className="text-dark hover:text-light"
                        />
                      </motion.a>
                    )}

                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1, rotate: 12 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowUpRight
                          size={20}
                          className="text-dark hover:text-light"
                        />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-light mb-4 group-hover:text-theme transition-colors duration-200">
                    {project.name}
                  </h3>

                  <p className="text-muted leading-relaxed mb-6 group-hover:text-light transition-colors duration-200">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-muted bg-white/5 rounded-full border border-white/10 group-hover:text-light group-hover:border-theme/30 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-theme/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More Button */}
        {projectData.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            className="text-center mt-16"
          >
            <motion.button
              onClick={() => setShowMore(!showMore)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 glass-card text-light font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border-2 border-transparent hover:border-theme/30"
            >
              {showMore ? "Show Less" : "Show More Projects"}
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Lightning,
  Palette,
  Shield,
  CloudArrowUp,
  DeviceMobile
} from "phosphor-react";
import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Palette size={24} />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      icon: <Database size={24} />,
      skills: ["Node.js", "Express.js", "Python", "MongoDB", "PostgreSQL", "Firebase"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Tools & Technologies",
      icon: <Lightning size={24} />,
      skills: ["Git", "Docker", "AWS", "Vercel", "Linux", "Blockchain"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Languages",
      icon: <Code size={24} />,
      skills: ["JavaScript", "TypeScript", "Python", "C++", "Solidity", "SQL"],
      color: "from-orange-500 to-red-500"
    }
  ];

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
    <section className="mt-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
          <span className="gradient-text">Skills & Technologies</span>
        </motion.h3>
        <motion.p variants={itemVariants} className="text-lg text-muted max-w-2xl mx-auto">
          A comprehensive toolkit of modern technologies I've mastered over the years
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 xl:grid-cols-4 gap-8"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass-card p-6 rounded-2xl group hover:shadow-2xl transition-all duration-300"
          >
            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {category.icon}
            </div>

            <h4 className="text-xl font-semibold mb-4 text-light">{category.title}</h4>

            <div className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: skillIndex * 0.1 }}
                  className="flex items-center gap-2 text-muted hover:text-light transition-colors duration-200"
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                  <span className="text-sm font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional skills showcase */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="glass-card p-8 rounded-2xl">
          <h4 className="text-xl font-semibold mb-4 gradient-text">Always Learning</h4>
          <p className="text-muted max-w-2xl mx-auto">
            The tech world evolves rapidly, and I'm committed to continuous learning.
            Currently exploring AI/ML integration, Web3 technologies, and advanced cloud architectures.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

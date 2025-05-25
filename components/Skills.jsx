import { motion } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Lightning,
  Palette,
  Shield,
  CloudArrowUp,
  DeviceMobile,
  Sparkle
} from "phosphor-react";
import React, { useState } from "react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "JavaScript", icon: "🚀" },
        { name: "TypeScript", icon: "⚡" },
        { name: "Go", icon: "🔥" },
        { name: "Java", icon: "☕" },
        { name: "Python", icon: "🐍" },
        { name: "Rust", icon: "⚙️" }
      ],
      color: "from-indigo-600 to-purple-600",
      gradient: "from-indigo-500/20 to-purple-500/20"
    },
    {
      title: "Frontend & Mobile",
      icon: <Palette size={24} />,
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "Angular", icon: "🅰️" },
        { name: "Svelte", icon: "🧡" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "Redux", icon: "🔄" }
      ],
      color: "from-blue-600 to-cyan-600",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Backend & APIs",
      icon: <Database size={24} />,
      skills: [
        { name: "Node.js", icon: "💚" },
        { name: "Spring Boot", icon: "🍃" },
        { name: "Express.js", icon: "🚄" },
        { name: "GraphQL", icon: "📊" },
        { name: "Microservices", icon: "🔗" },
        { name: "REST", icon: "🌐" }
      ],
      color: "from-emerald-600 to-teal-600",
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "DevOps & Cloud",
      icon: <CloudArrowUp size={24} />,
      skills: [
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "☸️" },
        { name: "AWS", icon: "☁️" },
        { name: "GCP", icon: "🌤️" },
        { name: "Terraform", icon: "🏗️" },
        { name: "Jenkins", icon: "🔧" }
      ],
      color: "from-orange-600 to-red-600",
      gradient: "from-orange-500/20 to-red-500/20"
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
    <section id="skills" className="mt-16 lg:mt-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="text-center mb-12 lg:mb-16 px-4"
      >
        <motion.div variants={itemVariants} className="mb-4 lg:mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-4 lg:mb-6">
            <Sparkle className="text-theme animate-pulse" size={16} />
            Technical Expertise
          </div>
        </motion.div>

        <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
          <span className="gradient-text">Skills & Technologies</span>
        </motion.h3>
        <motion.p variants={itemVariants} className="text-base lg:text-lg text-muted max-w-2xl mx-auto px-4">
          A comprehensive toolkit spanning full-stack development, DevOps automation,
          and cloud infrastructure with hands-on experience in enterprise environments
        </motion.p>
      </motion.div>

      {/* Interactive Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-12 lg:mb-16 px-4"
      >
        {skillCategories.map((category, index) => (
          <motion.button
            key={category.title}
            onClick={() => setActiveCategory(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 lg:gap-3 px-4 lg:px-6 py-2 lg:py-3 rounded-lg lg:rounded-xl font-medium transition-all duration-300 text-sm lg:text-base ${
              activeCategory === index
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                : 'glass-card text-muted hover:text-light hover:bg-white/10'
            }`}
          >
            <div className={`p-1 lg:p-2 rounded-lg ${activeCategory === index ? 'bg-white/20' : `bg-gradient-to-r ${category.color}`}`}>
              <div className="scale-75 lg:scale-100">
                {category.icon}
              </div>
            </div>
            <span className="hidden sm:block">{category.title}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Active Category Skills Display */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-12 lg:mb-16 px-4"
      >
        <div className={`glass-card p-6 lg:p-8 rounded-2xl lg:rounded-3xl relative overflow-hidden`}>
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${skillCategories[activeCategory].gradient} opacity-50`}></div>

          <div className="relative z-10">
            <div className="text-center mb-6 lg:mb-8">
              <div className={`inline-flex p-3 lg:p-4 rounded-xl lg:rounded-2xl bg-gradient-to-r ${skillCategories[activeCategory].color} mb-3 lg:mb-4`}>
                {skillCategories[activeCategory].icon}
              </div>
              <h4 className="text-xl lg:text-2xl font-bold text-light mb-2">
                {skillCategories[activeCategory].title}
              </h4>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-4 lg:p-6 rounded-xl lg:rounded-2xl group hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-2 lg:gap-3">
                    <span className="text-xl lg:text-3xl">{skill.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-sm lg:text-base font-semibold text-light group-hover:text-theme transition-colors duration-300 truncate">
                        {skill.name}
                      </h5>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Additional Technologies Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-6 lg:gap-8 px-4"
      >
        {/* Databases */}
        <div className="glass-card p-6 lg:p-8 rounded-xl lg:rounded-2xl group hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4 lg:mb-6">
            <div className="p-2 lg:p-3 rounded-lg lg:rounded-xl bg-gradient-to-r from-violet-600 to-purple-600">
              <Database size={20} className="lg:w-6 lg:h-6" />
            </div>
            <h4 className="text-lg lg:text-xl font-bold text-light">Databases</h4>
          </div>

          <div className="grid grid-cols-2 gap-2 lg:gap-4">
            {["PostgreSQL", "MongoDB", "MySQL", "Redis", "DynamoDB", "Elasticsearch"].map((db, index) => (
              <motion.div
                key={db}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 p-2 lg:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex-shrink-0"></div>
                <span className="text-xs lg:text-sm font-medium text-muted group-hover:text-light transition-colors duration-200 truncate">
                  {db}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools & Testing */}
        <div className="glass-card p-6 lg:p-8 rounded-xl lg:rounded-2xl group hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4 lg:mb-6">
            <div className="p-2 lg:p-3 rounded-lg lg:rounded-xl bg-gradient-to-r from-slate-600 to-gray-600">
              <Lightning size={20} className="lg:w-6 lg:h-6" />
            </div>
            <h4 className="text-lg lg:text-xl font-bold text-light">Tools & Testing</h4>
          </div>

          <div className="grid grid-cols-2 gap-2 lg:gap-4">
            {["Git", "Cypress", "Jest", "Playwright", "Linux", "Bash"].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 p-2 lg:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-slate-600 to-gray-600 flex-shrink-0"></div>
                <span className="text-xs lg:text-sm font-medium text-muted group-hover:text-light transition-colors duration-200 truncate">
                  {tool}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Always Learning Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        className="mt-16 text-center"
      >
        <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-theme/5 via-secondary/5 to-accent/5"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkle className="text-theme animate-pulse" size={20} />
              <h4 className="text-xl font-semibold gradient-text">Always Learning</h4>
              <Sparkle className="text-secondary animate-pulse" size={20} />
            </div>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              The tech landscape evolves rapidly, and I&apos;m committed to continuous learning.
              Currently exploring <span className="gradient-text font-semibold">advanced system design, AI/ML integration</span>,
              and contributing to high-impact open-source projects with <span className="gradient-text font-semibold">10K+ GitHub stars</span>.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

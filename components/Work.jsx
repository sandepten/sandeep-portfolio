import { motion } from "framer-motion";
import { Calendar, Globe, MapPin, Trophy, ArrowRight, Briefcase, Star } from "phosphor-react";
import React from "react";

export default function Work() {
  const experiences = [
    {
      company: "Reliance Jio",
      role: "Software Developer",
      period: "July 2024 - Present",
      duration: "6 months",
      location: "Gurugram, India",
      website: "https://www.jio.com/",
      type: "Full-time",
      current: true,
      achievements: [
        "Engineered IP Automation module for JIO HCMP and NIC customers, reducing manual effort by 20 hours weekly",
        "Led development of Internal Development Platform using Backstage framework, improving developer onboarding by 25%",
        "Designed comprehensive API Gateway infrastructure with Kubernetes, supporting 50+ microservices",
        "Developed end-to-end solutions with Angular micro-frontends and Java Spring Boot backends"
      ],
      technologies: ["Java", "Spring Boot", "Angular", "Docker", "Kubernetes", "Backstage"],
      highlights: {
        impact: "Enterprise-level automation",
        scale: "Millions of users",
        team: "100+ engineers"
      }
    },
    {
      company: "Microtek International",
      role: "Software Developer",
      period: "September 2023 - July 2024",
      duration: "11 months",
      location: "Delhi, India",
      website: "https://microtekdirect.com/",
      type: "Full-time",
      current: false,
      achievements: [
        "Developed innovative internal tools that streamlined processes, driving 20% efficiency gains",
        "Pioneered scalable CI/CD pipeline implementation, reducing deployment time by 30%",
        "Optimized Node.js/Express/Nest.js backend performance, achieving 40% performance boost",
        "Built Golang tracking and traceability application, reducing production errors by 50%"
      ],
      technologies: ["Node.js", "Go", "Docker", "CI/CD", "Express.js", "Nest.js"],
      highlights: {
        impact: "Process automation",
        scale: "Enterprise solutions",
        team: "20+ developers"
      }
    },
    {
      company: "Create Protocol",
      role: "Full Stack Developer",
      period: "October 2022 - September 2023",
      duration: "1 year",
      location: "Dubai, UAE",
      website: "https://createprotocol.org/",
      type: "Full-time",
      current: false,
      achievements: [
        "Architected Creator console for 1K+ artists with blockchain integration, increasing minting efficiency by 40%",
        "Delivered high-quality web applications using Agile methodologies with 95% client satisfaction rate",
        "Reduced project delivery time by 30% and increased team productivity by 25%",
        "Championed adoption of modern tools and technologies, driving significant technological advancement"
      ],
      technologies: ["React", "JavaScript", "Ether.js", "Blockchain", "NFT", "Web3"],
      highlights: {
        impact: "Web3 innovation",
        scale: "1000+ artists",
        team: "15+ team members"
      }
    }
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="experience" className="section-padding">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-card text-sm font-medium mb-8">
            <div className="w-2 h-2 rounded-full bg-theme animate-pulse"></div>
            Career Journey
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Building innovative solutions and growing with amazing teams across different domains
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-theme/20 via-theme/40 to-theme/20 transform -translate-x-0.5"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-theme rounded-full border-4 border-slate-950 transform -translate-x-1/2 z-10 shadow-lg shadow-theme/25">
                  {exp.current && (
                    <div className="absolute inset-0 bg-theme rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-16 ml-16 md:ml-0' : 'md:pl-16 ml-16 md:ml-0'
                  }`}
                >
                  <div className="glass-card p-8 rounded-2xl hover:bg-white/[0.08] transition-all duration-300 border-l-4 border-theme/30 hover:border-theme/60">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="text-theme" size={20} />
                        <span className="text-theme font-medium text-sm uppercase tracking-wider">
                          {exp.current ? 'Current Position' : 'Previous Role'}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-light mb-2">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-2 mb-3">
                        <h4 className="text-xl text-muted font-medium">{exp.company}</h4>
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-theme hover:text-secondary transition-colors"
                        >
                          <Globe size={16} />
                        </a>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                        <span className="px-3 py-1 bg-theme/20 text-theme rounded-full text-xs font-medium">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-light mb-3 uppercase tracking-wider flex items-center gap-2">
                        <Star className="text-theme" size={14} />
                        Key Impact
                      </h5>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="glass-card p-3 rounded-lg">
                          <div className="text-xs text-muted mb-1">Scale</div>
                          <div className="text-sm font-medium text-light">{exp.highlights.scale}</div>
                        </div>
                        <div className="glass-card p-3 rounded-lg">
                          <div className="text-xs text-muted mb-1">Team</div>
                          <div className="text-sm font-medium text-light">{exp.highlights.team}</div>
                        </div>
                        <div className="glass-card p-3 rounded-lg">
                          <div className="text-xs text-muted mb-1">Impact</div>
                          <div className="text-sm font-medium text-light">{exp.highlights.impact}</div>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-light mb-3 uppercase tracking-wider">
                        Key Achievements
                      </h5>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: achIndex * 0.1 }}
                            className="flex items-start gap-3 text-sm text-muted leading-relaxed"
                          >
                            <ArrowRight className="text-theme mt-0.5 flex-shrink-0" size={14} />
                            <span className="hover:text-light transition-colors duration-200">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-sm font-semibold text-light mb-3 uppercase tracking-wider">
                        Technologies
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/[0.05] text-muted text-xs rounded-lg border border-white/[0.05] hover:text-light hover:border-theme/30 transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Empty space for timeline balance */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Years Experience", value: "3+", desc: "Professional Development" },
            { label: "Companies", value: "3", desc: "Fortune 500 to Startups" },
            { label: "Projects", value: "15+", desc: "Successfully Delivered" },
            { label: "Technologies", value: "50+", desc: "Modern Tech Stack" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="glass-card p-6 rounded-xl text-center hover:bg-white/[0.08] transition-all duration-200"
            >
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-light text-sm font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-muted text-xs">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

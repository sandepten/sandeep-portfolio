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
    <section id="experience" className="section-padding">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Building innovative solutions and growing with amazing teams
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Reliance Jio */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-theme to-secondary hidden md:block"></div>

            <div className="glass-card p-8 md:p-12 rounded-2xl relative md:ml-20">
              <div className="absolute -left-12 top-12 w-6 h-6 bg-gradient-to-r from-theme to-secondary rounded-full border-4 border-slate-900 hidden md:block"></div>

              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Buildings className="text-theme" size={24} />
                      <h3 className="text-2xl font-bold gradient-text">Reliance Jio</h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="text-xl font-semibold text-light">Software Developer</span>
                      <a href="https://www.jio.com/" className="inline-flex items-center gap-2 text-theme hover:text-secondary transition-colors duration-200">
                        <Globe size={16} />
                        Visit Website
                      </a>
                    </div>

                    <div className="flex items-center gap-2 text-muted font-mono text-sm mb-6">
                      <Calendar size={16} />
                      July 2024 - Present
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Engineered IP Automation module for JIO HCMP and NIC customers, reducing manual effort by 20 hours weekly",
                      "Led development of Internal Development Platform using Backstage framework, improving developer onboarding by 25%",
                      "Designed comprehensive API Gateway infrastructure with Apicurio, Microcks, and Kubernetes, supporting 50+ microservices",
                      "Developed end-to-end solutions with Angular micro-frontends and Java Spring Boot backends for critical services"
                    ].map((achievement, index) => (
                      <motion.div key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-4 group"
                      >
                        <CaretRight className="mt-1 text-theme flex-shrink-0 group-hover:text-secondary transition-colors duration-200" size={20} />
                        <p className="text-muted leading-relaxed group-hover:text-light transition-colors duration-200">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="glass-card p-6 rounded-xl">
                    <h4 className="font-semibold mb-3 gradient-text">Key Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Java", "Spring Boot", "Angular", "Docker", "Kubernetes", "Backstage"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gradient-to-r from-theme/20 to-secondary/20 text-light text-xs rounded-full border border-theme/30">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Microtek International */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-accent hidden md:block"></div>

            <div className="glass-card p-8 md:p-12 rounded-2xl relative md:ml-20">
              <div className="absolute -left-12 top-12 w-6 h-6 bg-gradient-to-r from-secondary to-accent rounded-full border-4 border-slate-900 hidden md:block"></div>

              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Buildings className="text-secondary" size={24} />
                      <h3 className="text-2xl font-bold text-secondary">Microtek International</h3>
                    </div>

                    <span className="text-xl font-semibold text-light">Software Developer</span>

                    <div className="flex items-center gap-2 text-muted font-mono text-sm mb-6 mt-2">
                      <Calendar size={16} />
                      September 2023 - July 2024
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Drove 20% efficiency gains by developing innovative internal tools that streamlined processes",
                      "Reduced software deployment time by 30% with scalable CI/CD pipeline implementation",
                      "Improved database performance by 40% through Node.js/Express/Nest.js backend optimization",
                      "Decreased production error rates by 50% with Golang tracking and traceability application"
                    ].map((achievement, index) => (
                      <motion.div key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-4 group"
                      >
                        <CaretRight className="mt-1 text-secondary flex-shrink-0 group-hover:text-accent transition-colors duration-200" size={20} />
                        <p className="text-muted leading-relaxed group-hover:text-light transition-colors duration-200">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="glass-card p-6 rounded-xl">
                    <h4 className="font-semibold mb-3 gradient-text">Key Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Go", "Docker", "CI/CD", "Express.js", "Nest.js"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gradient-to-r from-secondary/20 to-accent/20 text-light text-xs rounded-full border border-secondary/30">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Create Protocol */}
          <motion.div variants={itemVariants} className="relative">
            <div className="glass-card p-8 md:p-12 rounded-2xl relative md:ml-20">
              <div className="absolute -left-12 top-12 w-6 h-6 bg-gradient-to-r from-accent to-theme rounded-full border-4 border-slate-900 hidden md:block"></div>

              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Buildings className="text-accent" size={24} />
                      <h3 className="text-2xl font-bold text-accent">Create Protocol</h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="text-xl font-semibold text-light">Full Stack Developer</span>
                      <a href="https://createprotocol.org/" className="inline-flex items-center gap-2 text-accent hover:text-theme transition-colors duration-200">
                        <Globe size={16} />
                        Visit Website
                      </a>
                    </div>

                    <div className="flex items-center gap-2 text-muted font-mono text-sm mb-6">
                      <Calendar size={16} />
                      October 2022 - September 2023
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Architected Creator console for 1K+ artists, increasing smart contract/NFT minting efficiency by 40%",
                      "Delivered high-quality web applications using Agile methodologies with 95% client satisfaction rate",
                      "Reduced project delivery time by 30% and increased productivity by 25%",
                      "Championed adoption of modern tools and technologies, driving significant technological advancement"
                    ].map((achievement, index) => (
                      <motion.div key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-4 group"
                      >
                        <CaretRight className="mt-1 text-accent flex-shrink-0 group-hover:text-theme transition-colors duration-200" size={20} />
                        <p className="text-muted leading-relaxed group-hover:text-light transition-colors duration-200">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="glass-card p-6 rounded-xl">
                    <h4 className="font-semibold mb-3 gradient-text">Key Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "JavaScript", "Ether.js", "Blockchain", "NFT", "Web3"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gradient-to-r from-accent/20 to-theme/20 text-light text-xs rounded-full border border-accent/30">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

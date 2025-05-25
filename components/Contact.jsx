import { motion } from "framer-motion";
import { PaperPlaneTilt, Envelope, Coffee } from "phosphor-react";
import React from "react";

export default function Contact() {
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
    <section className="section-padding">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-6">
            <Coffee className="text-theme animate-pulse" size={16} />
            Let's grab a coffee
          </div>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
        >
          <span className="gradient-text">Get In Touch</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-xl text-dark leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          I'm always excited about new opportunities and interesting projects.
          Whether you have a question, want to collaborate, or just want to say
          hello, I'd love to hear from you!
        </motion.p>

        <motion.div variants={itemVariants} className="space-y-8">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Envelope className="text-theme" size={24} />
              <h3 className="text-xl font-semibold text-light">
                Ready to Connect?
              </h3>
            </div>

            <p className="text-dark mb-8 leading-relaxed">
              I'm currently{" "}
              <span className="gradient-text font-semibold">
                open to new opportunities
              </span>{" "}
              and always interested in discussing innovative projects, potential
              collaborations, or just having a friendly chat about technology and
              development.
            </p>

            <motion.a
              href="mailto:sandepten@gmail.com"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-theme to-secondary text-white font-semibold rounded-xl shadow-lg shadow-theme/25 hover:shadow-xl hover:shadow-theme/40 transition-all duration-300"
            >
              <PaperPlaneTilt size={20} />
              Say Hello
            </motion.a>
          </div>

          {/* Additional contact info */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            <div className="glass-card p-6 rounded-xl text-center">
              <h4 className="font-semibold text-light mb-2">Response Time</h4>
              <p className="text-dark text-sm">Usually within 24 hours</p>
            </div>

            <div className="glass-card p-6 rounded-xl text-center">
              <h4 className="font-semibold text-light mb-2">Preferred Method</h4>
              <p className="text-dark text-sm">
                Email for detailed discussions
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import React from "react";

export default function Contact() {
  return (
    <div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="mx-auto w-4/5 text-center sm:w-auto lg:w-3/4 xl:w-3/5"
      >
        <p className="text-xl text-theme lg:text-2xl">Want to talk?</p>
        <p className="py-4 text-4xl font-semibold text-light lg:text-5xl">
          Get In Touch
        </p>
        <p className="text-dark">
          I am always looking for amazing opportunities! Whether you have a
          question or just want to say hi, my inbox is open for your messages.
          I&apos;ll try my best to get back to you!
        </p>
        <div className="mt-16 mb-32 lg:mb-48">
          <a href="mailto:sandepten@gmail.com" rel="noreferrer" target="_blank">
            <button className="cursor-pointer border border-theme py-3 px-6 font-mono text-lg text-theme hover:bg-theme/30">
              Say Hello
            </button>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

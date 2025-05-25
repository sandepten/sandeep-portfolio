import { motion } from "framer-motion";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  Heart,
} from "phosphor-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: <GithubLogo size={24} />,
      url: "https://github.com/sandepten",
      label: "GitHub",
    },
    {
      icon: <LinkedinLogo size={24} />,
      url: "https://www.linkedin.com/in/sandepten",
      label: "LinkedIn",
    },
    {
      icon: <InstagramLogo size={24} />,
      url: "https://instagram.com/sandepten1",
      label: "Instagram",
    },
    {
      icon: <TwitterLogo size={24} />,
      url: "https://twitter.com/sandepten",
      label: "Twitter",
    },
  ];

  return (
    <footer className="relative">
      {/* Desktop Social Links - Left Side */}
      <div className="hidden md:block fixed left-8 bottom-0 z-40">
        <div className="flex flex-col items-center space-y-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.2, y: -3 }}
              className="p-2 text-muted hover:text-theme transition-all duration-200 hover:bg-white/10 rounded-lg"
            >
              {social.icon}
            </motion.a>
          ))}
          <div className="w-px h-20 bg-gradient-to-t from-transparent to-dark"></div>
        </div>
      </div>

      {/* Desktop Email - Right Side */}
      <div className="hidden md:block fixed right-8 bottom-0 z-40">
        <div className="flex flex-col items-center space-y-6">
          <motion.a
            href="mailto:sandepten@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -3 }}
            className="text-muted hover:text-theme transition-all duration-200 text-sm font-mono vertical-text hover:bg-white/10 p-2 rounded-lg"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            sandepten@gmail.com
          </motion.a>
          <div className="w-px h-20 bg-gradient-to-t from-transparent to-dark"></div>
        </div>
      </div>

      {/* Mobile Social Links */}
      <div className="md:hidden">
        <div className="flex justify-center space-x-8 mb-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.2, y: -3 }}
              className="p-3 text-muted hover:text-theme transition-all duration-200 hover:bg-white/10 rounded-xl"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer Content */}
      <div className="text-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          className="glass-card p-6 rounded-xl max-w-md mx-auto"
        >
          <p className="text-muted text-sm mb-2 flex items-center justify-center gap-2">
            Built with{" "}
            <Heart className="text-red-500 animate-pulse" size={16} /> by{" "}
            <span className="gradient-text font-semibold">Sandeep Kumar</span>
          </p>
          <p className="text-muted text-xs">
            Inspired by{" "}
            <a
              href="https://brittanychiang.com"
              target="_blank"
              rel="noreferrer"
              className="text-theme hover:underline"
            >
              Brittany Chiang
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

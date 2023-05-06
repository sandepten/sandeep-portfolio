import { motion } from "framer-motion";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";

export default function Footer() {
  return (
    <div className="">
      <div className="flex justify-evenly xs:mx-auto xs:w-3/4 md:fixed md:left-7 md:bottom-0 md:w-auto md:flex-col md:items-center md:space-y-8 xl:left-12">
        <motion.div whileHover={{ scale: 1.3 }}>
          <GithubLogo
            onClick={() => {
              window.open("https://github.com/sandepten", "_blank");
            }}
            size={24}
            className="text-dark hover:text-theme"
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.3 }}>
          <LinkedinLogo
            onClick={() => {
              window.open("https://www.linkedin.com/in/sandepten", "_blank");
            }}
            size={24}
            className="text-dark hover:text-theme"
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.3 }}>
          <InstagramLogo
            onClick={() => {
              window.open("https://instagram.com/sandepten1", "_blank");
            }}
            size={24}
            className="text-dark hover:text-theme"
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.3 }}>
          <TwitterLogo
            onClick={() => {
              window.open("https://twitter.com/sandepten", "_blank");
            }}
            size={24}
            className="text-dark hover:text-theme"
          />
        </motion.div>
        <div className="hidden h-20 border-r border-dark md:block"></div>
      </div>
      <a href="mailto:sandepten@gmail.com">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="hidden justify-between text-dark hover:text-theme xs:w-3/4 md:fixed md:-right-12 md:bottom-0 md:flex md:w-auto md:flex-col md:items-center md:space-y-28 xl:-right-8"
        >
          <span className="rotate-90">sandepten@gmail.com</span>
          <div className="hidden h-20 border-r border-dark md:block"></div>
        </motion.div>
      </a>
      <div className="py-8 text-center text-dark">
        <p>Build by Sandeep Kumar</p>
        <p>Inspired from Brittany Chiang</p>
      </div>
    </div>
  );
}

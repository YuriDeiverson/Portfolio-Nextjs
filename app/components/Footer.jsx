import { assets } from "../../assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.div 
       initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{  duration: 1 }}
    className="w-full py-10 bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="flex justify-center">
        <a
          href="mailto:yuriideiverson@gmail.com"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Image
            src={assets.mail_icon}
            alt=""
            className="w-6 dark:hidden"
            aria-hidden
          />
          <Image
            src={assets.mail_icon_dark}
            alt=""
            className="w-6 hidden dark:block"
            aria-hidden
          />
          <span>yuriideiverson@gmail.com</span>
        </a>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-300 dark:border-gray-700 mx-[10%] mt-12 py-6 text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Yuri Deiverson</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              href="https://github.com/YuriDeiverson"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/yuri-deiverson/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Footer;

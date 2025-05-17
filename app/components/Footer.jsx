import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.div 
       initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{  duration: 1 }}
    className="w-full py-10 bg-gray-100">
      <div className="flex justify-center">
        <div className="flex items-center gap-2 text-gray-700">
          <Image src={assets.mail_icon} alt="Mail icon" className="w-6" />
          <span>yuriideiverson@gmail.com</span>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2023 Yuri Deiverson</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/YuriDeiverson" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/yuri-deiverson/"
              target="_blank"
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

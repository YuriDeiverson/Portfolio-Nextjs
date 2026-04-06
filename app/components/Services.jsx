import { serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300"
      >
        O que eu entrego
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-4xl md:text-5xl font-Ovo text-gray-900 dark:text-white"
      >
        Áreas de atuação
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300"
      >
        Do front ao mobile e UX: stack moderna e foco em produto, performance e
        experiência do usuário.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description }) => (
          <motion.div
            whileHover={{ scale: 1.02 }}
            key={title}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-8 py-10 bg-white/60 dark:bg-gray-900/40 hover:bg-gray-50 dark:hover:bg-gray-800/80 hover:shadow-md transition-all duration-500"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800/90">
              <Image
                src={icon}
                alt=""
                className="h-7 w-7 object-contain grayscale-[35%] dark:grayscale-[25%] dark:brightness-110 opacity-90"
                aria-hidden
              />
            </div>
            <h3 className="text-lg my-4 text-gray-800 dark:text-gray-100 font-semibold">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="text-center text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto"
      >
        Código e repositórios no{" "}
        <a
          href="https://github.com/YuriDeiverson"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-gray-900 dark:text-gray-100 underline underline-offset-2 decoration-gray-400 dark:decoration-gray-500 hover:decoration-gray-900 dark:hover:decoration-white"
        >
          GitHub
        </a>
        .
      </motion.p>
    </motion.div>
  );
};

export default Services;

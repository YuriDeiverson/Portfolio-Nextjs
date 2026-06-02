"use client";

import { assets, infoList } from "../../assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const { t, isLoaded } = useLanguage();

  if (!isLoaded) return null;

  // Get localized stack data
  const stackData = t("about.stackData");

  return (
    <motion.div
      id="about"
      className="w-full px-6 lg:px-20 py-20 scroll-mt-20 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300"
      >
        {t("about.intro")}
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl md:text-5xl font-Ovo text-gray-900 dark:text-white"
      >
        {t("about.title")}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center gap-16 mt-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 flex-shrink-0"
        >
          <Image
            src={assets.user_image}
            alt="Yuri Deiverson em ambiente de trabalho"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1 text-justify"
        >
          <p className="mb-10 font-Ovo text-base md:text-lg leading-relaxed max-w-3xl text-gray-800 dark:text-gray-200">
            {t("about.description")}
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl"
          >
            {t("about.infoList").map(({ title, description }) => (
              <motion.li
                whileInView={{ scale: 1.05 }}
                className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800/80 hover:-translate-y-1 duration-500 hover:shadow-md dark:hover:shadow-gray-900/30"
                key={title}
              >
                <Image
                  src={assets.edu_icon}
                  alt=""
                  className="w-7 mt-3 dark:hidden"
                  aria-hidden
                />
                <Image
                  src={assets.edu_icon_dark}
                  alt=""
                  className="w-7 mt-3 hidden dark:block"
                  aria-hidden
                />
                <h3 className="my-4 font-semibold text-gray-800 dark:text-gray-200">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
  initial={{ y: 12, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ delay: 1.25, duration: 0.5 }}
  className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700"
>
  <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 font-Ovo mb-1">
    {t("about.stack")}
  </h3>
  <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 max-w-xl">
    {t("about.stackDesc")}
  </p>

  {/* Tabs */}
  <div className="flex gap-2 mb-5">
    {["frontend", "backend"].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 cursor-pointer
          ${activeTab === tab
            ? "border-gray-400 dark:border-gray-500 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            : "border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/60"
          }`}
      >
        {tab === "frontend" ? (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            <rect x="2" y="6" width="20" height="4" rx="1" /><rect x="2" y="14" width="20" height="4" rx="1" />
            <circle cx="6" cy="8" r="1" fill="currentColor" /><circle cx="6" cy="16" r="1" fill="currentColor" />
          </svg>
        )}
        {tab === "frontend" ? t("about.frontend") : t("about.backend")}
      </button>
    ))}
  </div>

  {/* Cards grid */}
  <motion.ul
    key={activeTab}
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl"
  >
    {stackData[activeTab].map(({ icon, title, description }) => (
      <li
        key={title}
        className="flex gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700
          hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800/60
          transition-all duration-200 cursor-default"
      >
        <span className="text-xl mt-0.5 flex-shrink-0">{icon}</span>
        <div>
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-0.5">{title}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
        </div>
      </li>
    ))}
  </motion.ul>
</motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;

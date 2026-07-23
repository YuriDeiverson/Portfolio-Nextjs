"use client";

import { assets } from "../../assets/assets";
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
  const description = t("about.description");

  const renderHighlightedText = (text) =>
    text.split("**").map((segment, index) =>
      index % 2 === 1 ? (
        <strong
          className="font-semibold text-gray-900 dark:text-white"
          key={`${segment}-${index}`}
        >
          {segment}
        </strong>
      ) : (
        segment
      ),
    );

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
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-12 grid items-start gap-10 lg:grid-cols-12 xl:gap-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-md lg:col-span-5 lg:mx-0"
        >
          <Image
            src={assets.user_image}
            alt="Yuri Deiverson em ambiente de trabalho"
            className="aspect-[5/6] w-full rounded-3xl object-cover object-top shadow-sm"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="min-w-0 lg:col-span-7"
        >
          <div className="space-y-5 font-Ovo text-base leading-8 text-gray-700 md:text-lg">
            {description.map((paragraph, index) => (
              <p
                className={index === 0 ? "text-xl leading-9 text-gray-900" : ""}
                key={paragraph}
              >
                {renderHighlightedText(paragraph)}
              </p>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.section
        initial={{ y: 12, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="mt-14 border-t border-gray-200 pt-10"
      >
        <div className="mb-6 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h3 className="mb-1 font-Ovo text-xl font-semibold text-gray-800">
              {t("about.stack")}
            </h3>
            <p className="max-w-xl text-sm text-gray-600">
              {t("about.stackDesc")}
            </p>
          </div>

          <div
            aria-label={t("about.stack")}
            className="flex gap-2"
            role="group"
          >
            {["frontend", "backend"].map((tab) => (
              <button
                aria-pressed={activeTab === tab}
                className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "border-gray-400 bg-gray-100 text-gray-900"
                    : "border-gray-200 text-gray-500 hover:bg-gray-50"
                }`}
                key={tab}
                onClick={() => setActiveTab(tab)}
                type="button"
              >
                {tab === "frontend" ? (
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                ) : (
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="6" width="20" height="4" rx="1" />
                    <rect x="2" y="14" width="20" height="4" rx="1" />
                    <circle cx="6" cy="8" r="1" fill="currentColor" />
                    <circle cx="6" cy="16" r="1" fill="currentColor" />
                  </svg>
                )}
                {tab === "frontend"
                  ? t("about.frontend")
                  : t("about.backend")}
              </button>
            ))}
          </div>
        </div>

        <motion.ul
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4"
          initial={{ opacity: 0, y: 6 }}
          key={activeTab}
          transition={{ duration: 0.3 }}
        >
          {stackData[activeTab].map(({ icon, title, description }) => (
            <li
              className="flex gap-3 rounded-xl border border-gray-200 p-4 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50"
              key={title}
            >
              <span className="mt-0.5 flex-shrink-0 text-xl">{icon}</span>
              <div>
                <p className="mb-0.5 text-sm font-semibold text-gray-800">
                  {title}
                </p>
                <p className="text-xs leading-relaxed text-gray-500">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </motion.ul>
      </motion.section>
    </motion.div>
  );
};

export default About;

"use client";

import { assets, workData } from "../../assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import ProjectPreviewModal from "./Projectpreviewmodal";
import { useLanguage } from "../context/LanguageContext";

const Work = () => {
  const [previewProject, setPreviewProject] = useState(null);
  const { t, isLoaded } = useLanguage();

  if (!isLoaded) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="work"
        className="w-full px-[12%] py-10 scroll-mt-20"
      >
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300"
        >
          {t("work.intro")}
        </motion.h4>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-4xl md:text-5xl font-Ovo text-gray-900 dark:text-white"
        >
          {t("work.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300"
        >
          {t("work.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 my-10 w-full max-w-[1440px] mx-auto"
        >
          {workData.map((project, index) => (
            <motion.article
              key={project.title + index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className="min-w-0 rounded-xl overflow-hidden border border-gray-200/80 dark:border-gray-700 bg-white dark:bg-gray-900/80 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div
                className="h-40 sm:h-44 bg-no-repeat bg-cover bg-center relative shrink-0"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-gray-100 shadow">
                  {project.category}
                </span>
              </div>

              <div className="p-4 flex flex-col flex-1 gap-2.5 min-h-0">
                <div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wide text-gray-500 dark:text-gray-500 mb-1.5">
                    {t("work.stack")}
                  </p>
                  <ul className="flex flex-wrap gap-1">
                    {project.stack.map((tech) => (
                      <li key={tech}>
                        <span className="inline-block text-[10px] px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-gray-600">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-2 mt-auto pt-1">
                  {/* Botão principal: modal para web, link direto para APK */}
                  {project.type === "apk" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg py-2 px-3 text-xs font-medium bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90 transition-opacity"
                      aria-label={`Baixar APK: ${project.title}`}
                    >
                      <svg
                        className="w-3.5 h-3.5 shrink-0"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M8 2v8M5 7l3 3 3-3" />
                        <path d="M2 12h12" />
                      </svg>
                      Baixar APK
                    </a>
                  ) : (
                    <button
                      onClick={() => setPreviewProject(project)}
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg py-2 px-3 text-xs font-medium bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90 transition-opacity"
                      aria-label={`Pré-visualizar: ${project.title}`}
                    >
                      <Image
                        src={assets.send_icon}
                        alt=""
                        className="w-3.5 h-3.5 brightness-0 invert dark:invert-0 shrink-0"
                      />
                      {t("work.viewProject")}
                    </button>
                  )}

                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg py-2 px-3 text-xs font-medium border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      aria-label={`Abrir repositório: ${project.title}`}
                    >
                      <Image
                        src={assets.github}
                        alt=""
                        className="w-4 h-4 shrink-0"
                      />
                      {t("work.repository")}
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          href="https://github.com/YuriDeiverson"
          target="_blank"
          rel="noopener noreferrer"
          className="w-max flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 border-[0.5px] border-gray-700 dark:border-gray-500 rounded-full py-3 px-10 mx-auto my-20 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-500"
        >
          {t("work.seeMore")}
          <Image
            src={assets.right_arrow_bold}
            alt=""
            className="w-4 dark:invert"
          />
        </motion.a>
      </motion.div>

      {/* Modal de pré-visualização — apenas projetos web */}
      {previewProject && (
        <ProjectPreviewModal
          project={previewProject}
          onClose={() => setPreviewProject(null)}
        />
      )}
    </>
  );
};

export default Work;
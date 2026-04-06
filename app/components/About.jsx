import { assets, infoList, toolsData, toolsExtraLabels } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = () => {
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
        Introdução
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl md:text-5xl font-Ovo text-gray-900 dark:text-white"
      >
        Sobre mim
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
            {" "}
            Sou desenvolvedor fullstack com ênfase em front-end, especializado
            em React, React Native, TypeScript, Django, Next.js, SQL e Tailwind
            CSS para criar interfaces modernas, responsivas e centradas na
            melhor experiência do usuário. No backend, trabalho com Python,
            JavaScript e PHP, desenvolvendo soluções robustas e escaláveis.
            Tenho facilidade para compreender problemas complexos, transformar
            ideias em soluções funcionais e manter um padrão de código limpo e
            organizado. Valorizo a clareza na comunicação, a colaboração em
            equipe e a adoção de boas práticas que tornam o desenvolvimento mais
            eficiente e sustentável. Atualmente, estou expandindo meus
            conhecimentos em Node.js, focando na criação de APIs e integração de
            sistemas. Se você busca um profissional comprometido, proativo e com
            vontade de crescer, vamos conversar!
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl"
          >
            {infoList.map(({ icon, iconDark, title, description }) => (
              <motion.li
                whileInView={{ scale: 1.05 }}
                className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800/80 hover:-translate-y-1 duration-500 hover:shadow-md dark:hover:shadow-gray-900/30"
                key={title}
              >
                <Image
                  src={icon}
                  alt=""
                  className="w-7 mt-3 dark:hidden"
                  aria-hidden
                />
                <Image
                  src={iconDark}
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
              Stack e ferramentas
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 max-w-xl">
              Tecnologias que uso no dia a dia; exemplos concretos de uso estão na
              seção Projetos.
            </p>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.35, duration: 0.5 }}
              className="flex items-center gap-3 sm:gap-5 flex-wrap"
              aria-label="Logos de ferramentas"
            >
              {toolsData.map((tool, index) => (
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-gray-600 rounded-lg hover:-translate-y-0.5 duration-500 bg-gray-50 dark:bg-gray-900/50"
                  key={index}
                >
                  <Image
                    src={tool}
                    alt=""
                    className="w-5 sm:w-7 object-contain grayscale-[30%] dark:grayscale-[20%] dark:brightness-110 opacity-90"
                    aria-hidden
                  />
                </motion.li>
              ))}
            </motion.ul>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.45, duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 mt-4 max-w-xl"
              aria-label="Outras tecnologias da stack"
            >
              {toolsExtraLabels.map((label) => (
                <li key={label}>
                  <span className="inline-block text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                    {label}
                  </span>
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

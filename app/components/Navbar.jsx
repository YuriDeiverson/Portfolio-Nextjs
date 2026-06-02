"use client";

import { assets } from "../../assets/assets";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const { language, changeLanguage, t, isLoaded } = useLanguage();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isLoaded) return null;

  return (
    <>
      <div className="fixed inset-0 -z-10 translate-y-[80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 text-gray-900 dark:text-gray-100 ${
          isScroll
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-sm dark:shadow-gray-900/40"
            : ""
        }`}
      >
        <a href="#top">
          <h1 className="w-28 cursor-pointer mr-14 font-semibold tracking-tight">
            Yuri.
          </h1>
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white/80 dark:bg-gray-900/60 shadow-sm backdrop-blur-sm"
          } `}
        >
          <li>
            <a className="font-Ovo" href="#top">
              {t("navbar.home")}
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              {t("navbar.about")}
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              {t("navbar.services")}
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              {t("navbar.work")}
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              {t("navbar.contact")}
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            {/* Construindo o thema dark e claro */}
            {/* <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6 cursor-pointer"
            /> */}
          </button>

          {/* Botões de idioma */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50">
            <button
              onClick={() => changeLanguage("pt")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                language === "pt"
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                  : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              PT
            </button>
            <span className="text-gray-400 dark:text-gray-600">|</span>
            <button
              onClick={() => changeLanguage("en")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                language === "en"
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                  : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="https://www.linkedin.com/in/yuri-deiverson/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 dark:border-gray-500 rounded-full ml-4 font-Ovo hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            LinkedIn{" "}
            <Image src={assets.arrow_icon} alt="" className="w-3 dark:invert" aria-hidden />
          </a>

          <button
            type="button"
            className="block md:hidden ml-3"
            onClick={openMenu}
            aria-label="Abrir menu"
          >
            <Image
              src={assets.menu_black}
              alt=""
              className="w-6 cursor-pointer dark:hidden"
            />
            <Image
              src={assets.menu_white}
              alt=""
              className="w-6 cursor-pointer hidden dark:block"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white text-gray-900 border-l border-gray-200 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-800 transition duration-500 shadow-xl dark:shadow-black/40"
        >
          <button
            type="button"
            className="absolute right-6 top-6 p-1 rounded-md hover:bg-gray-100 dark:hover:bg-white/10"
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer dark:hidden"
            />
            <Image
              src={assets.close_white}
              alt=""
              className="w-5 cursor-pointer hidden dark:block"
            />
          </button>

          <li>
            <a
              className="font-Ovo block py-1"
              onClick={closeMenu}
              href="#top"
            >
              {t("navbar.home")}
            </a>
          </li>
          <li>
            <a
              className="font-Ovo block py-1"
              onClick={closeMenu}
              href="#about"
            >
              {t("navbar.about")}
            </a>
          </li>
          <li>
            <a
              className="font-Ovo block py-1"
              onClick={closeMenu}
              href="#services"
            >
              {t("navbar.services")}
            </a>
          </li>
          <li>
            <a
              className="font-Ovo block py-1"
              onClick={closeMenu}
              href="#work"
            >
              {t("navbar.work")}
            </a>
          </li>
          <li>
            <a
              className="font-Ovo block py-1"
              onClick={closeMenu}
              href="#contact"
            >
              {t("navbar.contact")}
            </a>
          </li>

          {/* Botões de idioma mobile */}
          <li className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-3">
              Idioma
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  changeLanguage("pt");
                  closeMenu();
                }}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  language === "pt"
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                Português
              </button>
              <button
                onClick={() => {
                  changeLanguage("en");
                  closeMenu();
                }}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  language === "en"
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                English
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

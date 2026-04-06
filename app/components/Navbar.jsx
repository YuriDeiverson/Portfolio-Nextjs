import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

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

  return (
    <>
      <div className="fixed inset-0 -z-10 translate-y-[80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white/70 dark:bg-gray-950/80 backdrop-blur-lg shadow-sm dark:shadow-gray-900/40"
            : ""
        }`}
      >
        <a href="#top">
          <h1 className="w-28 cursor-pointer mr-14">Yuri.</h1>
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
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              Sobre
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Serviços
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              Projetos
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contato
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            {/* Construindo o thema dark e claro */}
            {/* <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6 cursor-pointer"
            /> */}
          </button>

          <a
            href="https://www.linkedin.com/in/yuri-deiverson/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 dark:border-gray-500 rounded-full ml-4 font-Ovo hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            LinkedIn{" "}
            <Image src={assets.arrow_icon} alt="" className="w-3 dark:invert" aria-hidden />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={assets.menu_black}
              alt=""
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-gray-900 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about">
              Sobre
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#services">
              Serviços
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#work">
              Projetos
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

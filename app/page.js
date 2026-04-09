'use client';
import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Work from './components/Work';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

 useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add("dark"); // importante ser document.documentElement, ou seja <html>
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}, [isDarkMode]);
  return (
    <main id="top" className="min-h-dvh text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-950">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}

import { assets } from "../../assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const [result, setResult] = useState("");
  const { t, isLoaded } = useLanguage();

  if (!isLoaded) return null;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando...");
    const formData = new FormData(event.target);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "66155ec8-8623-4399-9c4a-0ae594b764a1";
    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(t("contact.successMsg"));
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-gray-300"
      >
        {t("contact.intro")}
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-4xl md:text-5xl font-Ovo text-gray-900 dark:text-white"
      >
        {t("contact.title")}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300"
      >
        {t("contact.description")}
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text"
            placeholder={t("contact.placeholders.name")}
            required
            className="flex-1 p-3 outline-none border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:text-gray-500"
            name="name"
            autoComplete="name"
          />

          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="email"
            placeholder={t("contact.placeholders.email")}
            required
            className="flex-1 p-3 outline-none border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:text-gray-500"
            name="email"
            autoComplete="email"
          />
        </div>

        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          rows="6"
          placeholder={t("contact.placeholders.message")}
          required
          className="w-full p-4 outline-none border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 mb-6"
          name="message"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full mx-auto hover:opacity-90 duration-500 cursor-pointer"
        >
          {" "}
          {t("contact.submitBtn")}
          {" "}
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="w-4 dark:invert"
            aria-hidden
          />
        </motion.button>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400 min-h-[1.25rem]">
          {result}
        </p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;

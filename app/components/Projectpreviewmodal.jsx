"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { assets } from "../../assets/assets";

// ─── helpers ────────────────────────────────────────────────────────────────

const DEVICE = {
  desktop: { label: "Desktop", width: "100%", maxW: "100%" },
  mobile: { label: "Mobile", width: "390px", maxW: "390px" },
};

// ─── component ──────────────────────────────────────────────────────────────

/**
 * Projectpreviewmodal
 *
 * Props:
 *  project  – workData item  { title, link, bgImage, ... }
 *  onClose  – () => void
 */
export default function Projectpreviewmodal({ project, onClose }) {
  const [device, setDevice] = useState("desktop");
  const [loading, setLoading] = useState(true);
  const overlayRef = useRef(null);

  // close on Escape
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  // reset loader when project changes
  useEffect(() => setLoading(true), [project?.link]);

  if (!project) return null;

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <AnimatePresence>
      {/* backdrop */}
      <motion.div
        ref={overlayRef}
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={handleOverlayClick}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-6"
      >
        {/* panel */}
        <motion.div
          key="panel"
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="
            relative flex flex-col w-full max-w-5xl h-[90vh]
            rounded-2xl overflow-hidden
            bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-700
            shadow-2xl
          "
          onClick={(e) => e.stopPropagation()}
        >
          {/* ── top bar ── */}
          <header className="shrink-0 flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            {/* title */}
            <span className="text-sm font-semibold text-gray-900 dark:text-white truncate mr-auto">
              {project.title}
            </span>

            {/* device toggle */}
            <div className="flex items-center gap-0.5 rounded-lg bg-gray-100 dark:bg-gray-800 p-0.5">
              {Object.entries(DEVICE).map(([key, { label }]) => (
                <button
                  key={key}
                  onClick={() => {
                    setDevice(key);
                    setLoading(true);
                  }}
                  className={`
                    flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200
                    ${
                      device === key
                        ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    }
                  `}
                  aria-pressed={device === key}
                >
                  {key === "desktop" ? (
                    <DesktopIcon className="w-3.5 h-3.5" />
                  ) : (
                    <MobileIcon className="w-3 h-3" />
                  )}
                  {label}
                </button>
              ))}
            </div>

            {/* open in new tab */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                bg-gray-900 dark:bg-white text-white dark:text-gray-900
                hover:opacity-80 transition-opacity
              "
            >
              <Image
                src={assets.send_icon}
                alt=""
                className="w-3 h-3 brightness-0 invert dark:invert-0 shrink-0"
              />
              Abrir site
            </a>

            {/* close */}
            <button
              onClick={onClose}
              className="
                w-8 h-8 flex items-center justify-center rounded-lg
                text-gray-500 hover:text-gray-900 dark:hover:text-white
                hover:bg-gray-100 dark:hover:bg-gray-800
                transition-colors
              "
              aria-label="Fechar pré-visualização"
            >
              <CloseIcon className="w-4 h-4" />
            </button>
          </header>

          {/* ── browser chrome ── */}
          <div className="shrink-0 flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800/60 border-b border-gray-200 dark:border-gray-700">
            {/* traffic lights decorative */}
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <div className="w-3 h-3 rounded-full bg-green-400/70" />
            </div>
            {/* url bar */}
            <div className="flex-1 flex items-center gap-2 mx-2 px-3 py-1 rounded-md bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
              <LockIcon className="w-3 h-3 text-green-500 shrink-0" />
              <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {project.link.replace(/^https?:\/\//, "")}
              </span>
            </div>
            {/* mobile open — visible on small screens */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                sm:hidden flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium
                bg-gray-900 dark:bg-white text-white dark:text-gray-900
                hover:opacity-80 transition-opacity shrink-0
              "
            >
              <Image
                src={assets.send_icon}
                alt=""
                className="w-3 h-3 brightness-0 invert dark:invert-0 shrink-0"
              />
              Abrir
            </a>
          </div>

          {/* ── iframe area ── */}
          <div className="flex-1 overflow-hidden flex items-start justify-center bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
            <motion.div
              key={device}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative h-full transition-all duration-300 ease-in-out"
              style={{
                width: DEVICE[device].width,
                maxWidth: DEVICE[device].maxW,
              }}
            >
              {/* spinner */}
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-950 z-10">
                  <div className="w-8 h-8 border-2 border-gray-300 dark:border-gray-600 border-t-gray-900 dark:border-t-white rounded-full animate-spin" />
                </div>
              )}

              <iframe
                key={`${device}-${project.link}`}
                src={project.link}
                title={`Pré-visualização: ${project.title}`}
                className="w-full h-full border-0"
                onLoad={() => setLoading(false)}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />

              {/* mobile frame overlay */}
              {device === "mobile" && (
                <div className="pointer-events-none absolute inset-0 rounded-none ring-1 ring-black/10 dark:ring-white/10" />
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── inline SVG icons (no extra deps) ───────────────────────────────────────

function DesktopIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <rect x="2" y="3" width="16" height="11" rx="1.5" />
      <path d="M7 17h6M10 14v3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function MobileIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 14 20" fill="currentColor">
      <rect x="1" y="1" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="7" cy="16.5" r="0.75" />
    </svg>
  );
}

function CloseIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 3l10 10M13 3L3 13" />
    </svg>
  );
}

function LockIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 12 14" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="6" width="10" height="7" rx="1.5" fill="currentColor" stroke="none" opacity=".2"/>
      <rect x="1" y="6" width="10" height="7" rx="1.5" />
      <path d="M3.5 6V4a2.5 2.5 0 015 0v2" />
    </svg>
  );
}
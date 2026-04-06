import user_image from "./user-profile.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import github from "./gitHub.png";
import react from "./react_Logo.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  github,
  react,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "Plataforma de Networking",
    description: "Uma solução completa e moderna para otimizar a gestão de networking focados em geração de negócios por um sistema centralizado e eficiente.",
    category: "Fullstack",
    bgImage: "/work-1.png",
    link: "https://gestaofrontendrh.vercel.app/",
    repo: "https://github.com/YuriDeiverson/Gest-oRH",
    stack: ["React", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
  },
  {
    title: "Dashboard Financeiro",
    description:
      "Dashboard financeiro fullstack em produção, com autenticação JWT, gráficos interativos e gerenciamento completo de transações.",
    category: "Fullstack",
    bgImage: "/work-2.png",
    link: "https://financeiroplus.vercel.app/",
    repo: "https://github.com/YuriDeiverson/Gestor360",
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "SQL"],
  },
  {
    title: "Dashboard Financeiro Mobile",
    description: "Versão mobile do dashboard financeiro, com navegação otimizada, gráficos responsivos e integração total a versão web",
    category: "Fullstack Mobile",
    bgImage: "/work-3.png",
    link: "https://expo.dev/accounts/yuriid/projects/dashboard-financeiro/builds/f357f6af-ff3b-4788-ba37-3f5601b25072",
    repo: "https://github.com/YuriDeiverson/Gestor360/tree/main/mobile",
    stack: ["React Native",
  "TypeScript",
  "Tailwind CSS",
  "Expo"],
  },
  {
    title: "Financeiro Controladoria",
    description: "Organização de entradas, saídas e visão geral.",
    category: "Frontend",
    bgImage: "/work-4.png",
    link: "https://dashboard-financeiro-rho.vercel.app/",
    repo: "https://github.com/YuriDeiverson/Dashboard-Financeiro",
    stack: ["React", "TypeScript", "SQL", "Tailwind CSS"],
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Desenvolvimento web",
    description:
      "Aplicações web com React e Next.js, APIs e interfaces responsivas, com foco em performance, acessibilidade e manutenção do código.",
  },
  {
    icon: assets.mobile_icon,
    title: "Apps mobile",
    description:
      "Experiências em React Native alinhadas a padrões de plataforma, com navegação clara e estados de carregamento e erro bem tratados.",
  },
  {
    icon: assets.ui_icon,
    title: "UI / UX",
    description:
      "Fluxos e interfaces orientados a tarefas reais do usuário, prototipação e iteração com base em usabilidade e consistência visual.",
  },
  {
    icon: assets.graphics_icon,
    title: "Identidade visual",
    description:
      "Peças e direções visuais que reforçam marca e comunicação, em harmonia com o produto digital.",
  },
];

/** Stacks citadas no texto mas sem ícone dedicado — exibidas como chips ao lado dos logos */
export const toolsExtraLabels = [
  "Node.js",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
];

export const infoList = [
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Formação",
    description: "ADS — Estácio",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projetos",
    description: "30+ projetos concluídos",
  },
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Perfil técnico",
    description:
      "Fullstack com ênfase em front-end: produtos web, integração com APIs e entrega ponta a ponta.",
  },
];

export const toolsData = [
  assets.github,
  assets.react,
  assets.mongodb,
  assets.figma,
  assets.git,
];

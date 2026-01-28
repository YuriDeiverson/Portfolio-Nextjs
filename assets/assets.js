import user_image from './user-profile.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import github from './gitHub.png';
import react from './react_Logo.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

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
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'App Financeiro',
        description: 'Mobile APP',
        bgImage: '/work-1.png',
        link: 'https://github.com/YuriDeiverson/Carteira-Mobile',
    },
    {
        title: 'Dashboard Empresarial',	
        description: 'Web App',
        bgImage: '/work-2.png',
        link: 'https://dashboard-financeiro-rho.vercel.app/',
    },
    {
        title: 'Gestão de Produtos', 
        description: 'Web Design',
        bgImage: '/work-3.png',
        link: 'https://crud-gestao.vercel.app/',
    },
    {
        title: 'Controle Financeiro',
        description: 'Web Design',
        bgImage: '/work-4.png',
        link: 'https://financeiroplus.vercel.app/',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Construo sites modernos e responsivos com React, Next.js e Tailwind CSS, sempre focando na usabilidade e desempenho para usuários finais.', link: 'https://github.com/YuriDeiverson' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Desenvolvo aplicativos móveis usando React Native, criando interfaces intuitivas e funcionais que garantem uma experiência fluida em diferentes dispositivos.', link: 'https://github.com/YuriDeiverson' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'Crio designs centrados no usuário, combinando estética e funcionalidade para oferecer navegação simples e agradável em todas as plataformas.', link: 'https://github.com/YuriDeiverson' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Produzo soluções visuais criativas que fortalecem a identidade da marca e facilitam a comunicação clara e impactante com o público.', link: 'https://github.com/YuriDeiverson' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Linguagens', description: 'HTML, CSS, JavaScript React, Next Js, Node.js, PHP, Typescript...' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Formação', description: 'ADS - Estacio' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projetos', description: '5+ projetos concluidos' }
];

export const toolsData = [
    assets.github, assets.react, assets.mongodb, assets.figma, assets.git
];

export const translations = {
  pt: {
    navbar: {
      home: "Home",
      about: "Sobre",
      services: "Serviços",
      work: "Projetos",
      contact: "Contato",
      linkedin: "LinkedIn",
    },
    header: {
      greeting: "Olá! Eu sou Yuri Deiverson",
      title: "Engenheiro de Software",
      description:
        "Engenheiro de software com experiência no desenvolvimento ponta a ponta de aplicações web e mobile, APIs, bancos de dados e integrações entre sistemas.",
      contactBtn: "Contato",
      curriculumBtn: "Currículo",
    },
    about: {
      intro: "Introdução",
      title: "Sobre mim",
      description: [
        "Sou **Software Engineer** com experiência no desenvolvimento de aplicações completas, atuando desde a concepção da solução até a implementação de interfaces, APIs, bancos de dados e integrações entre sistemas.",
        "Trabalho principalmente com **Java (Spring Boot), Python, Node.js, React, React Native, TypeScript e PostgreSQL**, desenvolvendo aplicações escaláveis, APIs REST, soluções baseadas em inteligência artificial e sistemas voltados para automação e produtividade.",
        "Tenho experiência na construção de aplicações full stack, aplicando boas práticas de arquitetura, código limpo, versionamento com Git, Docker e metodologias ágeis. Busco desenvolver software de forma sustentável, priorizando desempenho, manutenibilidade e uma boa experiência para o usuário.",
        "Atualmente, venho aprofundando meus conhecimentos em **Java, Spring Boot, arquitetura de software, microsserviços e computação em nuvem**, sempre buscando evoluir tecnicamente e acompanhar as melhores práticas da engenharia de software.",
        "Acredito que tecnologia vai além de escrever código: envolve compreender problemas, propor soluções eficientes e construir produtos que gerem valor para as pessoas e para o negócio.",
      ],
      stack: "Stack e ferramentas",
      stackDesc:
        "Tecnologias que uso no dia a dia; exemplos concretos de uso estão na seção Projetos.",
      frontend: "Frontend",
      backend: "Backend",
      stackData: {
        frontend: [
          {
            icon: "⚛️",
            title: "React & React Native",
            description:
              "Interfaces web e mobile com componentização, estado global e padrões modernos de UX.",
          },
          {
            icon: "▲",
            title: "Next.js",
            description:
              "SSR, App Router, rotas dinâmicas e otimização de performance em produção.",
          },
          {
            icon: "🔷",
            title: "TypeScript",
            description:
              "Tipagem estrita em toda a stack, contratos de API e manutenção de código segura.",
          },
          {
            icon: "🌬️",
            title: "Tailwind CSS",
            description:
              "Design system utilitário com tokens customizados, dark mode e responsividade fluida.",
          },
          {
            icon: "✨",
            title: "Framer Motion",
            description:
              "Animações e transições declarativas para interfaces expressivas e fluidas.",
          },
          {
            icon: "📱",
            title: "Expo",
            description:
              "Build multiplataforma iOS/Android com OTA updates e integração nativa simplificada.",
          },
        ],
        backend: [
          {
            icon: "☕",
            title: "Java & Spring Boot",
            description:
              "APIs REST, microsserviços e aplicações backend com arquitetura limpa e escalável.",
          },
          {
            icon: "🟢",
            title: "Node.js & TypeScript",
            description:
              "Microsserviços escaláveis com tipagem estrita e arquitetura estruturada.",
          },
          {
            icon: "🐍",
            title: "Python (AI, RAG & LLMs)",
            description:
              "Agentes inteligentes, pipelines RAG e integração com LLMs para automação e produtividade.",
          },
          {
            icon: "🗄️",
            title: "Oracle PL/SQL & APEX",
            description:
              "Packages transacionais, views materializadas e tuning de queries complexas.",
          },
          {
            icon: "🔀",
            title: "iPaaS Middleware",
            description:
              "APIPASS, Digibee e barramentos acoplados a ERPs (SAP, Totvs).",
          },

          {
            icon: "🐳",
            title: "DevOps & Cloud",
            description:
              "OCI/AWS, GitLab CI/CD, Docker e esteiras de deploy automatizadas.",
          },
        ],
      },
    },
    services: {
      title: "Serviços",
      intro: "O que ofereço",
      items: [
        {
          title: "Desenvolvimento web",
          description:
            "Aplicações web com React e Next.js, APIs e interfaces responsivas, com foco em performance, acessibilidade e manutenção do código.",
        },
        {
          title: "Apps mobile",
          description:
            "Experiências em React Native alinhadas a padrões de plataforma, com navegação clara e estados de carregamento e erro bem tratados.",
        },
        {
          title: "UI / UX",
          description:
            "Fluxos e interfaces orientados a tarefas reais do usuário, prototipação e iteração com base em usabilidade e consistência visual.",
        },
        {
          title: "Identidade visual",
          description:
            "Peças e direções visuais que reforçam marca e comunicação, em harmonia com o produto digital.",
        },
      ],
    },
    work: {
      intro: "Fullstack & web",
      title: "Meus Projetos",
      description:
        "Cada card mostra o que foi construído, o stack usado e links diretos para o projeto no ar e para o repositório no GitHub.",
      viewProject: "Ver projeto",
      repository: "Repositório",
      downloadAPK: "Baixar APK",
      seeMore: "Ver mais no GitHub",
      stack: "Stack",
      projects: [
        {
          title: "Plataforma de Networking",
          description:
            "Uma solução completa e moderna para otimizar a gestão de networking focados em geração de negócios por um sistema centralizado e eficiente.",
          category: "Fullstack",
        },
        {
          title: "Dashboard Financeiro",
          description:
            "Dashboard financeiro fullstack web e mobile em produção, com autenticação JWT, gráficos interativos e gerenciamento completo de transações.",
          category: "Fullstack",
        },
        {
          title: "FogWars",
          description:
            "Aplicativo mobile completo em React Native onde o mundo começa desconhecido e você vai revelando cada rua, bairro e ponto turístico que explorar na vida real.",
          category: "Mobile",
        },
        {
          title: "Loja Ferr",
          description:
            "E-commerce de semi-joias e acessórios femininos, com catálogo dinâmico, carrinho de compras e integração com gateway de pagamento, criado pelo aplicativo tray e customizado com React, Tailwind CSS e Javascript.",
          category: "Frontend",
        },
      ],
    },
    contact: {
      intro: "Vamos conversar",
      title: "Entrar em contato",
      description: "Estou disponível para discussões sobre novos projetos ou ideias.",
      placeholders: {
        name: "Seu nome",
        email: "seu@email.com",
        message: "Sua mensagem",
      },
      submitBtn: "Enviar",
      successMsg: "Mensagem enviada com sucesso!",
      errorMsg: "Erro ao enviar mensagem. Tente novamente.",
    },
    footer: {
      text: `© ${new Date().getFullYear()} Yuri Deiverson. Todos os direitos reservados.`,
    },
  },
  en: {
    navbar: {
      home: "Home",
      about: "About",
      services: "Services",
      work: "Projects",
      contact: "Contact",
      linkedin: "LinkedIn",
    },
    header: {
      greeting: "Hi! I'm Yuri Deiverson",
      title: "Software Engineer",
      description:
        "Software engineer experienced in the end-to-end development of web and mobile applications, APIs, databases, and system integrations.",
      contactBtn: "Contact",
      curriculumBtn: "Resume",
    },
    about: {
      intro: "Introduction",
      title: "About me",
      description: [
        "I'm a **Software Engineer** with experience building complete applications, working from solution design through the implementation of user interfaces, APIs, databases, and system integrations.",
        "My main stack includes **Java (Spring Boot), Python, Node.js, React, React Native, TypeScript, and PostgreSQL**. I build scalable applications, REST APIs, AI-powered solutions, and systems focused on automation and productivity.",
        "I have experience building full-stack applications and applying sound architectural practices, clean code, Git-based version control, Docker, and agile methodologies. I aim to build software sustainably, prioritizing performance, maintainability, and a strong user experience.",
        "I am currently deepening my knowledge of **Java, Spring Boot, software architecture, microservices, and cloud computing**, while continuously improving my technical skills and keeping up with software engineering best practices.",
        "I believe technology goes beyond writing code: it is about understanding problems, proposing efficient solutions, and building products that create value for people and businesses.",
      ],
      stack: "Stack and tools",
      stackDesc:
        "Technologies I use daily; concrete examples of use are in the Projects section.",
      frontend: "Frontend",
      backend: "Backend",
      stackData: {
        frontend: [
          {
            icon: "⚛️",
            title: "React & React Native",
            description:
              "Web and mobile interfaces with componentization, global state and modern UX patterns.",
          },
          {
            icon: "▲",
            title: "Next.js",
            description:
              "SSR, App Router, dynamic routes and production performance optimization.",
          },
          {
            icon: "🔷",
            title: "TypeScript",
            description:
              "Strict typing across the stack, API contracts and secure code maintenance.",
          },
          {
            icon: "🌬️",
            title: "Tailwind CSS",
            description:
              "Utility design system with custom tokens, dark mode and fluid responsiveness.",
          },
          {
            icon: "✨",
            title: "Framer Motion",
            description:
              "Declarative animations and transitions for expressive and fluid interfaces.",
          },
          {
            icon: "📱",
            title: "Expo",
            description:
              "Multi-platform iOS/Android build with OTA updates and simplified native integration.",
          },
        ],
        backend: [
          {
            icon: "☕",
            title: "Java & Spring Boot",
            description:
              "REST APIs, microservices and backend applications with clean, scalable architecture.",
          },
          {
            icon: "🟢",
            title: "Node.js & TypeScript",
            description:
              "Scalable microservices with strict typing and structured architecture.",
          },
          {
            icon: "🐍",
            title: "Python (AI, RAG & LLMs)",
            description:
              "Intelligent agents, RAG pipelines and LLM integrations for automation and productivity.",
          },
          {
            icon: "🗄️",
            title: "Oracle PL/SQL & APEX",
            description:
              "Transactional packages, materialized views and complex query tuning.",
          },
          {
            icon: "🔀",
            title: "iPaaS Middleware",
            description:
              "APIPASS, Digibee and coupled buses to ERPs (SAP, Totvs).",
          },
          {
            icon: "🐘",
            title: "PHP & Laravel",
            description:
              "Applications, APIs and resilient backend services in production environments.",
          },
          {
            icon: "🐳",
            title: "DevOps & Cloud",
            description:
              "OCI/AWS, GitLab CI/CD, Docker and automated deployment pipelines.",
          },
        ],
      },
    },
    services: {
      title: "Services",
      intro: "What I offer",
      items: [
        {
          title: "Web Development",
          description:
            "Web applications with React and Next.js, APIs and responsive interfaces, with focus on performance, accessibility and code maintenance.",
        },
        {
          title: "Mobile Apps",
          description:
            "Experiences in React Native aligned with platform standards, with clear navigation and well-handled loading and error states.",
        },
        {
          title: "UI / UX",
          description:
            "Flows and interfaces oriented to real user tasks, prototyping and iteration based on usability and visual consistency.",
        },
        {
          title: "Visual Identity",
          description:
            "Pieces and visual directions that reinforce brand and communication, in harmony with the digital product.",
        },
      ],
    },
    work: {
      intro: "Fullstack & web",
      title: "My Projects",
      description:
        "Each card shows what was built, the stack used and direct links to the live project and GitHub repository.",
      viewProject: "View project",
      repository: "Repository",
      downloadAPK: "Download APK",
      seeMore: "See more on GitHub",
      stack: "Stack",
      projects: [
        {
          title: "Networking Platform",
          description:
            "A complete and modern solution to optimize networking management focused on business generation through a centralized and efficient system.",
          category: "Fullstack",
        },
        {
          title: "Financial Dashboard",
          description:
            "Production fullstack financial dashboard with web and mobile, JWT authentication, interactive charts and complete transaction management.",
          category: "Fullstack",
        },
        {
          title: "FogWars",
          description:
            "Complete mobile application in React Native where the world starts unknown and you reveal each street, neighborhood and tourist spot you explore in real life.",
          category: "Mobile",
        },
        {
          title: "Loja Ferr",
          description:
            "E-commerce of semi-precious jewelry and feminine accessories, with dynamic catalog, shopping cart and payment gateway integration, created with tray app and customized with React, Tailwind CSS and Javascript.",
          category: "Frontend",
        },
      ],
    },
    contact: {
      intro: "Let's talk",
      title: "Get in touch",
      description: "I'm available for discussions about new projects or ideas.",
      placeholders: {
        name: "Your name",
        email: "your@email.com",
        message: "Your message",
      },
      submitBtn: "Send",
      successMsg: "Message sent successfully!",
      errorMsg: "Error sending message. Try again.",
    },
    footer: {
      text: `© ${new Date().getFullYear()} Yuri Deiverson. All rights reserved.`,
    },
  },
};

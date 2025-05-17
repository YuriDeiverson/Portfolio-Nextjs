# Portfólio Pessoal com Next.js, Tailwind e Framer Motion

Este é um projeto de portfólio moderno e responsivo desenvolvido com Next.js, Tailwind CSS e animações com Framer Motion. O foco está em criar uma experiência visual agradável e fluida para apresentação de projetos, habilidades e informações de contato.

## 🧩 Componentes

### 🧠 About (`About.tsx`)
Apresenta o desenvolvedor, suas habilidades e ferramentas utilizadas. Inclui animações suaves com `motion.div` e utiliza dados como `infoList` e `toolsData`.

### 📬 Contact (`Contact.tsx`)
Formulário de contato funcional integrado com a API do [Web3Forms](https://web3forms.com/). Permite o envio de mensagens sem necessidade de backend.

### 🧱 Services (`Services.tsx`)
Componente que apresenta os serviços e habilidades com foco em front-end. Ainda está em construção.

### 💼 Work (`Work.tsx`)
Seção de projetos, onde cada card leva a um link externo. Também em desenvolvimento.

## 🛠 Tecnologias Utilizadas

- **Next.js**
- **React**
- **Tailwind CSS**
- **Framer Motion**
- **Web3Forms**

## ⚙️ Como Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Rode o servidor local:
   ```bash
   npm run dev
   ```
4. Acesse `http://localhost:3000` no navegador.

## 📁 Organização

```bash
src/
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Services.tsx
│   └── Work.tsx
├── assets/
│   └── assets.ts
└── pages/
    └── index.tsx
```

## 📬 Contato

Você pode adaptar o formulário para outro serviço de envio de mensagens se preferir, mas o Web3Forms é prático e gratuito para projetos simples.

---

Feito com 💙 por [Seu Nome]

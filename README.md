# Bio-Links (Cliente) — Projeto de Portfólio

Este é um projeto **oficial desenvolvido para um cliente**, servindo como um site "Link na Bio" com foco em profissionais (advocacia, consultoria, serviços) que querem um painel limpo, elegante e fácil de atualizar.

## 🧩 Visão Geral do Projeto
- Projeto estático 100% front-end (não requer backend)
- Conteúdo configurável via `config.js` (sem necessidade de tocar em HTML/CSS)
- Experiência mobile-first, com visual moderno e foco em conversão (CTA, WhatsApp, links rápidos)

## 🛠 Tecnologias Utilizadas
- **HTML5** (estrutura semântica)
- **CSS3** com layout responsivo e animações sutis
- **JavaScript (ES6+)** para injeção dinâmica de conteúdo e recursos interativos
- **Remix Icon** para ícones (botões, links, destaque)
- **QRCode.js** para gerar QR Code do cartão de visita

## ✨ Funcionalidades Principais
- ✅ Personalização completa via `config.js`
- ✅ Botão destaque (call-to-action) com ícone customizável
- ✅ Lista de links/botões com destaque e ícone
- ✅ Card digital (QR Code) + download de “cartão” (imagem personalizada)
- ✅ Chat interativo com perguntas e respostas pré-configuradas
- ✅ Tema customizável (cores, fundo, vídeo de background)
- ✅ Transições suaves e experiência otimizada para mobile

## 🧩 Como Customizar (Configuração Rápida)
A personalização é feita em `config.js`. Edite apenas esse arquivo para:
- Atualizar o perfil (nome, bio, foto e download)
- Configurar o botão principal (WhatsApp, link de agenda, landing page)
- Adicionar/editar/remover links (Instagram, LinkedIn, serviços, etc.)
- Ajustar cores, imagem/vídeo de background e partículas
- Ativar/desativar o chat e editar as perguntas

> 🔎 Não mexa em `index.html`, `style.css` ou `script.js` a menos que queira alterar o layout ou o comportamento padrão.

---

## ▶️ Rodar Localmente (Teste)
1. Abra `index.html` no navegador.
2. Após editar `config.js`, recarregue a página.

---

## 🚀 Deploy (Publicação)
O site é estático, então funciona em qualquer hospedagem de arquivos estáticos.
Serviços recomendados:
- GitHub Pages
- Netlify
- Vercel

Basta apontar para `index.html` e enviar todos os arquivos do projeto.

---

## 📄 Sobre este projeto
Este projeto foi entregue como um **projeto comercial para um cliente**, com design pensado para conversão e facilidade de manutenção. É uma solução leve e escalável para profissionais que querem um “Link na Bio” premium sem precisar de CMS.

---

## 📌 Observações importantes
- Fotos e imagens podem ser locais (ex: `assets/img/foto.jpg`) ou URLs externas.
- Números de WhatsApp devem usar o formato internacional (ex.: `https://wa.me/5511999999999`).
- Para alterar ícones, use o catálogo do Remix Icon: https://remixicon.com/

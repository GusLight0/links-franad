# Guia de Edição - Link na Bio Premium

Este guia explica como personalizar o seu site "Link na Bio" de forma simples. Você não precisa entender de programação, apenas editar um arquivo de texto.

## 📂 Onde estão os meus dados?

Todas as informações do site (nome, foto, links, cores) estão centralizadas no arquivo:
**`config.js`**

## 🛠️ Como editar

1.  Localize o arquivo `config.js` na pasta do projeto.
2.  Clique com o botão direito nele e escolha **"Abrir com" -> "Bloco de Notas"** (ou qualquer editor de texto simples).
3.  Faça as alterações necessárias no texto.
4.  Salve o arquivo (`Ctrl + S`).
5.  Abra o arquivo `index.html` no seu navegador para ver o resultado.

---

## ⚠️ Regras de Ouro (Para não quebrar o site)

1.  **Mantenha as aspas:** O texto deve estar sempre entre aspas duplas.
    *   ✅ Correto: `name: "Mariana Fontes",`
    *   ❌ Errado: `name: Mariana Fontes,`
2.  **Cuidado com as vírgulas:** Não apague as vírgulas no final das linhas.
3.  **Verdadeiro ou Falso:** Para opções de ligar/desligar (como `highlight`), use `true` ou `false` **sem aspas**.

---

## 📝 O que alterar (Passo a Passo)

### 1. Perfil (Nome e Bio)
Procure pela seção `profile` no início do arquivo.
```javascript
profile: {
    initials: "MF",          // Suas iniciais (aparecem na tela de carregamento)
    name: "Seu Nome Aqui",   // Nome principal
    title: "Sua Especialidade", 
    bio: "Sua biografia curta...",
    // ...
},
```

### 2. Foto de Perfil
Em `avatarUrl`, você pode usar um link da internet ou um arquivo local.
*   **Link:** `"https://site.com/foto.jpg"`
*   **Arquivo:** Se a foto estiver na mesma pasta do site, coloque apenas o nome: `"minha-foto.jpg"`

### 3. Botão Principal (Destaque)
É o botão preto/dourado logo abaixo da bio.
```javascript
mainAction: {
    text: "Agendar Consultoria",
    url: "https://wa.me/5511999999999", // Link do WhatsApp (use formato internacional 55...)
    icon: "ri-whatsapp-line"
},
```

### 4. Links e Botões
Os links ficam na lista `links: [ ... ]`. Cada bloco entre chaves `{ }` representa um botão.

**Exemplo de botão:**
```javascript
{
    title: "Instagram",
    subtitle: "Acompanhe meu dia a dia",
    url: "https://instagram.com/seu.perfil",
    icon: "ri-instagram-line",
    highlight: false // Mude para true se quiser borda dourada de destaque
},
```
*Para adicionar mais botões, copie e cole o bloco acima, separando-os por vírgula.*

### 5. Rodapé
Edite a seção `footer` para alterar o número da OAB ou o texto de copyright.

---

## 🎨 Como mudar os ícones?
O site usa a biblioteca **Remix Icon**.
1.  Acesse remixicon.com.
2.  Busque o ícone desejado (ex: "email", "map", "phone").
3.  Copie o nome do ícone (ex: `ri-mail-send-line`).
4.  Cole no campo `icon` dentro do `config.js`.
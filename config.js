const config = {
    // 1. Profile Information
    profile: {
        initials: "FRA", // For the loading screen
        name: "Franad Rocha Advocacia",
        title: "Atuação jurídica consultiva e preventiva",
        bio: "Presencial | Online",
        avatarUrl: "./assets/img/logo.png", // Replace with actual photo
        
        // 👇 COLE O LINK DA IMAGEM DE DOWNLOAD AQUI (dentro das aspas):
        downloadableImage: "./assets/img/card-visita.png", // Imagem de download (ex: currículo ou portfólio),
        qrcodeUrl: "https://wa.me/5598991213307", // Link específico para o QR Code (WhatsApp)
    },

    // 2. Main Call to Action (The Gold Button)
    mainAction: {
        text: "Me siga no Instagram",
        url: "https://www.instagram.com/franadrocha.adv?igsh=N2p4Z3FnOXM1N2t4&utm_source=qr", // Link do seu Instagram
        icon: "ri-instagram-line" // Ícone do Instagram
    },

    // 3. Link Cards (Socials & Services)
    links: [
        {
            title: "WhatsApp da Empresa",
            subtitle: "Fale diretamente com minha equipe",
            url: "https://wa.me/5598991213307",
            icon: "ri-whatsapp-fill",
            highlight: true,
            featured: true // Adds a star icon to indicate it's a featured link
        },
        {
            title: "Instagram",
            subtitle: "Acompanhe nossas redes sociais",
            url: "https://www.instagram.com/franadrocha.adv?igsh=N2p4Z3FnOXM1N2t4&utm_source=qr",
            icon: "ri-instagram-line",
            highlight: false
        },
        {
            title: "Localização",
            subtitle: "Veja no Google Maps",
            url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.12804728418908!2d-44.3027781679215!3d-2.4908112479647944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68d797e30000b%3A0x5638df033859e1d1!2sEdif%C3%ADcio%20Tech%20Office!5e0!3m2!1spt-BR!2sbr!4v1773062075061!5m2!1spt-BR!2sbr", // Link para abrir o mapa
            icon: "ri-map-pin-line",
            highlight: true, // Adds a subtle gold border
            featured: true,   // Adds a star icon next to title
            image: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.12804728418908!2d-44.3027781679215!3d-2.4908112479647944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68d797e30000b%3A0x5638df033859e1d1!2sEdif%C3%ADcio%20Tech%20Office!5e0!3m2!1spt-BR!2sbr!4v1773062075061!5m2!1spt-BR!2sbr" // Link de embed para o preview
        },
        {
            title: "Conheça nosso Cartão de Visita",
            subtitle: "",
            url: "./assets/img/card-visita.png", // 👈 COLOQUE O LINK AQUI (ex: site ou vídeo)
            icon: "ri-building-2-line",
            highlight: true, // Borda dourada para destaque
            featured: false,
            image: "./assets/img/card-visita.png" // 📸 Foto representativa (Ex: Escritório)'
        }
    ],

    // 4. Credibility / Footer
    footer: {
        text: "© 2026| Franad Rocha Advocacia",
        subtext: "Excelência e discrição."
    },

    // 5. Theme Settings
    theme: {
        primaryColor: "#D4AF37", // Gold
        backgroundColor: "#FAFAFA", // Off-white
        textColor: "#1A1A1A", // Dark Charcoal
        backgroundVideo: "", // Coloque o link do vídeo aqui (ex: .mp4). Se vazio, usa a imagem.
        backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" // Minimalist Office
    },

    // 5.1. Particle Background
    particles: {
        enabled: true,      // Defina como 'true' para ativar as partículas
        count: 80,          // Número de partículas na tela
        color: "#D4AF37",   // Cor das partículas (padrão: dourado)
        interaction: true   // 'true' para que as partículas reajam ao mouse
    },

    // 6. Floating Chat
    chat: {
        enabled: true,
        notificationSound: "https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3", // Som suave de notificação
        welcomeMessage: "Olá! Sou da equipe de advocacia. Como posso ajudar você hoje?",
        questions: [
            {
                question: "Como funciona o atendimento do escritório?",
                answer: "Nosso atendimento inicial é realizado para compreender sua situação e orientar sobre as possíveis soluções jurídicas. Após a análise do caso, informamos as medidas cabíveis e os próximos passos."
            },
            {
                question: "O atendimento pode ser online?",
                answer: "Sim. Realizamos atendimentos online e presenciais. Dessa forma conseguimos orientar clientes de qualquer local com a mesma qualidade e segurança jurídica."
            },
            {
                question: "Quais áreas do direito vocês atuam?",
                answer: "Atuamos principalmente nas áreas de Direito Condominial, Direito Imobiliário, Recuperação de Créditos, Direito Trabalhista e demandas cíveis em geral, sempre com foco em soluções jurídicas seguras e estratégicas."
            },
            {
                question: "Como posso agendar um atendimento?",
                answer: "Você pode agendar seu atendimento enviando uma mensagem aqui no direct ou pelo WhatsApp. Nossa equipe retornará para organizar o melhor horário."
            },
            {
                question: "A consulta tem custo?",
                answer: "Cada caso precisa de análise individual. Informe brevemente sua situação pelo direct ou WhatsApp que explicaremos como funciona o atendimento inicial."
            }
        ]
    }
};

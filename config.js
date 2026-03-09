const config = {
    // 1. Profile Information
    profile: {
        initials: "MF", // For the loading screen
        name: "Mariana Fontes",
        title: "Advogada Especialista em Direito Imobiliário",
        bio: "Protegendo seu patrimônio com estratégia jurídica de alto padrão. Assessoria completa para compra, venda e regularização de imóveis.",
        avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Replace with actual photo
        
        // 👇 COLE O LINK DA IMAGEM DE DOWNLOAD AQUI (dentro das aspas):
        downloadableImage: "./assets/img/cartao-visita.png", // Imagem de download (ex: currículo ou portfólio),
    },

    // 2. Main Call to Action (The Gold Button)
    mainAction: {
        text: "Me siga no Instagram",
        url: "https://instagram.com/seu.perfil", // Link do seu Instagram
        icon: "ri-instagram-line" // Ícone do Instagram
    },

    // 3. Link Cards (Socials & Services)
    links: [
        {
            title: "WhatsApp Pessoal",
            subtitle: "Fale diretamente com minha equipe",
            url: "https://wa.me/5511999999999",
            icon: "ri-whatsapp-fill",
            highlight: true,
            featured: true // Adds a star icon to indicate it's a featured link
        },
        {
            title: "Instagram",
            subtitle: "Acompanhe análises de mercado",
            url: "https://instagram.com",
            icon: "ri-instagram-line",
            highlight: false
        },
        {
            title: "LinkedIn",
            subtitle: "Minha trajetória profissional",
            url: "https://linkedin.com",
            icon: "ri-linkedin-fill",
            highlight: false
        },
        {
            title: "Regularização de Imóveis",
            subtitle: "Serviço Especializado",
            url: "#",
            icon: "ri-file-paper-2-line",
            highlight: true, // Adds a subtle gold border
            featured: true   // Adds a star icon next to title
        }
    ],

    // 4. Credibility / Footer
    footer: {
        text: "OAB/SP 00.000 | © 2026 Mariana Fontes Advocacia",
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
        welcomeMessage: "Olá! Sou Mariana. Como posso ajudar você hoje?",
        questions: [
            { question: "Como funciona a consultoria?", answer: "Nossa consultoria é personalizada. Analisamos seu caso e traçamos a melhor estratégia jurídica." },
            { question: "Quais áreas você atende?", answer: "Sou especialista em Direito Imobiliário, atuando em regularização, compra e venda, e contratos." },
            { question: "Qual o valor dos honorários?", answer: "Os honorários variam conforme a complexidade do caso. Agende uma reunião para um orçamento preciso." }
        ]
    }
};

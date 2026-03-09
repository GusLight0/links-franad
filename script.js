document.addEventListener('DOMContentLoaded', () => {
    // --- Tratamento de Erros (Segurança) ---
    function showConfigError(msg) {
        // Remove o loader para não ficar travado na tela
        const loader = document.getElementById('loader');
        if (loader) loader.style.display = 'none';

        // Mostra a mensagem de erro amigável
        document.body.innerHTML = `
            <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:#fff5f5;color:#c53030;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-family:sans-serif;z-index:9999;padding:20px;">
                <h1 style="margin-bottom:10px;">⚠️ Erro no Arquivo de Configuração</h1>
                <p style="font-size:1.1rem;margin-bottom:20px;">O site não conseguiu ler o arquivo <strong>config.js</strong>.</p>
                <div style="background:white;padding:20px;border-radius:8px;box-shadow:0 4px 6px rgba(0,0,0,0.1);text-align:left;max-width:500px;width:100%;">
                    <strong>Dicas para corrigir:</strong>
                    <ul style="margin:10px 0 15px 20px;">
                        <li>Verifique se não faltou nenhuma <strong>vírgula (,)</strong>.</li>
                        <li>Verifique se todas as <strong>aspas (" ")</strong> estão fechadas.</li>
                    </ul>
                    <div style="font-size:0.85rem;color:#718096;border-top:1px solid #eee;padding-top:10px;">
                        <strong>Erro técnico:</strong> ${msg}
                    </div>
                </div>
                <button onclick="location.reload()" style="margin-top:20px;padding:10px 20px;background:#c53030;color:white;border:none;border-radius:5px;cursor:pointer;">Tentar Novamente</button>
            </div>
        `;
    }

    if (typeof config === 'undefined') {
        showConfigError("O objeto 'config' não foi encontrado. Provável erro de sintaxe.");
        return;
    }

    try {
    // 1. Initialize Loading Screen
    const loader = document.getElementById('loader');
    const loaderInitials = document.getElementById('loader-initials');
    const mainContent = document.getElementById('main-content');

    // Set initials from config
    loaderInitials.textContent = config.profile.initials;

    // Simulate loading time (e.g., 2 seconds)
    setTimeout(() => {
        loader.style.opacity = '0';
        
        // Remove loader from DOM after fade out
        setTimeout(() => {
            loader.style.display = 'none';
            mainContent.classList.remove('hidden');
            
            // Trigger entrance animation
            requestAnimationFrame(() => {
                mainContent.classList.add('visible');
                animateElements(); // Função renomeada para animar tudo
            });
        }, 800);
    }, 1500);

    // 2. Render Profile Data
    document.getElementById('profile-image').src = config.profile.avatarUrl;
    document.getElementById('profile-name').textContent = config.profile.name;
    document.getElementById('profile-title').textContent = config.profile.title;
    document.getElementById('profile-bio').textContent = config.profile.bio;

    // 3. Render Main CTA
    const ctaBtn = document.getElementById('main-cta');
    const ctaIcon = document.getElementById('cta-icon');
    const ctaText = document.getElementById('cta-text');

    ctaBtn.href = config.mainAction.url;
    ctaIcon.className = config.mainAction.icon;
    ctaText.textContent = config.mainAction.text;

    // 4. Render Link Cards
    const linksContainer = document.getElementById('links-list');

    config.links.forEach((link, index) => {
        const a = document.createElement('a');
        a.href = link.url;
        a.className = `link-card ${link.highlight ? 'highlight' : ''}`;
        a.target = "_blank"; // Open in new tab
        a.rel = "noopener noreferrer";
        
        const featuredIcon = link.featured ? '<i class="ri-star-fill featured-icon"></i>' : '';

        // Lógica para Preview de Imagem (Mapa, etc)
        let imageHtml = '';
        let contentWrapperStart = '';
        let contentWrapperEnd = '';

        if (link.image) {
            a.style.flexDirection = 'column'; // Muda para coluna
            a.style.alignItems = 'stretch';   // Estica o conteúdo
            // Cria um wrapper para manter o ícone e texto alinhados
            contentWrapperStart = '<div style="display:flex; align-items:center;">';
            contentWrapperEnd = '</div>';

            // Verifica se é um link de embed do Google Maps
            if (link.image.includes('google.com/maps/embed')) {
                imageHtml = `<iframe src="${link.image}" class="link-preview" style="width:100%; height:180px; border:0; border-radius:6px; margin-top:12px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            } else {
                // Caso contrário, trata como uma imagem normal
                imageHtml = `<img src="${link.image}" class="link-preview" style="width:100%; height:160px; object-fit:cover; border-radius:6px; margin-top:12px; border:1px solid rgba(0,0,0,0.1);">`;
            }
        }

        a.innerHTML = `
            ${contentWrapperStart}
            <i class="${link.icon} card-icon"></i>
            <div class="card-content">
                <span class="card-title">${link.title} ${featuredIcon}</span>
                ${link.subtitle ? `<span class="card-subtitle">${link.subtitle}</span>` : ''}
            </div>
            ${contentWrapperEnd}
            ${imageHtml}
        `;

        linksContainer.appendChild(a);
    });

    // 5. Render Footer
    document.getElementById('footer-text').textContent = config.footer.text;
    document.getElementById('footer-subtext').textContent = config.footer.subtext;

    // Helper: Add animation class to elements sequentially
    function animateElements() {
        // Elementos do cabeçalho
        const headerElements = [
            document.querySelector('.avatar-container'),
            document.getElementById('profile-name'),
            document.getElementById('profile-title'),
            document.getElementById('profile-bio'),
            document.querySelector('.cta-container')
        ];
        
        const cards = document.querySelectorAll('.link-card');
        
        // Combina tudo em uma lista única para animar em ordem
        const allElements = [...headerElements, ...cards, document.querySelector('.footer')];

        allElements.forEach((el, index) => {
            if (el) {
                el.classList.add('fade-in-up');
                el.style.animationDelay = `${index * 0.1}s`; // 100ms de atraso entre cada um
            }
        });
    }

    // 6. Apply Background Video & Image
    // Video Logic
    if (config.theme.backgroundVideo) {
        const bgVideoEl = document.getElementById('bg-video');
        bgVideoEl.src = config.theme.backgroundVideo;
        
        // Mostra o vídeo apenas quando estiver pronto para tocar (evita tela preta)
        bgVideoEl.oncanplay = () => {
            bgVideoEl.classList.add('loaded');
        };
    }

    // Image Logic (Fallback & Parallax)
    if (config.theme.backgroundImage) {
        const bgImageEl = document.getElementById('bg-image');
        
        // Preload image for smooth fade-in
        const img = new Image();
        img.src = config.theme.backgroundImage;
        img.onload = () => {
            bgImageEl.style.backgroundImage = `url('${config.theme.backgroundImage}')`;
            bgImageEl.classList.add('loaded');
        };

        // 6.1 Parallax Effect (Desktop Only)
        let ticking = false;
        document.addEventListener('mousemove', (e) => {
            if (!ticking && window.innerWidth > 768) {
                window.requestAnimationFrame(() => {
                    const moveX = (e.clientX - window.innerWidth / 2) * 0.015;
                    const moveY = (e.clientY - window.innerHeight / 2) * 0.015;
                    
                    // Move background slightly opposite to mouse
                    bgImageEl.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // 7. Initialize Chat Widget
    if (config.chat && config.chat.enabled) {
        const chatContainer = document.getElementById('chat-widget-container');
        
        // Create Chat HTML Structure
        chatContainer.innerHTML = `
            <div class="chat-window" id="chat-window">
                <div class="chat-header">
                    <img src="${config.profile.avatarUrl}" class="chat-avatar" alt="Avatar">
                    <span class="chat-title">${config.profile.name}</span>
                    <i class="ri-close-line chat-close" id="chat-close"></i>
                </div>
                <div class="chat-body" id="chat-body">
                    <div class="message bot">${config.chat.welcomeMessage}</div>
                </div>
                <div class="chat-options" id="chat-options">
                    <!-- Options injected here -->
                </div>
            </div>
            <div class="chat-widget-btn" id="chat-toggle">
                <i class="ri-chat-3-line"></i>
            </div>
        `;

        const chatToggle = document.getElementById('chat-toggle');
        const chatWindow = document.getElementById('chat-window');
        const chatClose = document.getElementById('chat-close');
        const chatOptions = document.getElementById('chat-options');
        const chatBody = document.getElementById('chat-body');
        
        let hasOpened = false; // Estado para controlar o som
        const notificationAudio = new Audio(config.chat.notificationSound);

        // Toggle Chat
        function toggleChat() {
            chatWindow.classList.toggle('open');
            
            // Toca o som apenas na primeira vez que abre
            if (!hasOpened && chatWindow.classList.contains('open')) {
                notificationAudio.play().catch(e => console.log("Audio play blocked by browser policy"));
                hasOpened = true;
            }

            const icon = chatToggle.querySelector('i');
            if (chatWindow.classList.contains('open')) {
                icon.className = 'ri-close-line';
            } else {
                icon.className = 'ri-chat-3-line';
            }
        }

        chatToggle.addEventListener('click', toggleChat);
        chatClose.addEventListener('click', toggleChat);

        // Render Questions
        const optionButtons = [];

        config.chat.questions.forEach(q => {
            const btn = document.createElement('button');
            btn.className = 'chat-option-btn';
            btn.textContent = q.question;
            optionButtons.push(btn);

            btn.addEventListener('click', () => {
                // Oculta a opção para evitar acúmulo
                btn.style.display = 'none';

                // Add User Message
                addMessage(q.question, 'user');

                // Simulate Typing Delay
                showTypingIndicator().then(() => {
                    addMessage(q.answer, 'bot');
                });
            });

            chatOptions.appendChild(btn);
        });

        // Reset Conversation Button
        const resetBtn = document.createElement('button');
        resetBtn.className = 'chat-reset-btn';
        resetBtn.textContent = 'Resetar conversa';
        resetBtn.title = 'Limpar chat e mostrar as opções novamente';

        resetBtn.addEventListener('click', () => {
            // Limpa a conversa e reexibe a mensagem de boas-vindas
            chatBody.innerHTML = '';
            addMessage(config.chat.welcomeMessage, 'bot');

            // Reexibe todas as opções anteriores
            optionButtons.forEach(b => {
                b.style.display = '';
                b.disabled = false;
            });
        });

        chatOptions.appendChild(resetBtn);

        function addMessage(text, sender) {
            const msgDiv = document.createElement('div');
            msgDiv.className = `message ${sender}`;
            msgDiv.textContent = text;
            chatBody.appendChild(msgDiv);
            chatBody.scrollTop = chatBody.scrollHeight; // Auto scroll to bottom
        }

        function showTypingIndicator() {
            return new Promise((resolve) => {
                // Cria o balão de "digitando..."
                const typingDiv = document.createElement('div');
                typingDiv.className = 'message bot typing-indicator';
                typingDiv.innerHTML = `
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                `;
                chatBody.appendChild(typingDiv);
                chatBody.scrollTop = chatBody.scrollHeight;

                // Tempo aleatório entre 1s e 2s para parecer humano
                const delay = Math.floor(Math.random() * 1000) + 1000;

                setTimeout(() => {
                    typingDiv.remove(); // Remove os pontinhos
                    resolve(); // Permite enviar a resposta real
                }, delay);
            });
        }
    }

    // 8. Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');

    // Check Local Storage on Load
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.className = 'ri-sun-line';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.className = 'ri-sun-line';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.className = 'ri-moon-line';
            localStorage.setItem('theme', 'light');
        }
    });

    // 9. Digital Business Card (QR Code & vCard)
    const shareBtn = document.getElementById('share-btn');
    const shareModal = document.getElementById('share-modal');
    const closeModal = document.getElementById('close-modal');
    const modalAvatar = document.getElementById('modal-avatar');
    const modalName = document.getElementById('modal-name');
    const qrContainer = document.getElementById('qrcode-container');
    const downloadVcardBtn = document.getElementById('download-vcard');
    const shareNativeBtn = document.getElementById('share-native');

    // Populate Modal Data
    modalAvatar.src = config.profile.avatarUrl;
    modalName.textContent = config.profile.name;

    // Generate QR Code (WhatsApp)
    // Limpa container anterior se houver
    qrContainer.innerHTML = '';
    new QRCode(qrContainer, {
        text: config.profile.qrcodeUrl || config.mainAction.url, // Usa o link do QR Code ou o principal
        width: 180,
        height: 180,
        colorDark : config.theme.primaryColor === '#D4AF37' ? "#000000" : config.theme.primaryColor,
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    // Open/Close Modal Logic
    shareBtn.addEventListener('click', () => {
        shareModal.classList.add('open');
    });

    closeModal.addEventListener('click', () => {
        shareModal.classList.remove('open');
    });

    shareModal.addEventListener('click', (e) => {
        if (e.target === shareModal) shareModal.classList.remove('open');
    });

    // Download Image Logic
    downloadVcardBtn.addEventListener('click', async () => {
        const imageUrl = config.profile.downloadableImage;
        
        if (!imageUrl) {
            alert("Por favor, configure o link da imagem em config.js (campo downloadableImage)");
            return;
        }

        try {
            // Tenta baixar a imagem como arquivo
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = 'cartão-de-visita.png'; // Nome do arquivo ao baixar
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            // Se der erro (ex: bloqueio de segurança do site da imagem), abre em nova aba
            window.open(imageUrl, '_blank');
        }
    });

    // Native Share Logic (Mobile Share Menu)
    shareNativeBtn.addEventListener('click', async () => {
        const shareData = {
            title: config.profile.name,
            text: config.profile.bio,
            url: window.location.href
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            // Fallback for Desktop: Copy to Clipboard
            navigator.clipboard.writeText(window.location.href);
            const originalText = shareNativeBtn.innerHTML;
            shareNativeBtn.innerHTML = '<i class="ri-check-line"></i> Link Copiado!';
            setTimeout(() => {
                shareNativeBtn.innerHTML = originalText;
            }, 2000);
        }
    });

    // 10. Interactive Particles
    if (config.particles && config.particles.enabled) {
        const particleScript = document.createElement('script');
        // Usando a versão 'slim' que é menor e contém tudo o que precisamos
        particleScript.src = "https://cdn.jsdelivr.net/npm/tsparticles-slim@2.12.0/tsparticles.slim.bundle.min.js";
        
        particleScript.onload = () => {
            const particleDiv = document.createElement('div');
            particleDiv.id = 'particles-container';
            document.body.insertBefore(particleDiv, document.body.firstChild);

            tsParticles.load("particles-container", {
                fullScreen: { enable: false }, // Desativado para usar nosso próprio container
                particles: {
                    number: {
                        value: config.particles.count || 80,
                    },
                    color: {
                        value: config.particles.color || "#D4AF37",
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: { min: 0.3, max: 0.8 }
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        outModes: { default: "out" },
                    },
                },
                interactivity: {
                    detectsOn: "window", // Detecta o mouse na janela inteira, não bloqueando cliques
                    events: {
                        onHover: {
                            enable: config.particles.interaction !== false, // Ativado se não for explicitamente falso
                            mode: "repulse", // Efeito de repelir as partículas
                        },
                    },
                    modes: { repulse: { distance: 80, duration: 0.4 } },
                },
                detectRetina: true,
            });
        };
        document.head.appendChild(particleScript);
    }

    } catch (error) {
        showConfigError(error.message);
    }
});

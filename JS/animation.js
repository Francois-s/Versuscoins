// Emojis liés au combat
const fightEmojis = ['🥊', '👊', '💥', '🔥', '⚡', '💪', '🏆'];

// Fonction pour créer un emoji flottant
function createFloatingEmoji() {
    const emoji = document.createElement('div');
    emoji.className = 'floating-emoji';
    emoji.textContent = fightEmojis[Math.floor(Math.random() * fightEmojis.length)];
    
    const vsSection = document.querySelector('.vs-section');
    const rect = vsSection.getBoundingClientRect();
    
    const xPos = Math.random() * rect.width;
    emoji.style.left = `${xPos}px`;
    emoji.style.bottom = '0';
    
    // Animation plus courte (4-6 secondes)
    emoji.style.animation = `floatUp ${4 + Math.random() * 2}s ease-out forwards`;
    
    vsSection.appendChild(emoji);
    
    // Supprimer l'emoji plus tôt
    setTimeout(() => emoji.remove(), 6000);
}

// Fonction pour créer un feu d'artifice
function createFirework() {
    const vsSection = document.querySelector('.vs-section');
    const rect = vsSection.getBoundingClientRect();
    
    const xPos = Math.random() * (rect.width - 100);
    const yPos = rect.height * 0.2 + Math.random() * (rect.height * 0.6);
    
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = `${xPos}px`;
    firework.style.top = `${yPos}px`;
    firework.style.zIndex = '1000';
    // Rendre l'élément firework complètement transparent
    firework.style.backgroundColor = 'transparent';
    firework.style.width = '0';
    firework.style.height = '0';
    vsSection.appendChild(firework);
    
    const colors = [
        '#FF1493', '#00FFFF', '#FFD700', '#FF4500',
        '#7FFF00', '#FF69B4', '#4169E1', '#FFA500'
    ];
    const selectedColor = colors[Math.floor(Math.random() * colors.length)];
    
    const fragmentCount = 50;
    
    for(let i = 0; i < fragmentCount; i++) {
        const fragment = document.createElement('div');
        fragment.className = 'firework-fragment';
        fragment.style.backgroundColor = selectedColor;
        fragment.style.width = '6px';
        fragment.style.height = '6px';
        fragment.style.boxShadow = `0 0 10px ${selectedColor}, 0 0 20px ${selectedColor}`;
        fragment.style.left = '50%';
        fragment.style.top = '50%';
        firework.appendChild(fragment);

        const angle = (i / fragmentCount) * Math.PI * 2;
        const distance = 100 + Math.random() * 200;
        
        const offsetX = Math.cos(angle) * distance;
        const offsetY = Math.sin(angle) * distance;
        
        fragment.animate([
            { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
            { transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px)) scale(0.5)`, opacity: 0 }
        ], {
            duration: 2000 + Math.random() * 1000,
            easing: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
            fill: 'forwards'
        });
    }
    
    // Réduire le délai de suppression
    setTimeout(() => firework.remove(), 2500);
}

// Mise à jour des styles
const style = document.createElement('style');
style.textContent = `
    .firework {
        position: absolute;
        pointer-events: none;
        z-index: 1000;
        background: transparent;
    }

    .firework-fragment {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        mix-blend-mode: screen;
    }

    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        70% {
            opacity: 0.7;
        }
        100% {
            transform: translateY(-${window.innerHeight * 0.7}px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .floating-emoji {
        position: absolute;
        font-size: 3em;
        pointer-events: none;
        z-index: 1000;
    }

    .sparkle {
        position: absolute;
        width: 8px;
        height: 8px;
        background: white;
        border-radius: 50%;
        pointer-events: none;
        box-shadow: 
            0 0 10px #fff,
            0 0 20px #fff,
            0 0 30px #fff;
        animation: sparkle-fade 1.5s ease-out forwards;
    }

    @keyframes sparkle-fade {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        50% {
            transform: scale(1.2);
            opacity: 0.8;
        }
        100% {
            transform: scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Fonction pour ajouter l'aura d'énergie
function addEnergyAura() {
    const characters = document.querySelectorAll('.character');
    characters.forEach(character => {
        const aura = document.createElement('div');
        aura.className = 'energy-aura';
        character.appendChild(aura);
    });
}

// Fonction pour créer une étincelle
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    const vsSection = document.querySelector('.vs-section');
    const rect = vsSection.getBoundingClientRect();
    
    const xPos = Math.random() * rect.width;
    const yPos = Math.random() * rect.height;
    
    sparkle.style.left = `${xPos}px`;
    sparkle.style.top = `${yPos}px`;
    
    vsSection.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1500);
}

// Fonction pour créer un éclair photo
function createLightning() {
    const lightning = document.createElement('div');
    lightning.className = 'lightning';
    
    // Position aléatoire du flash
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    lightning.style.setProperty('--x', `${x}%`);
    lightning.style.setProperty('--y', `${y}%`);
    
    document.body.appendChild(lightning);
    lightning.style.animation = 'lightning 0.5s ease-out forwards';
    
    // Créer un second flash rapide
    setTimeout(() => {
        const flash = lightning.cloneNode(true);
        document.body.appendChild(flash);
        flash.style.animation = 'lightning 0.3s ease-out forwards';
        setTimeout(() => flash.remove(), 300);
    }, 100);
    
    setTimeout(() => lightning.remove(), 500);
}

// Gestion des animations au scroll
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-scroll');
    const sections = document.querySelectorAll('.section-animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
    sections.forEach(section => observer.observe(section));
}

// Effet de parallaxe
function handleParallax(e) {
    const parallaxElements = document.querySelectorAll('.parallax');
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 20;
        const x = mouseX * speed;
        const y = mouseY * speed;
        element.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// Ajouter une fonction pour vérifier si la section VS est visible
function isVsSectionVisible() {
    const vsSection = document.querySelector('.vs-section');
    if (!vsSection) return false;
    
    const rect = vsSection.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= window.innerHeight
    );
}

// Créer des variables pour stocker les intervalles
let emojiInterval;
let fireworkInterval;
let lightningInterval;
let sparkleInterval;

// Fonction pour démarrer les animations
function startAnimations() {
    if (emojiInterval) return; // Éviter les doublons

    // Démarrer les emojis
    emojiInterval = setInterval(createFloatingEmoji, 1000);
    
    // Démarrer les feux d'artifice
    fireworkInterval = setInterval(() => {
        if(Math.random() < 0.4) {
            createFirework();
        }
    }, 800);
    
    // Démarrer les éclairs
    lightningInterval = setInterval(() => {
        if(Math.random() < 0.2) {
            createLightning();
        }
    }, 1000);
    
    // Démarrer les étincelles
    sparkleInterval = setInterval(createSparkle, 1000);
}

// Fonction pour arrêter les animations
function stopAnimations() {
    clearInterval(emojiInterval);
    clearInterval(fireworkInterval);
    clearInterval(lightningInterval);
    clearInterval(sparkleInterval);
    
    emojiInterval = null;
    fireworkInterval = null;
    lightningInterval = null;
    sparkleInterval = null;
}

// Modifier la fonction initAnimations
function initAnimations() {
    // Ajouter l'aura d'énergie aux personnages
    addEnergyAura();
    
    // Ajouter la classe wave-effect aux boutons
    document.querySelectorAll('.button').forEach(btn => {
        btn.classList.add('wave-effect');
    });
    
    // Ajouter les classes d'animation aux éléments existants
    const characters = document.querySelectorAll('.character img');
    characters.forEach(char => char.classList.add('float-effect'));
    
    const logos = document.querySelectorAll('.vs-section img[src*="logo"]');
    logos.forEach(logo => {
        logo.classList.add('pulse-effect');
        logo.classList.add('parallax');
    });

    // Ajouter les classes pour les animations au scroll
    document.querySelectorAll('img:not(.float-effect)').forEach(img => {
        img.classList.add('fade-in-scroll');
    });

    document.querySelectorAll('section, .container').forEach(section => {
        section.classList.add('section-animate');
    });

    // Réduire le nombre d'emojis initiaux
    for(let i = 0; i < 3; i++) {
        setTimeout(() => {
            createFloatingEmoji();
            if(i % 2 === 0) createFirework();
            if(i % 3 === 0) createLightning();
        }, i * 200);
    }
    
    // Remplacer la section des animations par :
    if (isVsSectionVisible()) {
        startAnimations();
    }

    // Ajouter un écouteur de scroll pour démarrer/arrêter les animations
    window.addEventListener('scroll', () => {
        if (isVsSectionVisible()) {
            startAnimations();
        } else {
            stopAnimations();
        }
    });

    // Initialiser les animations au scroll
    handleScrollAnimations();

    // Ajouter l'effet de parallaxe
    document.addEventListener('mousemove', handleParallax);
}

// Démarrer les animations quand la page est chargée
document.addEventListener('DOMContentLoaded', initAnimations);

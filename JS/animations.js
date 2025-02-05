// Emojis liés au combat
const fightEmojis = ['🥊', '👊', '💥', '🤼', '🔥', '⚡', '💪', '🏆'];

// Fonction pour créer un emoji flottant
function createFloatingEmoji() {
    const emoji = document.createElement('div');
    emoji.className = 'floating-emoji';
    emoji.textContent = fightEmojis[Math.floor(Math.random() * fightEmojis.length)];
    
    const vsSection = document.querySelector('.vs-section');
    const rect = vsSection.getBoundingClientRect();
    
    // Position aléatoire sur l'axe X dans la section VS
    const xPos = Math.random() * rect.width;
    emoji.style.left = `${xPos}px`;
    emoji.style.bottom = '0';
    
    // Animation lente (12-18 secondes)
    emoji.style.animation = `floatUp ${12 + Math.random() * 6}s ease-out forwards`;
    
    vsSection.appendChild(emoji);
    
    // Supprimer l'emoji après l'animation
    setTimeout(() => emoji.remove(), 18000);
}

// Fonction pour créer un feu d'artifice
function createFirework() {
    const vsSection = document.querySelector('.vs-section');
    const rect = vsSection.getBoundingClientRect();
    
    // Position aléatoire dans la section VS
    const xPos = Math.random() * rect.width;
    const yPos = rect.height * 0.3 + Math.random() * (rect.height * 0.4);
    
    // Créer le centre du feu d'artifice
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = `${xPos}px`;
    firework.style.top = `${yPos}px`;
    vsSection.appendChild(firework);
    
    // Animation d'explosion
    firework.style.animation = 'fireworkExplode 2s ease-out forwards';
    
    // Créer les particules
    const numParticles = 24; // Plus de particules
    for(let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';
        
        // Position initiale au centre
        particle.style.left = '50%';
        particle.style.top = '50%';
        
        // Direction aléatoire pour chaque particule
        const angle = (i / numParticles) * Math.PI * 2;
        const distance = 200 + Math.random() * 200;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        particle.style.setProperty('--x', `${x}px`);
        particle.style.setProperty('--y', `${y}px`);
        particle.style.animation = 'fireworkParticle 2s ease-out forwards';
        
        // Ajouter des traînées
        for(let j = 0; j < 3; j++) {
            const trail = document.createElement('div');
            trail.className = 'firework-trail';
            trail.style.transform = `rotate(${angle * 180 / Math.PI}deg)`;
            trail.style.animation = `particleTrail ${0.5 + Math.random() * 0.5}s ease-out forwards ${j * 0.1}s`;
            particle.appendChild(trail);
        }
        
        firework.appendChild(particle);
    }
    
    // Supprimer le feu d'artifice après l'animation
    setTimeout(() => firework.remove(), 2500);
}

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

// Initialisation des animations
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

    // Créer des emojis flottants périodiquement (deux fois plus fréquent)
    setInterval(createFloatingEmoji, 1000);
    
    // Créer des feux d'artifice
    setInterval(() => {
        if(Math.random() < 0.15) {
            createFirework();
        }
    }, 2000);
    
    // Créer des éclairs photo (deux fois plus fréquent)
    setInterval(() => {
        if(Math.random() < 0.1) {
            createLightning();
        }
    }, 1500);
    
    // Créer des particules d'énergie autour des personnages
    const charactersList = document.querySelectorAll('.character');
    setInterval(() => {
        charactersList.forEach(character => {
            if(Math.random() < 0.5) { // 50% de chance pour chaque personnage
                createEnergyParticles(character);
            }
        });
    }, 100);

    // Créer des étincelles périodiquement
    setInterval(createSparkle, 1000);

    // Initialiser les animations au scroll
    handleScrollAnimations();

    // Ajouter l'effet de parallaxe
    document.addEventListener('mousemove', handleParallax);
}

// Démarrer les animations quand la page est chargée
document.addEventListener('DOMContentLoaded', initAnimations);

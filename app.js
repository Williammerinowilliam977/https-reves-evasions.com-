// Gestion des langues
const translations = {
  fr: {
    home: "Accueil",
    bangkok: "Bangkok",
    chiangmai: "Chiang Mai",
    phuket: "Phuket",
    pattaya: "Pattaya",
    isles: "Îles Phi Phi",
    booking: "Booking",
    about: "À Propos",
    avis: "Avis",
    faq: "FAQ",
    contact: "Contact",
    welcome: "🌟 Bienvenue en Thaïlande",
    subtitle: "Découvrez des expériences authentiques et inoubliables",
    sejoursBtn: "✓ Créer mon séjour",
    contactBtn: "💬 Nous contacter"
  },
  en: {
    home: "Home",
    bangkok: "Bangkok",
    chiangmai: "Chiang Mai",
    phuket: "Phuket",
    pattaya: "Pattaya",
    isles: "Phi Phi Islands",
    booking: "Booking",
    about: "About Us",
    avis: "Reviews",
    faq: "FAQ",
    contact: "Contact",
    welcome: "🌟 Welcome to Thailand",
    subtitle: "Discover authentic and unforgettable experiences",
    sejoursBtn: "✓ Create my stay",
    contactBtn: "💬 Contact us"
  },
  th: {
    home: "หน้าแรก",
    bangkok: "กรุงเทพฯ",
    chiangmai: "เชียงใหม่",
    phuket: "ภูเก็ต",
    pattaya: "พัทยา",
    isles: "หมู่เกาะพีพี",
    booking: "จองตั๋ว",
    about: "เกี่ยวกับเรา",
    avis: "รีวิว",
    faq: "คำถามที่พบบ่อย",
    contact: "ติดต่อ",
    welcome: "🌟 ยินดีต้อนรับสู่ประเทศไทย",
    subtitle: "ค้นพบประสบการณ์ที่แท้จริงและไม่มีวันลืม",
    sejoursBtn: "✓ สร้างการเข้าพักของฉัน",
    contactBtn: "💬 ติดต่อเรา"
  }
};

function changeLanguage(lang) {
  localStorage.setItem('selectedLanguage', lang);
  const t = translations[lang];

  // Maj navigation
  const navLinks = document.querySelectorAll('nav a');
  if (navLinks.length > 0) {
    navLinks[0].textContent = t.home;
    navLinks[1].textContent = t.bangkok;
    navLinks[2].textContent = t.chiangmai;
    navLinks[3].textContent = t.phuket;
    navLinks[4].textContent = t.pattaya;
    navLinks[5].textContent = t.isles;
    navLinks[6].textContent = t.booking;
    navLinks[7].textContent = t.about;
    navLinks[8].textContent = t.avis;
    navLinks[9].textContent = t.faq;
    navLinks[10].textContent = t.contact;
  }

  // Maj hero section
  const heroH1 = document.querySelector('.hero h1');
  if (heroH1) heroH1.textContent = t.welcome;
  const heroP = document.querySelector('.hero p');
  if (heroP) heroP.textContent = t.subtitle;

  // Maj boutons CTA
  const ctaBtns = document.querySelectorAll('.cta-buttons a');
  if (ctaBtns.length > 0) {
    ctaBtns[0].textContent = t.sejoursBtn;
    ctaBtns[1].textContent = t.contactBtn;
  }

  // Maj langue de la page
  document.documentElement.lang = lang;
}

// Charger la langue sauvegardée au chargement
window.addEventListener('load', function() {
  const savedLang = localStorage.getItem('selectedLanguage') || 'fr';
  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    langSelect.value = savedLang;
    changeLanguage(savedLang);
  }
  
  // Charger la devise sauvegardée
  const savedCurrency = localStorage.getItem('selectedCurrency') || 'THB';
  const currencySelect = document.getElementById('currencySelect');
  if (currencySelect) {
    currencySelect.value = savedCurrency;
  }
});

// Configuration des devises et taux de change
const currencyRates = {
  THB: { symbol: '฿', rate: 1 },
  USD: { symbol: '$', rate: 0.029 },
  EUR: { symbol: '€', rate: 0.027 },
  CAD: { symbol: 'C$', rate: 0.040 }
};

function changeCurrency(currency) {
  localStorage.setItem('selectedCurrency', currency);
  
  // Mettre à jour tous les prix affichés
  updateAllPrices(currency);
}

function convertPrice(priceInTHB, targetCurrency = null) {
  const currency = targetCurrency || localStorage.getItem('selectedCurrency') || 'THB';
  const rate = currencyRates[currency].rate || 1;
  return priceInTHB * rate;
}

function formatPrice(priceInTHB, currency = null) {
  const curr = currency || localStorage.getItem('selectedCurrency') || 'THB';
  const converted = convertPrice(priceInTHB, curr);
  const currencyInfo = currencyRates[curr];
  
  if (curr === 'THB') {
    return Math.round(converted).toLocaleString('th-TH') + ' ' + currencyInfo.symbol;
  } else {
    return currencyInfo.symbol + ' ' + converted.toFixed(2);
  }
}

function updateAllPrices(currency) {
  const priceElements = document.querySelectorAll('[data-price-thb]');
  priceElements.forEach(element => {
    const priceInTHB = parseFloat(element.getAttribute('data-price-thb'));
    element.textContent = formatPrice(priceInTHB, currency);
  });
}

// Mise en place des interactions du site

document.addEventListener('DOMContentLoaded', function() {
  
  // Animation des boutons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
      this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
      this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseout', function() {
      this.style.boxShadow = 'none';
      this.style.transform = 'translateY(0)';
    });
  });

  // Animation au scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observer les cartes
  document.querySelectorAll('.destination-card, .feature-card, .testimonial-card, .value-card').forEach(el => {
    observer.observe(el);
  });

  // Smooth scroll pour les liens de navigation
  const navLinks = document.querySelectorAll('nav a, .btn');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Permettre la navigation normale pour les .html
      if (this.getAttribute('href').includes('.html')) {
        return;
      }
      
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Vérifier le chargement des images et ajouter une classe
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.classList.add('loaded');
    });
    
    // Fallback pour images déjà en cache
    if (img.complete) {
      img.classList.add('loaded');
    }
  });

  // Animation des compteurs de statistiques
  const animateCounters = function() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(statNum => {
      const finalValue = statNum.textContent;
      const isPercentage = finalValue.includes('%');
      const isPlus = finalValue.includes('+');
      
      let numericValue = parseInt(finalValue);
      
      const animateCount = () => {
        const increment = numericValue / 50;
        let currentValue = 0;
        
        const counter = setInterval(() => {
          currentValue += increment;
          if (currentValue >= numericValue) {
            statNum.textContent = finalValue;
            clearInterval(counter);
          } else {
            statNum.textContent = Math.floor(currentValue) + (isPlus ? '+' : isPercentage ? '%' : '');
          }
        }, 20);
      };
      
      // Observer pour démarrer animation au scroll
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !statNum.classList.contains('animated')) {
            statNum.classList.add('animated');
            animateCount();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(statNum);
    });
  };
  
  animateCounters();

  // Afficher/masquer bouton back to top
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });
    
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // WhatsApp Chat Widget
  createWhatsAppWidget();

  // Afficher un message de bienvenue
  console.log('🌴 Bienvenue sur Thaïlande - Rêves & Évasions!');
  console.log('✈️ Explorez nos destinations magnifiques.');
  console.log('📞 Support: +84 32 751 6422');
});

// Créer le widget WhatsApp
function createWhatsAppWidget() {
  const widget = document.createElement('div');
  widget.id = 'whatsapp-widget';
  widget.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    animation: slideInRight 0.5s ease;
  `;
  
  widget.innerHTML = `
    <a href="https://wa.me/84327516422?text=Bonjour!%20Je%20suis%20intéressé%20par%20vos%20services%20de%20voyage%20en%20Thaïlande" 
       target="_blank" 
       style="
         display: flex;
         align-items: center;
         justify-content: center;
         width: 60px;
         height: 60px;
         background: #25D366;
         border-radius: 50%;
         color: white;
         font-size: 30px;
         box-shadow: 0 4px 12px rgba(0,0,0,0.3);
         transition: all 0.3s ease;
         text-decoration: none;
       "
       onmouseover="this.style.transform='scale(1.1)'; this.style.boxShadow='0 6px 16px rgba(0,0,0,0.4)';"
       onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.3)';"
       title="Contactez-nous sur WhatsApp">
      💬
    </a>
  `;
  
  document.body.appendChild(widget);
}

// Fonction pour la réservation
function reserverVacances() {
  const userConfirm = confirm('Êtes-vous prêt à vivre une aventure inoubliable? Vous serez redirigé vers notre page de réservation.');
  if (userConfirm) {
    window.location.href = 'sejourn-personnalise.html';
  }
}

// Animation fadeInUp pour CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  #backToTop {
    position: fixed;
    bottom: 90px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: #008000;
    color: gold;
    border: 2px solid gold;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 998;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
  }
  
  #backToTop:hover {
    background: gold;
    color: #008000;
    transform: translateY(-5px);
  }
`;
document.head.appendChild(style);


import {translations} from "./translations/index.js";
const topBar = document.getElementById('topBar');
const header = document.getElementById('header');
const links = document.querySelectorAll(".nav-links a");
const menu = document.getElementById("menu");
const nav = document.querySelector(".nav-links");


//menu_burger
menu.addEventListener("click", () => {
    nav.classList.toggle("active");
    menu.classList.toggle("open");
});

//remove nav
links.forEach(link => {
    link.addEventListener("click", function (e) {
        menu.classList.remove("open")
        nav.classList.remove("active");

    })
})
// service-info.js

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.service-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // եթե արդեն բացված է՝ փակում ենք
      if (card.classList.contains('active')) {
        card.classList.remove('active');
        return;
      }

      // փակում ենք մնացածները
      cards.forEach(c => c.classList.remove('active'));

      // բացում ենք ընտրյալը
      card.classList.add('active');
    });
  });
});

// hidden top bar
let lastScrollTop = 0;
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 50) {
        topBar.classList.add('hidden');
        header.classList.add('scrolled');
    } else {
        topBar.classList.remove('hidden');
        header.classList.remove('scrolled');
    }
    lastScrollTop = scrollTop;
});



//change language

let currentLang = 'hy';
document.addEventListener('DOMContentLoaded', function () {
    function changeLanguage(lang) {
        currentLang = lang;
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        const inputs = document.querySelectorAll('input[data-translate], textarea[data-translate]');
        inputs.forEach(input => {
            const key = input.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                input.placeholder = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
        localStorage.setItem('preferredLanguage', lang);
    }
    document.querySelectorAll('.icon_lng img').forEach(function(img) {
        img.addEventListener('click', function () {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });


    const savedLang = localStorage.getItem('preferredLanguage') || "hy";
    if (savedLang) {
        changeLanguage(savedLang);
    }
});

// animation
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const serviceCards = document.querySelectorAll('.service-card');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    const steps = document.querySelectorAll('.step');
    const contactDetails = document.querySelectorAll('.contact-details p');
    const socialLinks = document.querySelector('.social-links');
    const formGroups = document.querySelectorAll('.contact-form input, .contact-form textarea');
    const aboutText = document.querySelector('.about-text');
    const header = document.getElementById('header');
    const topBar = document.getElementById('topBar');


    const homeTitle = document.querySelector('.home-section h1');
    const homeParagraph = document.querySelector('.home-section p');
    const homeButton = document.querySelector('.home-section .btn');
    const sectionTitles = document.querySelectorAll('section h2');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 && rect.bottom >= 0);
    }

    function checkVisibility() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            }
        });


        if (homeTitle && isInViewport(homeTitle)) {
            homeTitle.classList.add('visible');
        }

        if (homeParagraph && isInViewport(homeParagraph)) {
            homeParagraph.classList.add('visible');
        }

        if (homeButton && isInViewport(homeButton)) {
            homeButton.classList.add('visible');
        }


        sectionTitles.forEach(title => {
            if (isInViewport(title)) {
                title.classList.add('visible');
            }
        });

        serviceCards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('visible');
            }
        });

        portfolioCards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('visible');
            }
        });

        steps.forEach(step => {
            if (isInViewport(step)) {
                step.classList.add('visible');
            }
        });

        contactDetails.forEach(detail => {
            if (isInViewport(detail)) {
                detail.classList.add('visible');
            }
        });

        if (socialLinks && isInViewport(socialLinks)) {
            socialLinks.classList.add('visible');
        }

        formGroups.forEach(group => {
            if (isInViewport(group)) {
                group.classList.add('visible');
            }
        });

        if (aboutText && isInViewport(aboutText)) {
            aboutText.classList.add('visible');
        }

        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            topBar.classList.add('hidden');
        } else {
            header.classList.remove('scrolled');
            topBar.classList.remove('hidden');
        }
    }


    if (homeTitle) homeTitle.style.transitionDelay = '0.1s';
    if (homeParagraph) homeParagraph.style.transitionDelay = '0.1s';
    if (homeButton) homeButton.style.transitionDelay = '0.1s';

    sectionTitles.forEach((title, index) => {
        title.style.transitionDelay = `${index * 0.1 + 0.2}s`;
    });

    serviceCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    portfolioCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });

    steps.forEach((step, index) => {
        step.style.transitionDelay = `${index * 0.2}s`;
    });

    contactDetails.forEach((detail, index) => {
        detail.style.transitionDelay = `${index * 0.1}s`;
    });

    formGroups.forEach((group, index) => {
        group.style.transitionDelay = `${index * 0.1}s`;
    });

    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});

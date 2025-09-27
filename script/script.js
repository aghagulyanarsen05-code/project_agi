
const topBar = document.getElementById('topBar');
const header = document.getElementById('header');
const links = document.querySelectorAll(".nav-links a");
const menu = document.getElementById("menu");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
    menu.classList.toggle("open");
});
links.forEach(link => {
    link.addEventListener("click", function (e) {
        menu.classList.remove("open")
        nav.classList.remove("active");

    })
})
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



const translations = {
    hy: {
        // Top Bar
        "phone": "+374 44 466009",

        // Navigation
        "home": "Գլխավոր",
        "services": "Ծառայություններ",
        "portfolio": "Պորտֆոլիո",
        "about": "Մեր մասին",
        "contact": "Կապ մեզ հետ",

        // Home Section
        "welcome": "Բարի գալուստ",
        "newtech": "NewTech",
        "business_page": "բիզնես էջ։",
        "welcome_text": "Մենք այստեղ ենք՝ ներկայացնելու նորարարական լուծումներ տեխնոլոգիաների աշխարհում։",
        "view_projects": "Դիտել նախագծերը",

        // Services Section
        "our_services": "Ծառայություններ",
        "web_development": "Վեբ կայքերի պատրաստում",
        "smm": "Սոցիալ մեդիա մարքեթինգ",
        "crm": "CRM ներդրում",
        "automation": "Բիզնես պրոցեսների ավտոմատացում",
        "ai": "AI ինտեգրում",
        "chatbots": "Չատ բոտերի ստեղծում",

        // Portfolio Section
        "portfolio_title": "Պորտֆոլիո",
        "plushy_gold": "Plushy Gold",
        "project2": "Ararat Construct",
        "project3": "ChatBot",
        "project_desc1": "Plushy Gold — հայկական մորթու և աքսեսուարների տուն, հիմնադրված 2019 թվականին Երևանում Սուսաննա Չելիքյանի կողմից։ Մենք արտադրում ենք վերնաշապիկներ, վեստեր, պարանոցներ, վրաազգեստներ և աքսեսուարներ բնական և էկո-մորթուց, ինչպես նաև կատարում ենք անհատական պատվերներ ատելյեում։ \n",
        "project_desc2": "«Ararat Construct»-ը հանդիսանում է ժամանակակից բնակելի և կոմերցիոն տարածքների նախագծման ու շինարարության ընկերություն։ Այս վեբկայքի միջոցով պոտենցիալ հաճախորդը կարող է տեղեկանալ ընկերության ընթացիկ և ավարտված նախագծերի մասին, ինչպես նաև ծանոթանար ճարտարապետական մոտեցումներին։ Ցանկության դեպքում, հաճախորդները կարող են կայքի միջոցով ուղարկել հարցում՝ սեփական նախագիծը քննարկելու համար։",
        "project_desc3": "«ChatBot»-ը հանդիսանում է բիզնեսի համար նախատեսված հաղորդակցության ավտոմատացման լուծում։ Այս վեբկայքի միջոցով բիզնես ներկայացուցիչները կարող են տեղեկանալ բոտի հնարավորությունների և ինտեգրման դեպքերի մասին։ Ցանկության դեպքում, ընկերությունները կարող են գրանցվել թեստային շրջանի համար կամ կապ հաստատել վաճառքի դեպարտամենտի հետ՝ ավելի մանրամասն քննարկման համար։",
        "view_project": "Դիտել նախագիծը",

        // About Section
        "about_us": "Մեր մասին",
        "about_text": "Մենք մի թիմ ենք, որը հավատում է․ տեխնոլոգիաները պետք է աշխատեն բիզնեսի համար, այլ ոչ թե հակառակը։ Մեր ստարտափը ծնվեց մի պարզ գաղափարից՝ ազատել ընկերություններին ձանձրալի ռուտինայից և տալ նրանց աճելու հնարավորություն։ Մենք չենք խոսում բարդ բառերով։ Մենք պարզապես անում ենք այնպես, որ բիզնեսը ավելին վաստակի և պակաս ծախսի։",
        "step-title1": "Ինչ ենք անում",
        "step-desc1": "Մենք ստեղծում ենք խելացի IT-լուծումներ՝ Գործընթացների ավտոմատացում → երբ Excel-ը մնում է անցյալում։ Չաթ-բոթեր և օգնականներ → որոնք երբեք չեն հոգնում և միշտ պատասխանում են։ CRM ինտեգրացիաներ → բոլոր տվյալները մեկ տեղում։ AI մոդուլներ և վերլուծություն → որովհետև ապագան կառուցվում է թվերի վրա։",
        "step-title2": "Մեր մոտեցումը",
        "step-desc2": " Մենք չենք առաջարկում ստանդարտ «փաթեթներ»։\n" + "                        Մենք ուսումնասիրում ենք ձեր բիզնեսը, գտնում խնդիրները և կառուցում լուծում ձեր չափերին\n" + "                        համապատասխան։\n" + "                        Եվ ամենակարևորը՝ մենք չենք հեռանում ներդրումից հետո։ Մենք միշտ ձեր կողքին ենք՝ ուսուցանելով,\n" + "                        աջակցելով և բարելավելով համակարգերը։",
        "step-title3": "Ովքեր են մեր հաճախորդները",
        "step-desc3": "Մեզ վստահում են փոքր և միջին բիզնեսներ, ստարտափներ, խոշոր ընկերություններ և նույնիսկ միջազգային\n" + "                        հաճախորդներ։\n" + "                        Ինչու՞։ Որովհետև մենք խոսում ենք ոչ միայն կոդի, այլև բիզնեսի լեզվով։",
        "step-title4": "Մեր արդյունքները",
        "step-desc4": " Մենք արդեն ունենք հաջողված պատմություններ․\n" + "                        հաճախորդի հարցումների մշակման ժամանակը կրճատվել է երեք անգամ,\n" + "                        ծախսերը նվազել են,\n" + "                        թիմի արտադրողականությունը բարձրացել է առանց նոր աշխատողների։\n" + "                        Եվ սա միայն սկիզբն է։",
        "step-title5": "Ինչու մենք",
        "step-desc5": " Մենք ստարտափ ենք՝ արագ, ճկուն և սոված արդյունքի։\n" + "                        Մենք անում ենք այնպես, որ տեխնոլոգիաները լինեն գործիք, ոչ թե խնդիր։\n" + "                        Մեր հաջողությունը չափում ենք ձեր աճով ու խնայված ռեսուրսներով։\n" + "                        Մենք չենք ստեղծում միայն ծրագրեր։\n" + "                        Մենք ստեղծում ենք պայմաններ, որտեղ բիզնեսը աշխատում է ավելի խելացի, իսկ մարդիկ ունենում են ավելի\n" + "                        շատ ազատություն։\n" + "                        Եթե ցանկանում եք, որ IT-ն դառնա ձեր առավելությունը և ոչ թե գլխացավանք, ապա դուք ճիշտ տեղում եք։\n" + "                        Մենք պատրաստ ենք լինել ձեր տեխնոլոգիական թիմը։", // Contact Section
        "contact_us": "Կապ մեզ հետ",
        "address": "Նաիրի Զարյան փ․ 74բ, Երևան,Հայաստան",
        "email": "newtecharmenia@gmail.com",
        "work_hours": "Երկ-Ուրբ: 9:00 - 18:00",
        "follow_us": "Հետևեք մեզ",
        "full_name": "Անուն Ազգանուն",
        "email_placeholder": "Էլ․Փոատ",
        "phone_placeholder": "Հեռախոսահամար",
        "message": "Ձեր հաղորդագրությունը",
        "send_message": "Ուղարկել Հաղորդագրություն"
    },

    ru: {
        // Top Bar
        "phone": "+374 44 466009",

        // Navigation
        "home": "Главная",
        "services": "Услуги",
        "portfolio": "Портфолио",
        "about": "О нас",
        "contact": "Контакты",

        // Home Section
        "welcome": "Добро пожаловать на",
        "newtech": "NewTech",
        "business_page": "бизнес-страницу.",
        "welcome_text": "Мы здесь, чтобы представить инновационные решения в мире технологий.",
        "view_projects": "Смотреть проекты",

        // Services Section
        "our_services": "Услуги",
        "web_development": "Создание веб-сайтов",
        "smm": "Маркетинг в социальных сетях",
        "crm": "Внедрение CRM",
        "automation": "Автоматизация бизнес-процессов",
        "ai": "Интеграция ИИ",
        "chatbots": "Создание чат-ботов",

        // Portfolio Section
        "portfolio_title": "Портфолио",
        "plushy_gold": "Plushy Gold",
        "project2": "Ararat Construct",
        "project3": "ChatBot",
        "project_desc1": "Plushy Gold — армянский дом меха и аксессуаров, основанный в 2019 году в Ереване Сусанной Челикян. Мы выпускаем пальто, жилеты, воротники, накидки и аксессуары из натурального и эко-меха, а также выполняем индивидуальные заказы в ателье. Цель бренда — предлагать долговечные, комфортные и визуально лаконичные вещи для городского гардероба. Мы работаем малыми партиями и уделяем внимание посадке и отделке. По запросу доступны капсульные серии и персональные решения.\n" +
            "\n" +
            "Наша цель — развивать армянское производство и с помощью натурального меха подчеркнуть изящество и женственность армянских женщин.",
        "project_desc2": "«Ararat Construct» — это компания по проектированию и строительству современных жилых и коммерческих помещений. С помощью этого веб-сайта потенциальные клиенты могут ознакомиться с текущими и завершёнными проектами компании, а также узнать больше об архитектурных подходах. При желании клиенты могут отправить запрос через сайт, чтобы обсудить свой собственный проект.",
        "project_desc3": "«ChatBot» — это решение для автоматизации коммуникаций, предназначенное для бизнеса. С помощью этого веб-сайта представители компаний могут узнать о возможностях бота и вариантах интеграции. При желании компании могут зарегистрироваться для тестового периода или связаться с отделом продаж для более детального обсуждения.",
        "view_project": "Смотреть проект",

        // About Section
        "about_us": "О нас",
        "about_text": "Мы - команда, которая верит: технологии должны работать на бизнес, а не наоборот. Наш стартап родился из простой идеи: освободить компании от рутинной работы и дать им возможность расти. Мы не используем сложные термины. Мы просто делаем так, чтобы бизнес зарабатывал больше и тратил меньше.",
        "step-title1": "Что мы делаем",
        "step-desc1": "Мы создаём умные IT-решения:\n" + "Автоматизация процессов → когда Excel остаётся в прошлом.\n" + "Чат-боты и ассистенты → которые никогда не устают и всегда отвечают.\n" + "CRM-интеграции → все данные в одном месте.\n" + "AI-модули и аналитика → потому что будущее строится на цифрах.",
        "step-title2": "Наш подход",
        "step-desc2": "Мы не предлагаем стандартные «пакеты».\n" + "Мы изучаем ваш бизнес, выявляем проблемы и создаём решение, соответствующее вашим размерам.\n" + "И самое главное — мы не исчезаем после внедрения. Мы всегда рядом: обучаем, поддерживаем и улучшаем системы.",
        "step-title3": "Кто наши клиенты",
        "step-desc3": "Нам доверяют малый и средний бизнес, стартапы, крупные компании и даже международные клиенты.\n" + "Почему? Потому что мы говорим не только на языке кода, но и на языке бизнеса.",
        "step-title4": "Наши результаты",
        "step-desc4": "У нас уже есть успешные истории:\n" + "Время обработки запросов клиентов сократилось в три раза,\n" + "расходы уменьшились,\n" + "производительность команды выросла без новых сотрудников.\n" + "И это только начало.",
        "step-title5": "Почему мы",
        "step-desc5": "Мы стартап — быстрые, гибкие и голодные до результата.\n" + "Мы делаем так, чтобы технологии были инструментом, а не проблемой.\n" + "Наш успех измеряется вашим ростом и сэкономленными ресурсами.\n" + "Мы создаём не просто программы.\n" + "Мы создаём условия, где бизнес работает умнее, а люди получают больше свободы.\n" + "Если вы хотите, чтобы IT стало вашим преимуществом, а не головной болью, вы в правильном месте.\n" + "Мы готовы стать вашей технологической командой.", // Contact Section
        "contact_us": "Свяжитесь с нами",
        "address": "ул. Наири Заряна 74Б, Ереван, Армения",
        "email": "newtecharmenia@gmail.com",
        "work_hours": "Пн-Пт: 9:00 - 18:00",
        "follow_us": "Подпишитесь на нас",
        "full_name": "Полное имя",
        "email_placeholder": "Email",
        "phone_placeholder": "Телефон",
        "message": "Ваше сообщение",
        "send_message": "Отправить сообщение"
    },

    en: {
        // Top Bar
        "phone": "+374 44 466009",

        // Navigation
        "home": "Home",
        "services": "Services",
        "portfolio": "Portfolio",
        "about": "About Us",
        "contact": "Contact",

        // Home Section
        "welcome": "Welcome to",
        "newtech": "NewTech",
        "business_page": "business page.",
        "welcome_text": "We are here to present innovative solutions in the world of technologies.",
        "view_projects": "View Projects",

        // Services Section
        "our_services": "Services",
        "web_development": "Website Development",
        "smm": "Social Media Marketing",
        "crm": "CRM Implementation",
        "automation": "Business Process Automation",
        "ai": "AI Integration",
        "chatbots": "Chatbot Creation",

        // Portfolio Section
        "portfolio_title": "Portfolio",
        "plushy_gold": "Plushy Gold",
        "project2": "Ararat Construct",
        "project3": "ChatBot",
        "project_desc1": "Plushy Gold is an Armenian fur and accessories house founded in 2019 in Yerevan by Susanna Chelikyan. We produce coats, vests, collars, capes, and accessories from natural and eco-fur, and also fulfill custom orders in our atelier. The brand’s goal is to offer durable, comfortable, and visually minimalist pieces for the urban wardrobe. We work in small batches, paying close attention to fit and finishing. Capsule collections and personalized solutions are available upon request.\n" +
            "\n" +
            "Our mission is to develop Armenian production and, through natural fur, highlight the elegance and femininity of Armenian women.",
        "project_desc2": "“Ararat Construct” is a company specializing in the design and construction of modern residential and commercial spaces. Through this website, potential clients can learn about the company’s ongoing and completed projects, as well as explore its architectural approaches. If desired, clients can submit a request via the website to discuss their own project.",
        "project_desc3": "“ChatBot” is a communication automation solution designed for businesses. Through this website, company representatives can learn about the bot’s capabilities and integration cases. If desired, companies can sign up for a trial period or get in touch with the sales department for a more detailed discussion.",
        "project_desc": "Brief description of the project, technologies used, goals.",
        "view_project": "View Project",

        // About Section
        "about_us": "About Us",
        "about_text": "We are a team that believes: technologies should work for business, not the other way around. Our startup was born from a simple idea: to free companies from boring routine and give them the opportunity to grow. We don't speak in complex terms. We simply make sure that business earns more and spends less.",
        "step-title1": "What are we doing",
        "step-desc1": "We create smart IT solutions:\n" + "Process automation → when Excel is left in the past.\n" + "Chatbots and assistants → that never get tired and always respond.\n" + "CRM integrations → all data in one place.\n" + "AI modules and analytics → because the future is built on numbers.",
        "step-title2": "Our approach",
        "step-desc2": "We don’t offer standard “packages.”\n" + "We study your business, identify problems, and build a solution tailored to your needs.\n" + "And most importantly — we don’t disappear after implementation. We’re always by your side, training, supporting, and improving the systems.",
        "step-title3": "Who are our clients",
        "step-desc3": "We are trusted by small and medium businesses, startups, large companies, and even international clients.\n" + "Why? Because we speak not only the language of code but also the language of business.",
        "step-title4": "Our results",
        "step-desc4": "We already have success stories:\n" + "Customer inquiry processing time has been reduced threefold,\n" + "costs have decreased,\n" + "team productivity has increased without hiring new employees.\n" + "And this is just the beginning.",
        "step-title5": "Why us",
        "step-desc5": "We are a startup — fast, flexible, and hungry for results.\n" + "We make technology a tool, not a problem.\n" + "Our success is measured by your growth and saved resources.\n" + "We don’t just create software.\n" + "We create conditions where businesses work smarter and people have more freedom.\n" + "If you want IT to be your advantage, not a headache, you are in the right place.\n" + "We are ready to be your technology team.", // Contact Section
        "contact_us": "Contact Us",
        "address": "Nairi Zaryan St 74B, Yerevan, Armenia",
        "email": "newtecharmenia@gmail.com",
        "work_hours": "Mon-Fri: 9:00 - 18:00",
        "follow_us": "Follow Us",
        "full_name": "Full Name",
        "email_placeholder": "Email",
        "phone_placeholder": "Phone",
        "message": "Your Message",
        "send_message": "Send Message"
    }
};


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

    changeLanguage("hy")
    document.querySelector('img[alt="armenia"]').addEventListener('click', function () {
        changeLanguage('hy');
    });

    document.querySelector('img[alt="russia"]').addEventListener('click', function () {
        changeLanguage('ru');
    });

    document.querySelector('img[alt="usa"]').addEventListener('click', function () {
        changeLanguage('en');
    });


    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        changeLanguage(savedLang);
    }
});


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


    if (homeTitle) homeTitle.style.transitionDelay = '0.2s';
    if (homeParagraph) homeParagraph.style.transitionDelay = '0.4s';
    if (homeButton) homeButton.style.transitionDelay = '0.6s';

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

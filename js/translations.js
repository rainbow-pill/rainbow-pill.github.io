// Système de traduction Rainbow Pill Collective
let currentLang = 'en';
let translations = {};

async function loadTranslations(lang) {
    try {
        const response = await fetch(`lang/${lang}.json`);
        translations = await response.json();
        applyTranslations();
        currentLang = lang;
        localStorage.setItem('preferred-lang', lang);
        updateLanguageDisplay();
    } catch (error) {
        console.error('Translation error:', error);
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[key];
            } else {
                element.textContent = translations[key];
            }
        }
    });
}

function updateLanguageDisplay() {
    const display = document.getElementById('currentLanguage');
    if (display) {
        display.textContent = currentLang.toUpperCase();
    }
}

function detectBrowserLanguage() {
    const saved = localStorage.getItem('preferred-lang');
    if (saved) return saved;
    
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('fr')) return 'fr';
    if (browserLang.startsWith('de')) return 'de';
    return 'en';
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = detectBrowserLanguage();
    loadTranslations(lang);
    
    const toggle = document.getElementById('languageToggle');
    const options = document.getElementById('languageOptions');
    
    if (toggle && options) {
        toggle.addEventListener('click', () => {
            options.classList.toggle('hidden');
        });
        
        document.addEventListener('click', (e) => {
            if (!toggle.contains(e.target) && !options.contains(e.target)) {
                options.classList.add('hidden');
            }
        });
        
        options.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                loadTranslations(lang);
                options.classList.add('hidden');
            });
        });
    }
});

const i18nTranslation = {
  translations: {
    fr: require('./locale.fr.json'),
    en: require('./locale.en.json'),
  },

  getCurrentLang() {
    return localStorage.getItem('lang') || (window.navigator.userLanguage || window.navigator.language).split('-')[0];
  },

  setLang(lang) {
    if (Object.keys(this.translations).includes(lang)) {
      localStorage.setItem('lang', lang);
    }
    else {
      throw new Error(`Lang ${lang} not supported`);
    }
  }
};

// update html element
document.querySelector('html').setAttribute('lang', i18nTranslation.getCurrentLang());

export default i18nTranslation;
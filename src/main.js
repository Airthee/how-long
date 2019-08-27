import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n';
import i18nTranslations from './i18n-translations';

// Use I18N
Vue.use(VueI18n);

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: i18nTranslations.getCurrentLang(), // set locale
  messages: i18nTranslations.translations, // set locale messages
  fallbackLocale: 'en'
})

Vue.config.productionTip = false

// Vue instance
new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')

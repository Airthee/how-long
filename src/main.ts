import Vue, { PluginObject, VueConstructor } from 'vue';
import App from './App.vue';
import VueI18n from 'vue-i18n';
import Datetime, { VueDateTimeConstructor } from 'vue-datetime';
import i18nTranslations from '@/plugins/translation/i18n-translations';
import Buefy from 'buefy';
import VueRouter from 'vue-router';
import router from './router';
import VueSocialSharing from 'vue-social-sharing';

// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css';

// Use I18N
Vue.use(Datetime as unknown as PluginObject<VueDateTimeConstructor>);
Vue.use(VueI18n);
Vue.use(Buefy);
Vue.use(VueRouter);
Vue.use(VueSocialSharing);

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: i18nTranslations.getCurrentLang(), // set locale
  messages: i18nTranslations.translations, // set locale messages
  fallbackLocale: 'en',
});

Vue.config.productionTip = false;

// Vue instance
new Vue({
  i18n,
  router,
  render: (h) => h(App),
}).$mount('#app');

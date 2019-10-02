import VueRouter from 'vue-router';
import Home from './components/Home';
import FourOhFour from './components/FourOhFour';
import i18nTranslations from '@/plugins/translation/i18n-translations';

const routes = [
  {
    path: '/404',
    component: FourOhFour
  },
  {
    path: '/:lang?',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (typeof to.params.lang !== 'undefined' && i18nTranslations.getCurrentLang() !== to.params.lang) {
        try {
          i18nTranslations.setLang(to.params.lang)
          window.location.reload();
        }
        catch (error) {
          next({path: '/404'});
        }
      }
      next();
    },
    meta: {
      title: app => app.$t('app.title'),
      metaTags: [
        {
          name: 'description',
          content: app => app.$t('app.description')
        },
        {
          property: 'og:description',
          content: app => app.$t('app.description')
        },
        {
          name: 'title',
          content: app => app.$t('app.title')
        },
        {
          property: 'og:title',
          content: app => app.$t('app.title')
        },
        {
          name: 'keywords',
          content: app => app.$t('app.keywords')
        },
        {
          property: 'og:locale',
          content: app => app.$i18n.locale
        }
      ]
    }
  },
  {
    path: '/*',
    component: FourOhFour
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const routeValue = value => {
    switch (typeof value) {
      case 'function':
        return value(router.app);

      default:
        return value;
    }
  };

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = routeValue(nearestWithTitle.meta.title);

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, routeValue(tagDef[key]));
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;
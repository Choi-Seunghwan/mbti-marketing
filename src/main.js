import { createApp } from 'vue';
import App from './App.vue';
import VueGtag from 'vue-gtag';
import router from './router/index.js';
import { createMetaManager, plugin as metaPlugin } from 'vue-meta';

function initSocial() {
  var script = document.createElement('script');
  script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
  script.type = 'text/javascript';
  script.async = false;
  document.head.appendChild(script);
  script.onload = e => {
    Kakao.init(import.meta.env.VITE_KAKAO_KEY);
  };
}

const app = createApp(App);
app.use(router);
app.use(createMetaManager());
app.use(metaPlugin);
app.use(
  VueGtag,
  {
    config: {
      id: import.meta.env.VITE_GA_TRACK,
      send_page_view: false
    }
  },
  router
);

router.isReady().then(() => {
  app.mount('#app');
});

initSocial();

<template>
  <div class="app">
    <Header />
    <div class="contents">
      <MainBanner />
    </div>
    <Footer />
  </div>
</template>

<script>
import MainBanner from '@/components/lol/MainBanner.vue';
import Header from '@/components/lol/Header.vue';
import Footer from '@/components/lol/Footer.vue';

export default {
  name: 'App',
  components: {
    MainBanner,
    Header,
    Footer
  }
};
</script>

<style lang="scss">
@import './assets/scss/base.scss';

.app {
  display: flex;
  justify-content: center;
}

.contents {
  max-width: 480px;
  margin-top: 40px;
}
</style>

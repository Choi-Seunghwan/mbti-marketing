<template>
  <div class="app">
    <FogWrap />
    <Header />
    <div class="contents"><router-view /></div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import FogWrap from '@/components/lol/FogWrap.vue';
import Header from '@/components/lol/Header.vue';
// import Footer from '@/components/lol/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    // Footer,
    FogWrap
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

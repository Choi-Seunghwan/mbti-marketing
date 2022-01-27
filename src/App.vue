<template>
  <div class="app">
    <BackgroundWrap />
    <Header />
    <div class="contents"><router-view /></div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import BackgroundWrap from '@/components/lol/BackgroundWrap.vue';
import Header from '@/components/lol/Header.vue';
// import Footer from '@/components/lol/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    // Footer,
    BackgroundWrap
  }
};
</script>

<style lang="scss">
@import './assets/scss/base.scss';

.app {
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
}

.contents {
  width: 100%;
  margin-top: 40px;
  margin: 40px 20px;
  min-height: 600px;
}
</style>

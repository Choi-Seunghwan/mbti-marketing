<template>
  <div class="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <MainBanner />
  </div>
</template>

<script>
import MainBanner from '@/components/lol/MainBanner.vue';

export default {
  name: 'App',
  components: {
    MainBanner,
  },
};
</script>

<style lang="scss">
@import './assets/scss/base.scss';

.app {
}
</style>
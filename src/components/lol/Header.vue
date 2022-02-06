<template>
  <header :class="{ show: show }" class="header">
    <a class="logo" @click="logoHandler">
      <img class="logo__img" src="/img/poro-cute.png" alt="poro-logo" />
      <span class="logo__text">LoL MBTI</span>
    </a>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    show: true
  }),
  methods: {
    logoHandler() {
      this.$router.push({ name: 'home' });
    },
    scrollEvent() {
      const currentScroll = window.scrollY;

      if (currentScroll <= 15) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollEvent);
  },
  unmounted() {
    window.removeEventListener('scroll', this.scrollEvent);
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.header {
  position: fixed;
  left: 20px;
  top: -30px;
  display: flex;
  z-index: 1;
  transition: top ease-in-out 0.3s;
  pointer-events: none;

  &.show {
    top: 10px;
    pointer-events: unset;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    color: #eee;
    text-decoration: unset;
    cursor: pointer;

    &:visited {
      color: #eee;
    }
    &__img {
      width: 32px;
    }

    &__text {
      font-size: 14px;
      margin-left: 8px;
    }

    @include view-tm {
      &__img {
        width: 26px;
      }
    }
  }
}
</style>

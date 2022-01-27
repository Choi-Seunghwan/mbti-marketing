<template>
  <header class="header">
    <a href="/" class="logo">
      <img class="logo__img" src="@/assets/image/poro-cute.png" alt="poro-logo" />
      <span class="logo__text">LoL MBTI</span>
    </a>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.header {
  position: fixed;
  left: 20px;
  top: 10px;
  display: flex;

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    color: #eee;
    text-decoration: unset;
    &:visited {
      color: #eee;
    }
    &__img {
      width: 32px;
      height: fit-content;
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

<template>
  <footer class="footer">
    <p>개발자 최승환 <a>GitHub</a>, <a>Youtube</a></p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.footer {
  display: none;
  position: fixed;
  bottom: 20px;
  left: 0px;
}
</style>

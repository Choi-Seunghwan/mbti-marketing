<template>
  <h4 class="heading-text"><slot></slot></h4>
</template>

<script>
export default {
  name: 'HeadingText'
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.heading-text {
  font-size: 14px;
  color: #fff;
  width: fit-content;
  border-bottom: solid 3px $primary;
}
</style>

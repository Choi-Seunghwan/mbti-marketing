<template>
  <div class="lol-layout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LolLayout'
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.lol-layout {
  max-width: 430px;
  width: 100%;
  min-height: 604px;
  padding: 14px;
  margin: 0 auto;
  border: 1px solid rgba(#ebebeb, 0.2);
  background-color: rgba(#bbb, 0.2);
  border-radius: 4px;
}
</style>

<template>
  <div class="lol-button">
    <button @click="$emit('click', e)">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'LolButton',
  props: {
    theme: { type: String, default: 'primary' }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.lol-button {
  height: 48px;
  background-color: $primary;
}
</style>

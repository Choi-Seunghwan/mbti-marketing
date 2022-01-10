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
  cursor: pointer;
  height: 48px;
  padding: 6px;
  border: 1px solid #fefefe;

  button {
    color: white;
    background: $primary;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: unset;
  }
}
</style>

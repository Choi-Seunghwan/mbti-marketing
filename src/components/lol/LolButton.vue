<template>
  <div :class="[theme]" class="lol-button border-draw meet">
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
  font-size: 14px;
  cursor: pointer;
  height: 48px;
  padding: 6px;
  border: 1px solid rgba(#fefefe, 0.2);

  button {
    color: white;
    background: $primary;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: unset;
  }

  &.primary {
    button {
      background: $primary;
    }
  }

  &.secondary {
    button {
      background: $secondary;
    }
  }
}
</style>

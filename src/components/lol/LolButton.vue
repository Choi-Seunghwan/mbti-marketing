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
  width: 100%;
  cursor: pointer;
  height: 48px;
  padding: 4px;
  border-radius: 2px;
  border: 1px solid rgba(#fefefe, 0.2);

  button {
    font-size: 15px;
    font-weight: bold;
    color: white;
    background: $primary;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: unset;
    border-radius: 2px;
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

  &.tertiary {
    button {
      background: $tertiary;
    }
  }
}
</style>

<template>
  <button :class="[theme, selected ? 'selected' : '']" class="lol-basic-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'LolBasicButton',
  props: {
    theme: {
      type: String,
      default: 'default'
    },
    selected: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.lol-basic-button {
  width: 100%;
  padding: 4px;
  border-radius: 2px;
  font-size: 16px;
  color: #fff;
  background: rgba(#fff, 0.1);
  border: solid 1px #aaa;
  cursor: pointer;
  backdrop-filter: blur(4px);

  &:hover {
    background: rgba(#eee, 0.2);
    border: solid 1px #fff;
  }

  &.selected {
    background: rgba(#eee, 0.4);
    border: solid 1px #fff;
  }

  &.default {
  }

  &.dark {
  }
}
</style>

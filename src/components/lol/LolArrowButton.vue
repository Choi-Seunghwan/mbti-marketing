<template>
  <button :class="[direction, disabled ? 'disabled' : '']" class="lol-arrow-button">
    <ArrowSvg class="arrow" />
  </button>
</template>

<script>
import ArrowSvg from '@/components/common/ArrowSvg.vue';

export default {
  name: 'LolArrowButton',
  components: { ArrowSvg },
  props: {
    direction: {
      type: String,
      default: 'left'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.lol-arrow-button {
  width: 40px;
  height: 32px;
  background-color: unset;
  border: solid 1px #0bc6e3;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background: rgba(#fff, 0.2);
  }

  &.left {
    .arrow {
      transform: rotate(180deg);
    }
  }

  .arrow {
    width: 16px;
  }

  &.disabled {
    cursor: not-allowed;
    .arrow {
      opacity: 0.2;
    }
    &:hover {
    }
  }
}
</style>

<template>
  <div class="lol-progress-bar">
    <div :style="{ width: `${_width}%` }" class="progress"></div>
  </div>
</template>

<script>
export default {
  name: 'LolProgressBar',
  props: {
    minStep: { type: Number, default: 0 },
    maxStep: { type: Number, default: 10 },
    step: { type: Number, default: 0 }
  },
  computed: {
    _width() {
      return (this.step / this.maxStep) * 100;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.lol-progress-bar {
  width: 100%;
  height: 6px;
  position: relative;
  background: #aaa;
  border-radius: 6px;

  .progress {
    position: absolute;
    background: #0bc6e3;
    left: 0;
    top: 0;
    height: 6px;
    border-radius: 6px;
    transition: width ease-in-out 0.3s;
  }
}
</style>

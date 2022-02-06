<template>
  <div :class="{ show: show }" class="alarm-bar">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'AlarmBar',
  data: () => ({
    text: 'alarm',
    show: false
  }),
  methods: {
    showAlarm(text) {
      this.text = text;
      this.show = true;

      setTimeout(() => {
        this.show = false;
      }, 800);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.alarm-bar {
  position: fixed;
  bottom: -40px;
  left: 0px;
  width: 100%;
  height: 40px;
  background: rgba($tertiary, 0.6);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: bottom ease-in-out 0.3s;

  > p {
    font-size: 16px;
  }

  &.show {
    bottom: 0px;
  }
}
</style>

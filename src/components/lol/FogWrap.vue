<template>
  <div class="fog-wrap">
    <div id="foglayer_01" class="fog">
      <div class="image01"></div>
      <div class="image02"></div>
    </div>
    <div id="foglayer_02" class="fog">
      <div class="image01"></div>
      <div class="image02"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/fog-animation.scss';
.fog-wrap {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>

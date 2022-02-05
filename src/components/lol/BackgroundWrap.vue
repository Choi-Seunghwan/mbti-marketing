<template>
  <div class="background-wrap">
    <div id="foglayer_01" class="fog">
      <div class="image01"></div>
      <div class="image02"></div>
    </div>
    <div id="foglayer_02" class="fog">
      <div class="image01"></div>
      <div class="image02"></div>
    </div>

    <img class="rift-img" src="/img/rift.png" alt="rift" />
  </div>
</template>

<script>
export default {
  name: 'BackgroundWrap'
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.background-wrap {
  display: flex;
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  justify-content: center;
  align-items: center;

  .rift-img {
    width: 1100px;
    padding-top: 400px;
    height: fit-content;
    display: flex;

    animation-name: rift-float;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    @keyframes rift-float {
      0% {
        transform: translate(0, 0px);
      }
      50% {
        transform: translate(0, 15px);
      }
      100% {
        transform: translate(0, -0px);
      }
    }

    @media (min-width: 0px) and (max-width: 600px) {
      width: 800px;
      align-self: flex-end;
      padding-top: 100px;
    }
  }
}
</style>

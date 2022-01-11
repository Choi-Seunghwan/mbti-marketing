<template>
  <div class="h-scroll">
    <div class="box-wrap">
      <button class="box"></button>
      <button class="box"></button>
      <button class="box"></button>
      <button class="box"></button>
      <button class="box"></button>
      <button class="box"></button>
      <button class="box"></button>
      <button class="box"></button>
      <button class="box"></button>
      <button class="box"></button>
      <button class="box"></button>
      <button class="box"></button>
      <button class="box"></button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.h-scroll {
  overflow-x: auto;

  .box-wrap {
    display: flex;

    .box {
      width: 200px;
      min-width: 200px;
      height: 200px;
    }
  }
}
</style>
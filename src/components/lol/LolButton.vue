<template>
  <div class="lol-button">
    <button @click="$emit('click', e)"></button>
  </div>
</template>

<script>
export default {
  name: 'LolButton'
};
</script>

<style lang="scss" scoped>
.lol-button {
}
</style>
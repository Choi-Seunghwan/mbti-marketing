<template>
  <div class="main-banner">
    <p>{{ parseStr('title') }}</p>
  </div>
</template>

<script>
import { parseStr } from '@/utils/strUtil';

export default {
  mounted() {},
  methods: {
    parseStr
  }
};
</script>

<style lang="scss" scoped>
.main-banner {
}
</style>
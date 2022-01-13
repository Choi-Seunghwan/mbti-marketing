<template>
  <div class="main-banner">
    <div class="title-wrap">
      <h3>{{ parseStr('mainTitle') }}</h3>
      <p>{{ parseStr('mainDescription') }}</p>
    </div>
    <div class="btn-wrap">
      <LolButton>{{ parseStr('startTest') }}</LolButton>
      <LolButton theme="secondary">{{ parseStr('showAllTypes') }}</LolButton>
    </div>
  </div>
</template>

<script>
import { parseStr } from '@/utils';
import LolButton from './LolButton.vue';

export default {
  components: { LolButton },
  mounted() {},
  methods: {
    parseStr
  }
};
</script>

<style lang="scss" scoped>
.main-banner {
  border: 1px solid rgba(#ebebeb, 0.2);
  padding: 14px;

  .btn-wrap {
  }
}
</style>

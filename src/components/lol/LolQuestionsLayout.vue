<template>
  <div class="lol-questions-layout">
    <div class="top-wrap">
      <LolProgressBar v-bind="{ step, maxStep }" />
      <!-- <ArrowSvg /> -->
    </div>
    <div class="question-wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import LolProgressBar from '@/components/lol/LolProgressBar.vue';
import ArrowSvg from '../common/ArrowSvg.vue';

export default {
  name: 'LolQuestionsLayout',
  components: { LolProgressBar, ArrowSvg },
  props: {
    step: { type: Number, default: 0 },
    maxStep: { type: Number, default: 0 }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.lol-questions-layout {
  .top-wrap {
    margin-bottom: 20px;
  }
}
</style>

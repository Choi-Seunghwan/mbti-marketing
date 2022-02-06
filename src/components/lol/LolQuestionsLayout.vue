<template>
  <div class="lol-questions-layout">
    <div class="top-wrap">
      <div class="btn-wrap">
        <LolArrowButton :disabled="!isActivatedPrevBtn" direction="left" @click="prevBtnHandler" />
        <!-- <img class="progress-poro" src="/img/progress-poro.gif" /> -->
        <div class="step">
          <span>{{ step }}/{{ maxStep }}</span>
        </div>
        <LolArrowButton :disabled="!isActivatedNextBtn" direction="right" @click="nextBtnHandler" />
      </div>
      <LolProgressBar v-bind="{ step, maxStep }" />
    </div>
    <div class="question-wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import LolProgressBar from '@/components/lol/LolProgressBar.vue';
import ArrowSvg from '../common/ArrowSvg.vue';
import LolArrowButton from './LolArrowButton.vue';

export default {
  name: 'LolQuestionsLayout',
  components: { LolProgressBar, ArrowSvg, LolArrowButton },
  props: {
    step: { type: Number, default: 0 },
    maxStep: { type: Number, default: 0 },
    answers: { type: Array, default: [] }
  },
  computed: {
    isActivatedNextBtn() {
      return this.step !== this.maxStep && this.answers?.length >= this.step;
    },
    isActivatedPrevBtn() {
      return this.step > 1;
    }
  },
  methods: {
    prevBtnHandler() {
      if (this.isActivatedPrevBtn) this.$emit('prevStep');
    },
    nextBtnHandler() {
      if (this.isActivatedNextBtn) this.$emit('nextStep');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.lol-questions-layout {
  .top-wrap {
    margin-bottom: 20px;
  }
  .btn-wrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .step {
    font-size: 12px;
    color: #aaa;
    align-self: center;
  }
}
</style>

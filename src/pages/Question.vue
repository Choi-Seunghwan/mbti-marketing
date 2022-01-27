<template>
  <LolLayout class="question">
    <LolQuestionsLayout v-bind="{ step, maxStep }">
      <div v-show="q.id === step" v-for="(q, qIdx) in questions" class="question-item" :key="qIdx">
        <div class="question-title">
          <p class="question-title__text">
            {{ q.question }}
          </p>
        </div>
        <div class="answers">
          <div v-for="(answer, aIdx) in q.answers" :key="aIdx" class="answer-item">
            <p class="answer-item__text">
              {{ answer.text }}
            </p>
          </div>
        </div>
      </div>
    </LolQuestionsLayout>
  </LolLayout>
</template>

<script>
import LolLayout from '@/components/lol/LolLayout.vue';
import LolQuestionsLayout from '@/components/lol/LolQuestionsLayout.vue';
import { getLolQuestions } from '@/utils';

export default {
  name: 'Question',
  components: { LolLayout, LolQuestionsLayout },
  data: () => ({
    step: 1,
    questions: []
  }),
  computed: {
    _questions() {
      return /** @return {questions} */ this.questions;
    },
    currentQuestion() {
      return '';
    },
    maxStep() {
      return 10;
    }
  },
  methods: {
    getLolQuestions
  },
  mounted() {
    this.questions = this.getLolQuestions();
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.question {
  .question-item {
    .question-title {
      width: 100%;

      &__text {
        font-size: 18px;
      }
    }

    .answers {
      margin-top: 40px;
    }
  }
}
</style>

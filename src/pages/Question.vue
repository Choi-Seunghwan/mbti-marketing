<template>
  <LolLayout class="question">
    <LolQuestionsLayout v-bind="{ step, maxStep, questions, answers }" @prevStep="goPrevStep" @nextStep="goNextStep">
      <div v-show="q.id === step" v-for="(q, qIdx) in questions" class="question-item" :key="qIdx">
        <div class="question-title">
          <pre class="question-title__text">
            {{ q.question }}
          </pre>
        </div>
        <hr class="divider" />
        <div class="answers">
          <div
            v-for="(answer, aIdx) in q.answers"
            :key="aIdx"
            class="answer-item"
            @click="answerItemHandler(answer, step)"
          >
            <LolBasicButton>
              <pre class="answer-item__text">
                {{ answer.text }}
              </pre>
            </LolBasicButton>
          </div>
        </div>
      </div>
    </LolQuestionsLayout>
  </LolLayout>
</template>

<script>
import LolLayout from '@/components/lol/LolLayout.vue';
import LolQuestionsLayout from '@/components/lol/LolQuestionsLayout.vue';
import { getLolQuestions, calculateAnswer } from '@/utils';
import LolBasicButton from '@/components/lol/LolBasicButton.vue';

export default {
  name: 'Question',
  components: { LolLayout, LolQuestionsLayout, LolBasicButton },
  data: () => ({
    step: 1, // non zero index, start 1
    questions: [],
    answers: []
  }),
  computed: {
    _questions() {
      return this.questions;
    },
    currentQuestion() {
      return '';
    },
    maxStep() {
      return this.questions?.length;
    }
  },
  methods: {
    getLolQuestions,
    calculateAnswer,
    _calculateAnswer() {
      const resultStr = this.calculateAnswer(this.answer, this.questions);
    },
    goPrevStep() {
      this.step -= 1;
    },
    goNextStep() {
      this.step += 1;
    },
    answerItemHandler(item, step) {
      const newAnswer = { ...item, step };
      const prevAnswerIndex = this.answers?.findIndex(answer => answer?.step === step);
      if (prevAnswerIndex > -1) this.answers[prevAnswerIndex] = newAnswer;
      else this.answers?.push(newAnswer);

      if (this.step === this.maxStep) {
        this._calculateAnswer();
        return;
      }
      this.step += 1;
    }
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
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      min-height: 88px;
      padding: 8px;
      border-radius: 2px;
      background: rgba(#fff, 0.1);
      border: solid 2px rgb(208, 168, 92);
      backdrop-filter: blur(4px);
      box-shadow: 2px 2px 2px rgba(#aaa, 0.1);

      &__text {
        font-size: 17px;
      }
    }

    .answers {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 40px;

      .answer-item {
        &__text {
          font-size: 16px;
          line-height: 22px;
          padding: 8px;
        }
      }
    }
  }

  .divider {
    margin: 40px 0;
    height: 1px;
    border: unset;
    border-top: solid 1px #fff;
  }
}
</style>

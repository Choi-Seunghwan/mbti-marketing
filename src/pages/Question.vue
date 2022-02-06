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
            <LolBasicButton :class="{ selected: answers?.[qIdx] && answers?.[qIdx]?.id === answer?.id }">
              <pre class="answer-item__text">
                {{ answer.text }}
              </pre>
            </LolBasicButton>
          </div>
        </div>
      </div>
      <div v-if="step === maxStep" class="go-result">
        <hr class="divider" />
        <LolButton @click="resultBtnHandler" :disabled="questions.length !== answers.length">
          {{ parseStr('showResult') }}
        </LolButton>
      </div>
    </LolQuestionsLayout>
    <div v-if="analyze" class="analyze-modal">
      <img src="/img/progress-poro.gif" alt="poro" />
      <p>{{ parseStr('underAnalyze') }}</p>
    </div>
  </LolLayout>
</template>

<script>
import LolLayout from '@/components/lol/LolLayout.vue';
import LolQuestionsLayout from '@/components/lol/LolQuestionsLayout.vue';
import { getLolQuestions, calculateAnswer, parseStr } from '@/utils';
import LolBasicButton from '@/components/lol/LolBasicButton.vue';
import LolButton from '@/components/lol/LolButton.vue';

export default {
  name: 'Question',
  components: { LolLayout, LolQuestionsLayout, LolBasicButton, LolButton },
  data: () => ({
    step: 1, // non zero index, start 1
    questions: [],
    answers: [],
    analyze: false
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
    parseStr,
    getLolQuestions,
    calculateAnswer,
    _calculateAnswer() {
      this.analyze = true;
      const resultStr = this.calculateAnswer(this.answers, this.questions);

      setTimeout(() => {
        this.$router.push({ name: 'result', params: { mbti: resultStr } });
      }, 1000);
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

      if (this.step === this.maxStep) return;
      this.step += 1;
    },
    resultBtnHandler() {
      this._calculateAnswer();
    }
  },
  mounted() {
    this.analyze = false;
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
        font-size: 15px;
      }
    }

    .answers {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 40px;

      .answer-item {
        &__text {
          font-size: 15px;
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

  .go-result {
    .divider {
      margin: 18px 0;
    }
  }

  .analyze-modal {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    background: rgba(#000, 0.8);
    padding: 4px;
    margin: auto;

    > p {
      text-align: center;
    }
    > img {
      width: 160px;
      height: fit-content;
    }
  }
}
</style>

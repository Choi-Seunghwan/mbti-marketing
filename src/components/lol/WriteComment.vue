<template>
  <div class="write-comment">
    <div class="user-holder">
      <input v-model="nameText" @input="nameTextInputHandler" maxlength="10" placeholder="닉네임 (10자)" class="name" />
      <LolBasicButton :theme="'dark'" @click="submitHandler" class="submit-btn"><span>작성하기</span></LolBasicButton>
    </div>
    <div class="content-wrap">
      <p class="counter">{{ contentText.length }} / 200 자</p>
      <textarea
        v-model="contentText"
        maxlength="200"
        @input="contentInputHandler"
        class="content"
        placeholder="내 MBTI 분석 결과를 사람들과 공유해 보아요~ (최대 200자)"
      />
    </div>
  </div>
</template>

<script>
import LolBasicButton from './LolBasicButton.vue';
export default {
  name: 'WriteComment',
  components: { LolBasicButton },
  data: () => ({
    nameText: '',
    contentText: ''
  }),
  methods: {
    nameTextInputHandler(e) {
      this.nameText = e.target.value;
    },
    contentInputHandler(e) {
      this.contentText = e.target.value;
    },
    submitHandler() {
      if (!this.nameText.length && !this.contentText.length) return;
      this.$emit('write', { name: this.nameText, content: this.contentText });
      this.contentText = '';
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.write-comment {
  .user-holder {
    display: flex;
    gap: 8px;
  }
  .name {
    width: 100px;
  }

  .submit-btn {
    width: 80px;
    margin-left: auto;
    border: solid 1px #888;
    > span {
      font-size: 13px;
    }
  }

  .content-wrap {
    width: 100%;
    min-height: 80px;
    height: 80px;
    position: relative;
    margin-top: 4px;
    background: rgba(#fff, 0.2);
    border-bottom: solid 1px #ccc;
  }
  .content {
    width: 100%;
    height: 66px;
    background: unset;
    border: unset;
  }

  .counter {
    font-size: 8px;
    color: #333;
    position: absolute;
    bottom: 0px;
    right: 8px;
  }
}
</style>

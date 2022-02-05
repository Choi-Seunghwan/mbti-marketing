<template>
  <div class="write-comment">
    <div class="user-holder">
      <input @input="nameTextInputHandler" maxlength="10" placeholder="닉네임 (10자)" class="name" />
      <LolBasicButton :theme="'dark'" @click="submitHandler" class="submit-btn"><span>작성하기</span></LolBasicButton>
    </div>
    <div class="content-wrap">
      <p class="counter">{{ contentText.length }} / 200 자</p>
      <textarea
        maxlength="200"
        @input="contentInputHandler"
        class="content"
        placeholder="매너 부탁드립니다 ^.~ (최대 200자)"
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
      this.$emit('write', { name: this.nameText, content: this.contentText });
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
    border: solid 1px #888;
  }
  .password {
    width: 102px;
    border: solid 1px #888;
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
    border: solid 1px #888;
    margin-top: 4px;
    background: rgba(#fff, 0.6);
  }
  .content {
    width: 100%;
    height: 66px;
    background: unset;
  }

  .counter {
    font-size: 8px;
    color: #888;
    position: absolute;
    bottom: 0px;
    right: 8px;
  }
}
</style>

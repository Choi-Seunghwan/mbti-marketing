<template>
  <LolLayout class="home">
    <div class="title-wrap">
      <h3>
        <em>{{ parseStr('lol') }}</em>
        {{ parseStr('mainTitle') }}
      </h3>
      <p>{{ parseStr('mainDescription1') }}</p>
      <p>{{ parseStr('mainDescription2') }}</p>
    </div>
    <div class="poro-wrap">
      <img src="@/assets/image/poro.gif" alt="poro" />
    </div>
    <div class="btn-wrap">
      <LolButton class="btn">{{ parseStr('startTest') }}</LolButton>
      <LolButton class="btn" theme="secondary">{{ parseStr('showAllTypes') }}</LolButton>
      <hr />
      <span>{{ parseStr('learnGame') }}</span>
      <LolButton @click="linkHandler" class="btn" theme="tertiary">{{ parseStr('coachLearnGame') }}</LolButton>
    </div>
  </LolLayout>
</template>

<script>
import { parseStr } from '@/utils';
import LolButton from '@/components/lol/LolButton.vue';
import LolLayout from '@/components/lol/LolLayout.vue';

export default {
  components: { LolButton, LolLayout },
  mounted() {},
  methods: {
    parseStr,
    linkHandler() {
      window.open('https://co.lvup.gg/?utm_source=sh_toy&utm_medium=webapp&utm_campaign=lolmbti', '_blank');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.home {
  padding: 0 20px;
  .poro-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0px;
    > img {
      width: 120px;
    }
  }

  .title-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > h3 {
      font-size: 20px;
      > em {
        font-style: normal;
        font-size: 26px;
      }
    }
  }

  .btn-wrap {
    widows: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;

    > hr {
      width: 100%;
      height: 1px;
      margin: 40px 0 20px 0;
      border: 1px solid rgba(#fff, 0.6);
      border-top: 0px;
    }

    .btn {
      margin: 0 10px 8px 10px;
    }
    > span {
      font-size: 14px;
      margin-bottom: 4px;
      color: #aaa;
    }
  }
}
</style>

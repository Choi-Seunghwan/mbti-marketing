<template>
  <LolLayout class="home">
    <div class="title-wrap">
      <h3>
        <em>{{ parseStr('lol') }}</em>
        <span>{{ parseStr('mainTitle') }}</span>
      </h3>
      <p>{{ parseStr('mainDescription1') }}</p>
      <p>{{ parseStr('mainDescription2') }}</p>
    </div>
    <div class="poro-wrap">
      <img src="/img/poro.gif" alt="poro" />
    </div>
    <div class="btn-wrap">
      <LolButton @click="startHandler" class="btn">{{ parseStr('startTest') }}</LolButton>
      <LolButton @click="allHandler" class="btn" theme="secondary">{{ parseStr('showAllTypes') }}</LolButton>
      <hr class="divider" />
      <span>{{ parseStr('learnGame') }}</span>
      <LolButton @click="linkHandler" class="btn" theme="tertiary">{{ parseStr('coachLearnGame') }}</LolButton>
    </div>
  </LolLayout>
</template>

<script>
import { parseStr, goMarketingLink } from '@/utils';
import LolButton from '@/components/lol/LolButton.vue';
import LolLayout from '@/components/lol/LolLayout.vue';

export default {
  name: 'Home',
  components: { LolButton, LolLayout },
  methods: {
    parseStr,
    startHandler() {
      this.$router.push({ name: 'question' });
    },
    allHandler() {
      this.$router.push({ name: 'all' });
    },
    linkHandler() {
      this.$gtag.event('click_marketing_link', {
        event_category: 'marketing',
        event_label: 'gameCoach',
        value: 'gameCoach'
      });
      goMarketingLink();
    }
  },
  async mounted() {
    //
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
    margin-top: 30px;

    > h3 {
      display: flex;
      align-items: center;
      font-size: 20px;
      margin-bottom: 30px;
      > em {
        font-style: normal;
        font-size: 26px;
      }
      > span {
        border-bottom: 2px solid $primary;
        margin-left: 4px;
        color: #fff;
      }
    }
    > p {
      font-size: 16px;
    }
  }

  .btn-wrap {
    widows: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;

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
    margin-bottom: 10px;
  }

  @include view-m {
    .title-wrap {
      font-size: 18px;
      > h3 {
        font-size: 18px;
        > em {
          font-size: 24px;
        }
      }
      > p {
        font-size: 14px;
      }
    }
  }
}
</style>

<template>
  <LolLayout class="result">
    <div class="type-info">
      <div class="type-info__nickname-wrap">
        <p class="type-info__text">
          {{ typeStr }}
        </p>
        <h2 class="type-info__nickname">{{ typeNickname }}</h2>
      </div>
      <pre class="type-info__main-desc">{{ typeMainDesc }}</pre>
    </div>
    <!-- <hr class="divider small" /> -->
    <div class="type-champs">
      <HeadingText class="type-champs__text">{{ parseStr('typeChamps') }}</HeadingText>
      <ChampList :champList="typeChampList" />
    </div>
    <hr class="divider" />
    <div class="type-desc">
      <HeadingText class="type-desc__text">{{ parseStr('typeAnalyze') }}</HeadingText>
      <ul class="type-desc__wrap">
        <li class="type-desc__item" v-for="(desc, idx) in typeDescList" :key="idx">- {{ desc }}</li>
      </ul>
    </div>
    <hr class="divider" />
    <LolButton @click="allHandler" class="btn" theme="secondary">{{ parseStr('showAllTypes') }}</LolButton>
    <LolButton @click="linkHandler" class="btn" theme="tertiary">{{ parseStr('coachLearnGame') }}</LolButton>
  </LolLayout>
</template>

<script>
import { useMeta } from 'vue-meta';
import { computed } from 'vue';
import { goMarketingLink, getTypeInfo, parseStr } from '@/utils/index.ts';
import LolLayout from '@/components/lol/LolLayout.vue';
import ChampList from '@/components/lol/ChampList.vue';
import LolButton from '@/components/lol/LolButton.vue';
import HeadingText from '@/components/lol/HeadingText.vue';

export default {
  name: 'Result',
  components: { LolLayout, ChampList, LolButton, HeadingText },
  props: {
    mbti: {
      default: ''
    }
  },
  data: () => ({ typeInfo: {} }),
  computed: {
    typeStr() {
      return this.$route?.params?.mbti;
    },
    typeNickname() {
      return this.typeInfo?.nickname;
    },
    typeMainDesc() {
      return this.typeInfo?.mainDesc;
    },
    typeDescList() {
      return this.typeInfo?.desc;
    },
    typeChampList() {
      return this.typeInfo?.champs;
    }
  },
  methods: {
    parseStr,
    getTypeInfo,
    allHandler() {
      this.$router.push({ name: 'all' });
    },
    linkHandler() {
      this.$gtag.event('click_marketing_link', {
        event_category: 'marketing',
        event_label: 'gameCoach',
        marketing_link: 'gameCoach'
      });
      goMarketingLink();
    },
    _getTypeInfo(type) {
      return this.getTypeInfo(type);
    }
  },
  setup(props) {
    useMeta(computed(() => ({ title: ' | ' + props.mbti })));
  },
  beforeMount() {
    this.typeInfo = this._getTypeInfo(this.typeStr);
  },
  mounted() {
    this.$gtag.screenview({
      app_name: 'mbti',
      screen_name: String(this.mbti)
    });
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.result {
  .type-info {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &__nickname-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 3px solid $secondary;
      margin-bottom: 20px;
    }
    &__text {
      font-size: 28px;
    }
    &__nickname {
      margin-left: 4px;
      font-size: 14px;
      color: #aaa;
    }
    &__main-desc {
      font-style: italic;
      font-size: 14px;
      text-align: center;
    }
  }

  .type-champs {
    margin-top: 42px;

    &__text {
    }
  }

  .type-desc {
    &__text {
    }

    &__wrap {
      display: flex;
      flex-direction: column;
      gap: 8px;
      color: #eee;
      border: 1px solid rgba(#fff, 0.4);
      padding: 8px;
      border-radius: 4px;
      background: rgba(#eee, 0.1);
      backdrop-filter: blur(12px);
    }
    &__item {
      font-size: 14px;
    }
  }

  .divider {
    opacity: 0.8;
    margin: 12px auto;
  }
  .btn {
    margin-bottom: 8px;
  }
}
</style>

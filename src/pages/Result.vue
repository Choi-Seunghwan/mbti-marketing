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
      <h4 class="type-champs__text">나와 성향이 닮은 챔피언</h4>
      <ChampList :champList="typeChampList" />
    </div>
    <hr class="divider" />
    <div class="type-desc">
      <h4 class="type-desc__text">유형 분석</h4>
      <ul class="type-desc__wrap">
        <li class="type-desc__item" v-for="(desc, idx) in typeDescList" :key="idx">- {{ desc }}</li>
      </ul>
    </div>
  </LolLayout>
</template>

<script>
import { getTypeInfo } from '@/utils/index.ts';
import LolLayout from '@/components/lol/LolLayout.vue';
import ChampList from '@/components/lol/ChampList.vue';

export default {
  name: 'Result',
  components: { LolLayout, ChampList },
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
    getTypeInfo,
    _getTypeInfo(type) {
      return this.getTypeInfo(type);
    }
  },
  beforeMount() {
    this.typeInfo = this._getTypeInfo(this.typeStr);
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
      font-size: 14px;
      color: #fff;
      width: fit-content;
      border-bottom: solid 3px $primary;
    }
  }

  .type-desc {
    &__text {
      font-size: 14px;
      color: #fff;
      width: fit-content;
      border-bottom: solid 3px $primary;
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
      backdrop-filter: blur(1px);
    }
    &__item {
      font-size: 14px;
    }
  }

  .divider {
    opacity: 0.8;
    margin: 12px auto;
  }
}
</style>

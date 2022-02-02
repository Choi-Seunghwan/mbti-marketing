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
    <hr class="divider small" />
    <div class="type-champs">
      <div class="champ-item" v-for="(champ, idx) in typeChampList" :key="idx">
        <img class="champ-item__img" :src="champ.img" />
        <div class="champ-item__name">
          <span class="champ-item__name__text">{{ champ.name }}</span>
        </div>
      </div>
    </div>
    <hr class="divider" />
    <div class="type-desc">
      <ul class="type-desc__wrap">
        <li class="type-desc__item" v-for="(desc, idx) in typeDescList" :key="idx">- {{ desc }}</li>
      </ul>
    </div>
  </LolLayout>
</template>

<script>
import { getTypeInfo } from '@/utils/index.ts';
import LolLayout from '@/components/lol/LolLayout.vue';

export default {
  name: 'Result',
  components: { LolLayout },
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
      border-bottom: 1px solid #fff;
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
    display: flex;
    width: 100%;
    padding-bottom: 6px;
    overflow-x: scroll;
    gap: 8px;
    scroll-snap-type: x mandatory;

    .champ-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 180px;
      height: 200px;
      position: relative;
      scroll-snap-align: center;
      scroll-snap-align: center;
      border: 2px solid #68542e;
      border-radius: 8px;

      &__name {
        position: absolute;
        display: flex;
        align-items: center;
        bottom: 4px;
        left: 6px;
        z-index: 1;
        height: 28px;
        background: rgba(0, 102, 128, 0.6);
        width: 164px;
        padding-left: 6px;
        border-radius: 0 0 6px 6px;

        &__text {
          font-size: 14px;
        }
      }
      &__img {
        width: 176px;
        height: 200px;
        object-fit: cover;
        border: 6px solid rgba(#fff, 0);
        border-radius: 12px;
      }
    }
  }

  .type-desc {
    color: #eee;
    border: 1px solid rgba(#fff, 0.4);
    padding: 8px;
    border-radius: 4px;
    background: rgba(#eee, 0.1);
    backdrop-filter: blur(1px);

    &__wrap {
      display: flex;
      flex-direction: column;
      gap: 8px;
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

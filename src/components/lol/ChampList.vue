<template>
  <div class="champ-list">
    <div v-for="(champ, idx) in champList" :class="{ active: selectedIdx === idx }" :key="idx" class="selected-champ">
      <div class="selected-champ__img-wrap">
        <img class="selected-champ__img" :src="getCdnImgUrl(`img/champ/${champ.code}.jpeg`)" />
      </div>
      <div class="selected-champ__name">
        <span class="selected-champ__name__text">{{ champ.name }}</span>
      </div>
    </div>
    <hr class="list-divider" />
    <div class="champ-item-holder">
      <div
        class="champ-item"
        @mouseover="itemHandler(champ, idx)"
        @click="itemHandler(champ, idx)"
        :class="{ active: selectedIdx === idx }"
        v-for="(champ, idx) in champList"
        :key="idx"
      >
        <img class="champ-item__img" :src="getCdnImgUrl(`img/champ-sub/${champ.code}.png`)" />
      </div>
    </div>
  </div>
</template>

<script>
import { getCdnImgUrl } from '@/utils';

export default {
  name: 'ChampList',
  data: () => ({
    // champsScrolled: 0
    selectedIdx: 0
  }),
  props: {
    champList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    selectedChamp() {
      return this.champList[this.selectedIdx];
    },
    selectedChampName() {
      return this.selectedChamp?.name;
    },
    selectedChampCode() {
      return this.selectedChamp?.code;
    }
  },
  methods: {
    getCdnImgUrl,
    // champsScroll() {
    //   const el = this.$el;
    //   const left = el?.scrollLeft;
    //   // el.offsetWidth,
    //   this.champsScrolled = Math.ceil((left + 178 / 2) / 178);
    //   console.log('@@', left, this.champsScrolled, (left + 178 / 2) / 178);
    // }
    itemHandler(champ, idx) {
      this.selectedIdx = idx;
    }
  },
  mounted() {
    // const el = this.$el;
    // el.onscroll = this.champsScroll;
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.champ-list {
  .selected-champ {
    display: flex;
    justify-content: center;
    position: relative;
    height: 0;
    visibility: hidden;

    &__name {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: 8px;
      left: 0px;
      right: 0px;
      margin: 0 auto;
      z-index: 1;
      height: 28px;
      background: rgba(0, 102, 128, 0.9);
      width: 164px;
      padding-left: 6px;
      border-radius: 0 0 6px 6px;

      &__text {
        font-size: 14px;
      }
    }

    &__img-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid rgb(208, 168, 92);
      border-radius: 50%;
      padding: 8px;
    }
    &__img {
      border: solid 1px #fff;
      border-radius: 50%;
      width: 230px;
      height: 0px;
      object-fit: cover;
      opacity: 0.3;
      transition: opacity ease-in-out 0.4s;
    }
    &.active {
      height: fit-content;
      visibility: visible;
      .selected-champ__img {
        height: 230px;
        opacity: 1;
      }
    }
  }

  .list-divider {
    margin-top: 16px;
    border: unset;
    border-top: solid 1px #fff;
    width: 100%;
    opacity: 0.8;
  }

  .champ-item-holder {
    display: flex;
    width: 100%;
    padding-bottom: 6px;
    overflow-x: scroll;
    gap: 8px;
    scroll-snap-type: x mandatory;
  }
  .champ-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    position: relative;
    scroll-snap-align: center;
    scroll-snap-align: center;
    border: 2px solid rgba($tertiary, 0.6);
    border-radius: 8px;
    cursor: pointer;

    &__img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border: 2px solid rgba(#fff, 0);
      border-radius: 8px;
      opacity: 0.8;
      transition: opacity ease-in-out 0.3s;
    }

    &.active {
      // background: red;
      border: 2px solid rgba($tertiary, 1);

      .champ-item__img {
        opacity: 1;
      }
    }
  }
}
</style>

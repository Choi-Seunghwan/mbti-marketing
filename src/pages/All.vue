<template>
  <LolLayout class="all">
    <div class="title">
      <h3 class="title__text">모든 유형 알아보기</h3>
    </div>
    <div class="all-types">
      <div @click="typeHandler(item)" class="type-item" v-for="(item, idx) in types" :key="idx">
        <img class="type-item__img" :src="getSubChampImgSrc(item.champs[0].code)" />
        <div class="type-item__text-wrap">
          <span class="type-item__text">{{ item.type }}</span>
        </div>
      </div>
    </div>
    <hr class="divider" />
    <HeadingText>왁자지껄</HeadingText>
    <div class="comments-wrap">
      <WriteComment @write="writeCommentHandler" />
      <CommentsContainer class="comments-container" />
    </div>
  </LolLayout>
</template>

<script>
import api from '@/api';
import { getAllTypes, getSubChampImgSrc } from '@/utils';
import LolLayout from '@/components/lol/LolLayout.vue';
import WriteComment from '@/components/lol/WriteComment.vue';
import HeadingText from '@/components/lol/HeadingText.vue';
import CommentsContainer from '@/components/lol/CommentContainer.vue';
export default {
  name: 'All',
  components: { LolLayout, WriteComment, HeadingText, CommentsContainer },
  data: () => ({
    types: []
  }),
  computed: {},
  methods: {
    getAllTypes,
    getSubChampImgSrc,
    typeHandler(item) {
      const { type } = item;
      this.$router.push({ name: 'result', params: { mbti: type } });
    },
    async writeCommentHandler(comment) {
      if (!comment.name || !comment.content) return;
      await api.writeComment(comment);
    }
  },
  mounted() {
    this.types = this.getAllTypes();
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.all {
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;

    &__text {
      font-size: 20px;
      border-bottom: solid $secondary 3px;
    }
  }

  .all-types {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .type-item {
      position: relative;
      display: flex;
      flex: 1 0 calc(1 / 4);
      max-width: 25%;

      width: 72px;
      height: 72px;
      border: 2px solid rgba($tertiary, 0.4);
      border-radius: 8px;
      cursor: pointer;
      transition: border ease-in-out 0.3s;

      &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border: 1px solid rgba(#fff, 0);
        border-radius: 8px;
      }

      &__text-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 0;
        left: 1px;
        width: calc(100% - 2px);
        height: 20px;
        transition: background-color ease-in-out 0.3s;
        background: rgba($quaternary, 0.6);
        border-radius: 0 0 6px 6px;
      }

      &__text {
        font-size: 16px;
      }

      &:hover {
        border: 2px solid rgba($tertiary, 1);

        .type-item__text-wrap {
          background: rgba($quaternary, 1);
        }
      }
    }
  }

  .comments-wrap {
    background: rgba($white, 0.1);
    min-height: 300px;
    padding: 30px 6px 6px 6px;
    border-radius: 4px;
    backdrop-filter: blur(4px);
    margin-top: 10px;

    .comments-container {
      margin-top: 20px;
    }
  }

  @media (min-width: 0px) and (max-width: 445px) {
    .all-types {
      gap: 6px;
      .type-item {
        width: 64px;
        height: 64px;
      }
    }
  }
}
</style>

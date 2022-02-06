<template>
  <div class="comments-container">
    <div></div>
    <div class="comment-item" v-for="(comment, idx) in comments" :key="idx">
      <div class="comment-item__info">
        <span class="name">
          {{ comment.name }}
        </span>
        <span class="date">
          {{ formatDatetime(comment.createDatetime) }}
        </span>
      </div>
      <div class="comment-item__content">
        <p class="comment-item__content__text">{{ comment.content }}</p>
      </div>
    </div>
    <div class="more-wrap">
      <div v-if="loading" class="loading" />
      <div v-if="hasNext && !loading" @click="getComments" class="more">
        <LolBasicButton>더보기</LolBasicButton>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api';
import { formatDatetime } from '@/utils';
import LolBasicButton from './LolBasicButton.vue';

export default {
  components: { LolBasicButton },
  name: 'CommentContainer',
  data: () => ({
    loading: true,
    comments: [],
    cursor: 0,
    paging: 10,
    hasNext: true
  }),
  methods: {
    formatDatetime,
    async getComments() {
      if (!this.hasNext) return;
      this.loading = true;

      const { cursor, paging } = this;
      const query = { cursor, paging };
      try {
        const r = await api.getComments(query);
        if (r) this.comments = [...this.comments, ...r];
        this.cursor += 1;
        if (r?.length < paging) this.hasNext = false;
        this.loading = false;
      } catch (e) {
        console.log(e);
        this.hasNext = false;
      }
    },
    init() {
      this.comments = [];
      this.hasNext = true;
      this.cursor = 0;
      this.getComments();
    }
  },
  mounted() {
    this.getComments();
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.comments-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  min-height: 100px;

  .comment-item {
    border: unset;
    border-bottom: solid 1px #fff;
    padding-bottom: 4px;
    font-size: 12px;
    margin-bottom: 12px;

    &__info {
      display: flex;
      justify-content: space-between;
      padding-bottom: 4px;

      .name {
        color: #eee;
        margin-right: 4px;
        font-weight: bold;
      }
      .date {
        color: #999;
      }
    }

    &__content {
      &__text {
        color: #eee;
        overflow-wrap: anywhere;
      }
    }
  }

  .more-wrap {
    margin-top: 14px;
    display: flex;
    justify-content: center;
    align-items: center;

    .more {
    }
  }
}
</style>

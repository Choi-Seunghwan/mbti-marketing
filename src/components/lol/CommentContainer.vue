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
    <div v-if="hasNext" @click="getComments" class="more">
      <span>더보기</span>
    </div>
  </div>
</template>

<script>
import api from '@/api';
import { formatDatetime } from '@/utils';

export default {
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
  gap: 8px;
  .comment-item {
    border: unset;
    border-bottom: solid 1px #fff;
    padding-bottom: 4px;
    font-size: 12px;

    &__info {
      display: flex;
      justify-content: space-between;
      .name {
        color: #eee;
        margin-right: 4px;
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

  .more {
  }
}
</style>

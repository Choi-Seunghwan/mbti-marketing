<template>
  <LolLayout class="result">
    <div></div>
  </LolLayout>
</template>

<script>
import LolLayout from '@/components/lol/LolLayout.vue';

export default {
  name: 'Result',
  data: () => ({}),
  computed: {
    mbtiStr() {
      return this.$route?.params?.mbti;
    }
  },
  components: { LolLayout },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.result {
}
</style>

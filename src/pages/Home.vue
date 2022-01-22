<template>
  <div class="home">
    <div class="title-wrap">
      <h3>
        <em>{{ parseStr('lol') }}</em>
        {{ parseStr('mainTitle') }}
      </h3>
      <p>{{ parseStr('mainDescription') }}</p>
    </div>

    <div class="poro-wrap">
      <img src="@/assets/image/poro.gif" alt="poro" />
    </div>

    <div class="btn-wrap">
      <LolButton>{{ parseStr('startTest') }}</LolButton>
      <LolButton theme="secondary">{{ parseStr('showAllTypes') }}</LolButton>
    </div>
  </div>
</template>

<script>
import { parseStr } from '@/utils';
import LolButton from '../components/lol/LolButton.vue';

export default {
  components: { LolButton },
  mounted() {},
  methods: {
    parseStr
  }
};
</script>

<style lang="scss" scoped>
.home {
  border: 1px solid rgba(#ebebeb, 0.2);
  background-color: rgba(#bbb, 0.1);
  border-radius: 4px;
  padding: 14px;
  margin: 20px;

  .poro-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      width: 120px;
    }
  }

  .title-wrap {
    > h3 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      > em {
        font-style: normal;
        font-size: 26px;
      }
    }
  }

  .btn-wrap {
    margin-top: 80px;
  }
}
</style>

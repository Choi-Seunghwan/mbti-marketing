<template>
  <div class="app">
    <BackgroundWrap />
    <Header />
    <div class="app-content">
      <div class="app-content__inner">
        <router-view />
      </div>
    </div>
    <AlarmBar ref="alarm" />
    <Footer />
  </div>
</template>

<script>
import alarm from '@/utils/Alarm.ts';
import BackgroundWrap from '@/components/lol/BackgroundWrap.vue';
import Header from '@/components/lol/Header.vue';
import Footer from '@/components/lol/Footer.vue';
import AlarmBar from '@/components/common/AlarmBar.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    BackgroundWrap,
    AlarmBar
  },
  mounted() {
    this.$nextTick(() => {
      const alarmBarNode = this.$refs.alarm;
      alarm.setAlarmBarNode(alarmBarNode);
    });
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/base.scss';

.app {
  .app-content {
    width: 100%;
    margin-top: 40px;
    min-height: 600px;
    padding-bottom: 50px;
    overflow: hidden;

    &__inner {
      margin: 0 4px;
    }
  }
}
</style>

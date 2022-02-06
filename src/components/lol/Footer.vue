<template>
  <footer class="footer">
    <div class="icons">
      <a @click="linkHandler" target="_blank" class="social-icon-wrap">
        <img class="social-icon link" src="/img/icon/icon-link.png" alt="icon-github" />
      </a>
      <a href="https://www.youtube.com/channel/UCQ_r1-C9izwMI4cs56y4u1w" target="_blank" class="social-icon-wrap">
        <img class="social-icon youtube" src="/img/icon/icon-youtube.png" alt="icon-github" />
      </a>
      <a href="https://github.com/Choi-Seunghwan" target="_blank" class="social-icon-wrap">
        <img class="social-icon" src="/img/icon/icon-github.png" alt="icon-github" />
      </a>
    </div>
    <!-- <p>개발자 최승환 <a>GitHub</a>, <a>Youtube</a></p> -->
  </footer>
</template>

<script>
import { parseStr } from '@/utils';
import alarm from '@/utils/Alarm.ts';

export default {
  name: 'Footer',
  methods: {
    linkHandler() {
      alarm.showAlarm(parseStr('linkCopied'));
      this.urlCopy();
    },
    urlCopy() {
      const el = document.createElement('textarea');
      const url = import.meta.env.VITE_BASE_URL;
      el.value = url;
      document.body.appendChild(el);

      el.select();
      el.setSelectionRange(0, 9999);
      document.execCommand('copy');
      document.body.removeChild(el);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.footer {
  .icons {
    display: flex;
    justify-content: center;
    gap: 12px;
    .social-icon-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0.9;

      background: #eee;
      border-radius: 50%;
      width: 40px;
      height: 40px;

      .social-icon {
        cursor: pointer;
        width: 42px;
        height: 42px;

        &.link {
          width: 24px;
          height: 24px;
        }

        &.youtube {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  margin-bottom: 40px;
}
</style>

<template>
  <footer class="footer">
    <!-- <AdSenseContainer></AdSenseContainer> -->
    <div class="icons">
      <a @click="kakaoShare()" class="social-icon-wrap">
        <img
          class="social-icon"
          src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
        />
      </a>
      <a @click="twitterShare()" class="social-icon-wrap">
        <img class="social-icon" src="/img/icon/icon-twitter.png" />
      </a>
      <a @click="facebookShare()" class="social-icon-wrap">
        <img class="social-icon" src="/img/icon/icon-facebook.png" />
      </a>
      <a @click="linkHandler('link')" target="_blank" class="social-icon-wrap">
        <img class="social-icon link" src="/img/icon/icon-link.png" alt="icon-github" />
      </a>
      <!-- <a
        @click="linkHandler('youtube')"
        href="https://www.youtube.com/channel/UCQ_r1-C9izwMI4cs56y4u1w"
        target="_blank"
        class="social-icon-wrap"
      >
        <img class="social-icon youtube" src="/img/icon/icon-youtube.png" alt="icon-github" />
      </a> -->
      <a
        @click="linkHandler('github')"
        href="https://github.com/Choi-Seunghwan"
        target="_blank"
        class="social-icon-wrap"
      >
        <img class="social-icon" src="/img/icon/icon-github.png" alt="icon-github" />
      </a>
    </div>
    <p>choiseunghwan.tech@gmail.com</p>
  </footer>
</template>

<script>
import { parseStr } from '@/utils';
import alarm from '@/utils/Alarm.ts';
import AdSenseContainer from '@/components/common/AdSenseContainer.vue';

export default {
  name: 'Footer',
  components: { AdSenseContainer },
  methods: {
    linkHandler(type) {
      switch (type) {
        case 'link':
          this.$gtag.event('click_social', {
            event_category: 'social',
            event_label: 'link',
            social_link: 'link'
          });

          alarm.showAlarm(parseStr('linkCopied'));
          this.urlCopy();
          break;
        case 'youtube':
          this.$gtag.event('click_social', {
            event_category: 'social',
            event_label: 'youtube',
            social_link: 'youtube'
          });
          break;
        case 'github':
          this.$gtag.event('click_social', {
            event_category: 'social',
            event_label: 'github',
            social_link: 'github'
          });
          break;
      }
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
    },
    facebookShare() {
      const url = import.meta.env.VITE_BASE_URL;
      window.open('http://www.facebook.com/sharer/sharer.php?u=' + url, '_blank');
    },
    twitterShare() {
      const url = import.meta.env.VITE_BASE_URL;
      const title = '리그 오브 레전드 MBTI 분석';
      window.open('https://twitter.com/intent/tweet?text=' + title + '&url=' + url, '_blank');
    },
    kakaoShare() {
      const url = import.meta.env.VITE_BASE_URL;
      Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '리그 오브 레전드 MBTI 분석',
          description:
            '내 플레이 스타일에 따라 MBTI 성향을 알아 보아요. 롤 MBTI 분석, 리그 오브 레전드 MBTI 분석, #롤 #mbti',
          imageUrl: 'https://cdn.chorong.ch/lol-mbti/img/ogimg.png',
          link: {
            mobileWebUrl: url,
            webUrl: url
          }
        },
        buttons: [
          {
            title: 'MBTI 테스트 하러가기',
            link: {
              mobileWebUrl: url,
              webUrl: url
            }
          }
        ]
      });

      this.$gtag.event('click_social', {
        event_category: 'social',
        event_label: 'link',
        social_link: 'kakao'
      });
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

      background: rgba(#fff, 0.9);
      backdrop-filter: blur(12px);
      border-radius: 50%;
      width: 42px;
      height: 42px;
      transition: background-color ease-in-out 0.2s;

      .social-icon {
        border-radius: 50%;

        cursor: pointer;
        width: 44px;
        height: 44px;

        &.link {
          width: 20px;
          height: 20px;
        }

        &.youtube {
          width: 28px;
          height: 28px;
        }
      }
      &:hover {
        background: rgba(#fff, 0.9);
      }
    }
  }
  margin-bottom: 40px;
  > p {
    font-size: 9px;
    width: fit-content;
    margin: 0 auto;
    color: #bbb;
    margin-top: 12px;
  }
}
</style>

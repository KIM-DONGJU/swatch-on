<template>
  <div class="onboarding-video-container">
    <div class="wrap-onboarding">
      <div class="wrap-onboarding-video">
        <img
          class="youtube-play-button"
          src="@/assets/images/youtube-white-logo-png.png"
        >
        <video
          class="onboarding-video"
          poster="@/assets/images/onboarding-poster.jpg"
          controlslist="nodownload"
          autoplay
          loop
          playsinline
          muted
        >
          <source
            src="@/assets/videos/swatchon_onboarding_teaser.mp4"
            type="video/mp4"
          >
        </video>
      </div>
      <div class="wrap-onboarding-contents">
        <p class="onboarding-contents-title">
          Onboarding Tutorial
        </p>
        <p class="onboarding-contents">
          Check out our short but comprehensive guide to onboard you to SwatchOn. <br>
          Learn how to get the most out of our sourcing platform!
        </p>
      </div>
      <div class="white-triangle"/>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.onboarding-video-container {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;

  .wrap-onboarding {
    position: relative;
    width: 100%;
    max-width: 880px;
    padding: 12px;
    background-color: var(--gs-44);
    color: var(--white);
    display: flex;
    align-items: center;
    gap: 32px;
    overflow: hidden;

    .wrap-onboarding-video {
      position: relative;
      flex: 1;

      .youtube-play-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 64px;
        height: 48px;
        box-shadow: 0 3px 10px rgb(0 0 0 / 28%);
        border-radius: 16px;
        top: 50%;
      }

      .onboarding-video {
        width: 100%;
      }
    }

    .wrap-onboarding-contents {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 16px;

      .onboarding-contents-title {
        font-size: 22px;
        font-weight: 700;
      }

      .onboarding-contents {
        line-height: 24px;
      }
    }

    .white-triangle {
      position: absolute;
      width: 64px;
      height: 64px;
      background: var(--gs-f7);
      transform: rotate(45deg);
      bottom: -32px;
      right: -32px;
    }
  }
}

@media screen and (max-width: 767px) {
  .onboarding-video-container {
    .wrap-onboarding {
      width: calc(100% - 16px);
      margin: 0 auto;
      flex-direction: column;
      gap: 12px;
    }
  }
}

@media screen and (min-width: 1200px) {
  .onboarding-video-container {
    padding: 0 48px;
  }
}

</style>

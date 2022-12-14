<template>
  <div class="trending-on-item-container">
    <img
      class="trending-on-item-image"
      :src="getImageUrl"
      alt="SwatchOn - No. 1 Wholesale fabric platform for Fashion Brands"
    >
    <div class="wrap-trending-on-item-contents">
      <div class="gradient-section">
        <div
          :style="`background-color: ${getBackgroundColor}`"
          class="solid"
        />
        <div
          :style="`background: linear-gradient(to right, ${getBackgroundColor}, transparent)`"
          class="over-wrapping"
        />
      </div>
      <div class="trending-on-item-contents">
        <p class="trending-on-item-header">
          <span class="trending-on-item-subtitle">
            TrendingOn
          </span>
          <span class="trending-on-item-season">
            {{ getSubTitle }} Vol.{{ getSubTitleNumber }}
          </span>
        </p>
        <p class="trending-on-item-title">
          {{ getTitle }}
        </p>
        <div
          class="wrap-trending-on-description"
          v-html="getDescription"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  ComputedRef,
} from 'vue';
import { marketingItemType } from '@/interface/marketingItems';

const props = defineProps<{
  marketingItems: marketingItemType[],
}>();

const getImageUrl: ComputedRef<string> = computed(() => {
  const imageUrl = props.marketingItems[0].images[0].large;

  return imageUrl;
});

const getBackgroundColor: ComputedRef<string> = computed(() => {
  const backgroundColor = props.marketingItems[0].color[0].hex;

  return backgroundColor;
});

const getSubTitle: ComputedRef<string> = computed(() => {
  const { subtitle } = props.marketingItems[0];

  return subtitle;
});

const getSubTitleNumber: ComputedRef<string> = computed(() => {
  const splitSharingKey = props.marketingItems[0].sharingKey.split('-');
  const subtitle = splitSharingKey.pop();

  return subtitle;
});

const getTitle: ComputedRef<string> = computed(() => {
  const { title } = props.marketingItems[0];

  return title;
});

const getDescription: ComputedRef<string> = computed(() => {
  const { description } = props.marketingItems[0];

  return description;
});
</script>

<style lang="scss" scoped>
.trending-on-item-container {
  position: relative;
  width: 100%;
  max-width: 1920px;
  height: 320px;
  margin: 0 auto;
  overflow: hidden;

  .trending-on-item-image {
    width: 100%;
    height: 100%;
    margin-left: calc(var(--width-gradient-section) - var(--width-overwrapping));
    object-fit: cover;
  }

  .wrap-trending-on-item-contents {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12px 16px;

    .gradient-section {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      width: var(--width-gradient-section);

      .solid {
        flex: 1;
        height: 100%;
      }

      .over-wrapping {
        width: var(--width-overwrapping);
        height: 100%;
      }
    }

    .trending-on-item-contents {
      position: relative;
      max-width: calc(var(--width-gradient-section) - var(--width-overwrapping));
      padding-left: var(--padding-gradient-section);
      color: #fff;

      .trending-on-item-header {
        display: flex;
        gap: 20px;
        align-items: center;

        .trending-on-item-subtitle {
          flex: 0 0 auto;
          font-size: 16px;
          font-weight: 700;
        }

        .trending-on-item-season {
          flex: 1 1 auto;
          font-weight: 500;
        }
      }

      .trending-on-item-title {
        margin-top: 8px;
        font-size: 44px;
        font-weight: 700;
        line-height: 1.4;
      }

      .wrap-trending-on-description {
        margin-top: 28px;
        font-size: 18px;
        font-weight: 500;
        line-height: 34px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .trending-on-item-container {
    display: flex;
    flex-direction: column;

    .wrap-trending-on-item-contents {
      top: unset;
      height: 90px;
      padding: 12px 16px;
      background: rgba(0,0,0,.5);

      .gradient-section {
        display: none;
      }

      .trending-on-item-contents {
        .trending-on-item-header {
          .trending-on-item-subtitle {
            font-weight: normal;
          }
          .trending-on-item-season {
            font-size: 15px;
            font-weight: normal;
          }
        }
        .trending-on-item-title {
          font-size: 28px;
        }

        .wrap-trending-on-description {
          display: none;
        }
      }
    }
  }
}

</style>

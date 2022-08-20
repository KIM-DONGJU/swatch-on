<template>
  <div class="trending-on-item-container">
    <div class="wrap-trending-on-item">
      <img
        class="trending-on-item-image"
        :src="marketingItems[0].images[0].large"
        alt="SwatchOn - No. 1 Wholesale fabric platform for Fashion Brands"
      >
      <div class="wrap-trending-on-item-contents">
        <div class="gradient-section">
          <div
            :style="`background-color: ${marketingItems[0].color[0].hex}`"
            class="solid"
          />
          <div
            :style="`background: linear-gradient(to right, ${marketingItems[0].color[0].hex}, transparent)`"
            class="over-wrapping"
          />
        </div>
        <div class="trending-on-item-contents">
          <p class="trending-on-item-header">
            <span class="trending-on-item-subtitle">
              TrendingOn
            </span>
            <span class="trending-on-item-season">
              {{marketingItems[0].subtitle}} Vol.{{getSubTitleNumber}}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { marketingItemType } from '@/interface/marketingItems';
import { ComputedRef } from 'vue';

const props = defineProps<{
  marketingItems: marketingItemType[],
}>();

const getSubTitleNumber: ComputedRef<string> = computed(() => {
  const splitSharingKey = props.marketingItems[0].sharingKey.split('-');
  const subtitle = splitSharingKey.pop();

  return subtitle;
})
</script>

<style lang="scss" scoped>
.trending-on-item-container {
  position: relative;
  width: 100%;
  height: 320px;
  max-width: 1920px;
  margin: 0 auto;
  overflow: hidden;

  .wrap-trending-on-item {
    position: relative;
    width: 100%;
    height: 100%;
    .trending-on-item-image {
      margin-left: calc(var(--width-gradient-section) - var(--width-overwrapping));
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .wrap-trending-on-item-contents {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 12px 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .gradient-section {
        width: var(--width-gradient-section);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;

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
        padding-left: var(--padding-gradient-section);
        max-width: calc(var(--width-gradient-section) - var(--width-overwrapping));
        color: #fff;

        .trending-on-item-header {
          display: flex;
          align-items: center;
          gap: 20px;

          .trending-on-item-subtitle {
            flex: 0 0 auto;
            font-size: 16px;
            font-weight: 700;
          }

          .trending-on-item-season {
            flex: 1 1 auto;
            font-size: 500;
            font-weight: 500;
          }
        }
      }
    }
  }
}

</style>
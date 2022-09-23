<template>
  <div
    class="special-exhibition-item-container"
    :style="{backgroundImage: `url(${images[0]?.large})`}"
  >
    <p class="special-exhibition-item-type">
      Featured Collections
    </p>
    <p class="special-exhibition-item-title">
      {{ title }}
    </p>
    <p class="special-exhibition-item-description">
      {{ description }}
    </p>
    <button class="more-button">
      LEARN MORE
    </button>
  </div>
</template>

<script lang="ts" setup>
import { marketingItemType } from '@/interface/marketingItems';

const props = defineProps<{
  marketingItems: marketingItemType[],
}>();

const {
  title = '',
  images = [],
  description = '',
} = props.marketingItems[0];

</script>

<style lang="scss" scoped>
.special-exhibition-item-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1920px;
  padding: 40px 16px;
  overflow: hidden;
  color: var(--white);
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 10%);
  -webkit-backface-visibility: hidden;

  .special-exhibition-item-type {
    padding: 4px 16px;
    font-size: 14px;
    font-weight: 700;
    color: var(--white);
    letter-spacing: .64px;
    border: 2px solid var(--white);
    border-radius: 24px;
  }

  .special-exhibition-item-title {
    padding-left: 16px;
    margin: 40px 0 16px;
    font-size: 48px;
    font-weight: 700;
  }

  .special-exhibition-item-description {
    padding-left: 16px;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  }

  .more-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 40px;
    margin-top: 24px;
    font-size: 16px;
    font-weight: 700;
    color: var(--gs-44);
    text-align: center;
    text-overflow: ellipsis;
    letter-spacing: .64px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background: var(--white);
    border: none;
    border-radius: 4px;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
    -webkit-tap-highlight-color: rgba(255,255,255,0);
  }
}
</style>

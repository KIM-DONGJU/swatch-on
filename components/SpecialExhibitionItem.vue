<template>
  <div
    class="special-exhibition-item-container"
    :style="{backgroundImage: `url(${getBackgroundImageUrl})`}"
  >
    <p class="special-exhibition-item-type">
      Featured Collections
    </p>
    <p class="special-exhibition-item-title">
      {{ marketingItems[0].title }}
    </p>
    <p class="special-exhibition-item-description">
      {{ marketingItems[0].description }}
    </p>
    <button class="more-button">
      LEARN MORE
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ComputedRef } from 'vue';
import { marketingItemType } from '~~/interface/marketingItems';

const props = defineProps<{
  marketingItems: marketingItemType[],
}>();

const getBackgroundImageUrl: ComputedRef<string> = computed(() => {
  const backgroundImageUrl = props.marketingItems[0].images[0].large;

  return backgroundImageUrl;
});

</script>

<style lang="scss" scoped>
.special-exhibition-item-container {
  position: relative;
  width: 100%;
  max-width: 1920px;
  color: var(--white);
  padding: 40px 16px;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 10%);
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .special-exhibition-item-type {
    font-size: 14px;
    font-weight: 700;
    padding: 4px 16px;
    border-radius: 24px;
    letter-spacing: .64px;
    border: 2px solid var(--white);
    color: var(--white);
  }

  .special-exhibition-item-title {
    font-size: 48px;
    font-weight: 700;
    margin: 40px 0 16px;
    padding-left: 16px;
  }

  .special-exhibition-item-description {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    padding-left: 16px;
  }

  .more-button {
    margin-top: 24px;
    padding: 8px 40px;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--white);
    color: var(--gs-44);
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
    letter-spacing: .64px;
    border-radius: 4px;
    text-overflow: ellipsis;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    text-align: center;
    border: none;
    font-weight: 700;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
  }
}
</style>

<template>
  <div class="eyes-on-six-items-container">
    <EyesOnItem
      v-for="item in marketingItems"
      :key="eyesOnItemKey(item)"
      :eyesOnItem="item"
    />
  </div>
</template>

<script lang="ts" setup>
import { marketingItemType } from '@/interface/marketingItems';

defineProps<{
  marketingItems: marketingItemType[],
}>();

const eyesOnItemKey = (eyesOnItem: marketingItemType): string => {
  const itemId = eyesOnItem.id;
  const eyesOnItemKey = `eyes-on-item-key-${itemId}`;

  return eyesOnItemKey;
};
</script>

<style lang="scss" scoped>
.eyes-on-six-items-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
  column-gap: 8px;
  align-items: center;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
}

@media screen and (min-width: 768px) {
  .eyes-on-six-items-container {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
  }
}

@media screen and (min-width: 1200px) {
  .eyes-on-six-items-container {
    grid-template-columns: repeat(6, 1fr);
  }
}

</style>

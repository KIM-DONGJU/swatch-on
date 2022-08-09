<template>
  <div class="mood-board-three-items-container">
    <MoodBoardItem
      v-for="moodBoardItem in bundleMoodBoardItems"
      :key="getMoodBoardItemKey(moodBoardItem)"
      :moodBoardItemModelImages="getMoodBoardItemModelImagesMaxFour(moodBoardItem)"
    />
  </div>
</template>

<script lang="ts" setup>
import { marketingItemsImageType, marketingItemType } from '@/interface/marketingItems';
import { MoodBoardItem } from '@/components';


const props = defineProps<{
  bundleMoodBoardItems: marketingItemType[],
}>();

const getMoodBoardItemKey = (moodBoardItem: marketingItemType): string => {
  const itemId = moodBoardItem.id;
  const moodBoardItemKey = `marketing-items-key-${itemId}`;

  return moodBoardItemKey
}

const getMoodBoardItemModelImagesMaxFour = (moodBoardItem: marketingItemType): marketingItemsImageType[]  => {
  const moodBoardItemModelImages = moodBoardItem.images || [];
  const isModelImageOverFour = moodBoardItemModelImages.length > 4;

  if (isModelImageOverFour) {
    const moodBoardItemModelImagesMaxFour = moodBoardItemModelImages.slice(0, 4);

    return moodBoardItemModelImagesMaxFour;
  };

  return moodBoardItemModelImages;
}

</script>

<style lang="scss" scoped>
.mood-board-three-items-container {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  align-items: center;
}

@media screen and (min-width: 1200px) {
  .mood-board-three-items-container {
    padding: 0 48px;
  }
}
</style>
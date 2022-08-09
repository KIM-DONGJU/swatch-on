<template>
  <div class="mood-board-item-container">
    <div class="mood-board-item-model-images">
      <div
        class="wrap-model-image"
        v-for="(modelImage, index) in moodBoardItemModelImages"
        :key="index"
      >
        <img
          class="model-image"
          :src="modelImage.large"
          alt="SwatchOn - No. 1 Wholesale fabric platform for Fashion Brands"
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { marketingItemsImageType } from '@/interface/marketingItems';

const props = defineProps<{
  moodBoardItemModelImages: marketingItemsImageType[]
}>();

</script>

<style lang="scss" scoped>
.mood-board-item-container {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 6px rgb(0 0 0 / 10%);
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);

  .mood-board-item-model-images {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    .wrap-model-image {
      flex: 1;
      height: 100%;

      .model-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

}
</style>
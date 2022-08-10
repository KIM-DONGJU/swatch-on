<template>
  <div class="mood-board-item-container">
    <div class="mood-board-item-model-images">
      <div
        class="wrap-model-image"
        v-for="(modelImage, index) in getMoodBoardItemModelImagesMaxFour"
        :key="index"
      >
        <img
          class="model-image"
          :src="modelImage.large"
          alt="SwatchOn - No. 1 Wholesale fabric platform for Fashion Brands"
        >
      </div>
    </div>
    <div class="wrap-mood-board-info">
      <div class="wrap-mood-board-category">
        <p class="mood-board-category">
          Fabric Moodboards
        </p>
        <img
          class="square-icon"
          src="https://d1fnkfov8k8p66.cloudfront.net/images/small/mood_board_swatch.svg"
        />
        <p class="mood-board-product-quantity">
          {{getMoodBoardProductQuantity}} Products
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { marketingItemsImageType, marketingItemType } from '@/interface/marketingItems';
import { ComputedRef } from 'vue';

const props = defineProps<{
  moodBoardItem: marketingItemType
}>();

const getMoodBoardItemModelImagesMaxFour: ComputedRef<marketingItemsImageType[]> = computed(() => {
  const moodBoardItemModelImages = props.moodBoardItem.images || [];
  const isModelImageOverFour = moodBoardItemModelImages.length > 4;

  if (isModelImageOverFour) {
    const moodBoardItemModelImagesMaxFour = moodBoardItemModelImages.slice(0, 4);

    return moodBoardItemModelImagesMaxFour;
  };

  return moodBoardItemModelImages;
});

const getMoodBoardProductQuantity: ComputedRef<number> = computed(() => {
  const moodBoardProductQuantity = props.moodBoardItem.products.length;

  return moodBoardProductQuantity;
})

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
  display: flex;
  flex-direction: column;

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

  .wrap-mood-board-info {
    display: flex;
    flex-direction: column;
    padding: 12px 16px;

    .wrap-mood-board-category {
      display: flex;
      align-items: center;

      .mood-board-category {
        font-size: 16px;
        font-weight: 700;
        color: var(--gs-70);
      }

      .square-icon {
        margin-left: 12px;
      }

      .mood-board-product-quantity {
        margin-left: 8px;
        font-size: 15px;
        color: var(--gs-70);
      }
    }
  }

}
</style>
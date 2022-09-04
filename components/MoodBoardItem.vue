<template>
  <div
    v-once
    class="mood-board-item-container"
  >
    <div class="mood-board-item-model-images">
      <div
        v-for="(modelImage, index) in getMoodBoardItemModelImagesMaxFour"
        :key="getMoodBoardItemModelImageKey(index)"
        class="wrap-model-image"
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
        >
        <p class="mood-board-product-quantity">
          {{ getMoodBoardProductQuantity }} Products
        </p>
      </div>
      <div class="wrap-mood-board-title">
        <p class="mood-board-title">
          {{ moodBoardItem.title }}
        </p>
        <div class="mood-board-color-list">
          <div
            v-for="(color, index) in getMoodBoardColorList"
            :key="getMoodBoardColorKey(index)"
            class="mood-board-color"
            :style="{backgroundColor: color.hex}"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed, ComputedRef,
} from 'vue';
import {
  marketingItemsColorType,
  marketingItemsImageType,
  marketingItemType,
} from '@interface/marketingItems';

const props = defineProps<{
  moodBoardItem: marketingItemType,
}>();

const getMoodBoardItemModelImagesMaxFour: ComputedRef<marketingItemsImageType[]> = computed(() => {
  const moodBoardItemModelImages = props.moodBoardItem.images || [];
  const isModelImageOverFour = moodBoardItemModelImages.length > 4;

  if (isModelImageOverFour) {
    const moodBoardItemModelImagesMaxFour = moodBoardItemModelImages.slice(0, 4);

    return moodBoardItemModelImagesMaxFour;
  }

  return moodBoardItemModelImages;
});

const getMoodBoardItemModelImageKey = (index: number): string => {
  const moodBoardItemModelImageKey = `mood-board-item-model-image-key-${index}`;

  return moodBoardItemModelImageKey;
};

const getMoodBoardProductQuantity: ComputedRef<number> = computed(() => {
  const moodBoardProductQuantity = props.moodBoardItem.products.length;

  return moodBoardProductQuantity;
});

const getMoodBoardColorList: ComputedRef<marketingItemsColorType[]> = computed(() => {
  const moodBoardColorList = props.moodBoardItem.color || [];

  return moodBoardColorList;
});

const getMoodBoardColorKey = (index: number): string => {
  const moodBoardColorKey = `mood-board-color-key-${index}`;

  return moodBoardColorKey;
};

</script>

<style lang="scss" scoped>
.mood-board-item-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 10%);
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;

  .mood-board-item-model-images {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

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

    .wrap-mood-board-title {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .mood-board-title {
        font-size: 28px;
        font-weight: 700;
        color: var(--gs-70);
        letter-spacing: -0.05em;
      }

      .mood-board-color-list {
        display: flex;
        gap: 1px;
        align-items: center;

        .mood-board-color {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .mood-board-item-container {
    .wrap-mood-board-info {
      .wrap-mood-board-category {
        .mood-board-product-quantity {
          font-size: 14px;
        }
      }

      .wrap-mood-board-title {
        .mood-board-title {
          font-size: 20px;
        }
      }
    }
  }
}
</style>

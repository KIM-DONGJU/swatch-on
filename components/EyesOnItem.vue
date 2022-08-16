<template>
  <div class="eyes-on-item-container">
    <div class="wrap-eyes-on-image">
      <img
        class="eyes-on-image"
        :src="getEyesOnImageUrl"
        alt="SwatchOn - No. 1 Wholesale fabric platform for Fashion Brands"
      >
    </div>
    <p class="eyes-on-title">
      {{eyesOnItem.title}}
    </p>
  </div>
</template>
<script lang="ts" setup>
import { marketingItemType } from '@/interface/marketingItems';
import { ComputedRef } from 'vue';

const props = defineProps<{
  eyesOnItem: marketingItemType,
}>();

const getEyesOnImageUrl: ComputedRef<string> = computed(() => {
  const eyesOnItemImage = props.eyesOnItem.images[0]?.medium;

  return eyesOnItemImage;
})

</script>


<style lang="scss" scoped>
.eyes-on-item-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 10%);
  overflow: hidden;

  .wrap-eyes-on-image {
    position: relative;
    padding-top: 100%;
    box-sizing: border-box;

    .eyes-on-image {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .eyes-on-title {
    padding: 16px 20px;
    font-size: 15px;
    font-weight: 600;
  }
}
</style>
<template>
  <div class="type-suggestion-products-container">
    <div
      v-for="product in products"
      :key="`product-key-${product.id}`"
      class="wrap-product-information"
    >
      <div class="wrap-product-image">
        <img
          class="product-image"
          :src="getProductImage(product)"
          alt="SwatchOn - No. 1 Wholesale fabric platform for Fashion Brands"
        >
      </div>
      <div class="product-information">
        <div class="product-price">
          $ {{ getProductSalePrice(product) }}
        </div>
        <div class="wrap-ingredient">
          <p
            v-for="ingredient in getProductQualityContents(product)"
            :key="`ingredient-key-${ingredient.id}`"
            class="ingredient"
          >
            {{ ingredient.abbreviation }}({{ ingredient.ratio }}%)
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  marketingItemsProductType,
  marketingItemsQualityContentsType,
} from '@/interface/marketingItems';

defineProps<{
  products: marketingItemsProductType[],
}>();

const getProductImage = (product: marketingItemsProductType): string => {
  const productImage = product.image.small;

  return productImage;
};

const getProductSalePrice = (product: marketingItemsProductType): number => {
  const productSalePrice = product.quality.price.bulk.salePrice;

  return productSalePrice;
};

const getProductQualityContents = (product: marketingItemsProductType): marketingItemsQualityContentsType[] => {
  const productQualityContents = product.quality?.contents || [];

  return productQualityContents;
};

</script>

<style lang="scss" scoped>
.type-suggestion-products-container {
  flex: 1;
  overflow: auto;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px 16px;
  margin: 0 -16px;

  &::-webkit-scrollbar {
    display: unset;
    height: 8px;
    background: var(--white);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--calm-purple-bg-lv0);
    border-radius: 4px;
  }

  .wrap-product-information {
    width: 204px;
    border-radius: 8px;
    overflow: hidden;
    flex: 0 0 auto;
    background: var(--white);
    display: flex;
    flex-direction: column;
    box-shadow: 0 3px 6px rgb(0 0 0 / 10%);
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);

    .wrap-product-image {
      position: relative;
      padding-top: 150%;

      .product-image {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        object-fit: cover;
      }
    }

    .product-information {
      padding: 8px 12px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 4px;
      .product-price {
        font-size: 17px;
        font-weight: 700;
        color: var(--calm-purple);
        margin-bottom: 4px;
      }

      .wrap-ingredient {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 13px;
        color: var(--gs-66);
      }
    }
  }
}

</style>

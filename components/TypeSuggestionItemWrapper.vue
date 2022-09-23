<template>
  <div class="type-suggestion-wrapper-item-container">
    <div class="wrap-suggestion-information">
      <p class="wrap-type-text">
        Suggestions by type
      </p>
      <div class="wrap-suggestion-title">
        <p class="suggestion-title">
          {{ getProductTitle }}
        </p>
        <img
          class="arrow-image-small"
          src="@/assets/images/icon_right_arrow_108x47.svg"
          alt="Arrow Right"
        >
      </div>
      <p class="suggestion-default-contents">
        Our best selections from the below categories.
      </p>
      <div class="wrap-arrow-image">
        <img
          class="arrow-image"
          src="@/assets/images/icon_right_arrow_108x47.svg"
          alt="Arrow Right"
        >
      </div>
    </div>
    <TypeSuggestionProducts
      :products="getProductsItems"
    />
  </div>
</template>

<script lang="ts"  setup>
import {
  computed, ComputedRef,
} from 'vue';
import {
  marketingItemsProductType,
  marketingItemType,
} from '@/interface/marketingItems';
import { TypeSuggestionProducts } from '@/components';

const props = defineProps<{
  marketingItems: marketingItemType[],
}>();

const getProductsItems = props.marketingItems[0]?.products || [];
const getProductTitle = props.marketingItems[0]?.title;

</script>

<style lang="scss" scoped>
.type-suggestion-wrapper-item-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: flex-start;
  width: 100%;
  max-width: 1920px;
  padding: 16px 0;
  margin: 0 auto;
  overflow: hidden;
  background-image: linear-gradient(280deg,var(--white),var(--gs-f7));
  border-radius: 8px;
  box-shadow: 3px 3px 6px -3px rgba(0,0,0,.1)!important;
  -webkit-backface-visibility: hidden;

  .wrap-suggestion-information {
    display: flex;
    flex: 1 0 0;
    flex-direction: column;
    align-items: flex-start;
    max-width: 424px;
    padding: 0 16px;

    .wrap-type-text {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px 8px;
      font-size: 11px;
      font-weight: 700;
      color: var(--gs-aa);
      letter-spacing: .64px;
      border: 2px solid var(--gs-aa);
      border-radius: 24px;
    }

    .wrap-suggestion-title {
      display: flex;
      gap: 16px;
      align-items: center;
      margin: 12px 0 0 16px;

      .suggestion-title {
        font-size: 24px;
        font-weight: 700;
        color: var(--gs-66);
      }

      .arrow-image-small {
        display: block;
        width: 32px;
        object-fit: contain;
      }
    }

    .suggestion-default-contents {
      margin-top: 12px;
      margin-left: 16px;
      font-size: 14px;
      font-weight: 600;
      color: var(--border-dark);
    }

    .wrap-arrow-image {
      display: none;
      width: 104px;
      margin: 32px 0 0 auto;

      .arrow-image {
        width: 100%;
        object-fit: contain;
      }
    }
  }
}

@media screen  and (min-width: 768px){
  .type-suggestion-wrapper-item-container {
    flex-direction: row;
    align-items: center;

    .wrap-suggestion-information {
      .wrap-type-text {
        padding: 4px 16px;
        font-size: 14px;
      }

      .wrap-suggestion-title {
        .arrow-image-small {
          display: none;
        }
      }

      .suggestion-title {
        margin-top: 24px;
        font-size: 48px;
      }

      .suggestion-default-contents {
        margin-top: 24px;
        font-size: 18px;
      }

      .wrap-arrow-image {
        display: block;
      }
    }
  }
}

</style>

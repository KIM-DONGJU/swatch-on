<template>
  <div class="type-suggestion-wrapper-item-container">
    <div class="wrap-suggestion-information">
      <p class="wrap-type-text">
        Suggestions by type
      </p>
      <p class="suggestion-title">
        {{marketingItems[0].title}}
      </p>
      <p class="suggestion-default-contents">
        Our best selections from the below categories.
      </p>
      <div class="wrap-arrow-image">
        <img
          class="arrow-image"
          src="@/assets/images/icon_right_arrow_108x47.svg"
          alt="Arrow Right"
        />
      </div>
    </div>
    <div class="suggestion-item-list">

    </div>
  </div>
</template>

<script lang="ts"  setup>
import { marketingItemType } from '@/interface/marketingItems';

defineProps<{
  marketingItems: marketingItemType[],
}>();

</script>

<style lang="scss" scoped>
.type-suggestion-wrapper-item-container {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  .wrap-suggestion-information {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .wrap-type-text {
      padding: 4px 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: var(--gs-aa);
      font-weight: 700;
      letter-spacing: .64px;
      border-radius: 24px;
      border: 2px solid var(--gs-aa);
    }

    .suggestion-title {
      color: var(--gs-66);
      font-size: 48px;
      font-weight: 700;
      margin-top: 24px;
      margin-left: 16px;
    }

    .suggestion-default-contents {
      font-size: 18px;
      font-weight: 600;
      color: var(--border-dark);
      margin-top: 24px;
      margin-left: 16px;
    }

    .wrap-arrow-image {
      width: 104px;
      margin: 32px 0 0 auto;

      .arrow-image {
        width: 100%;
        object-fit: contain;
      }
    }
  }
}

</style>
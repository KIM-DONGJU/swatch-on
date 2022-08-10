<template>
  <div class="default-layout-container">
    <HorizontalNavigationBar />
    <div class="wrap-slot">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  HorizontalNavigationBar
} from '@/components';

</script>

<style lang="scss" scoped>
.default-layout-container {
  position: relative;
  height: 100vh;
  background-color: var(--gs-f7);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .wrap-slot {
    flex: 1;
    overflow: auto;
  }
}


</style>
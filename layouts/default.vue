<template>
  <div class="default-layout-container">
    <HorizontalNavigationBar/>
    <div class="wrap-slot">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HorizontalNavigationBar } from '@/components';

</script>

<style lang="scss" scoped>
.default-layout-container {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: var(--gs-f7);

  .wrap-slot {
    flex: 1;
    overflow: auto;
  }
}

</style>

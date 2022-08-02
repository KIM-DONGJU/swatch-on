<template>
  <div class="default-layout-container">
    <HorizontalNavigationBar />
    <slot />
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
}


</style>
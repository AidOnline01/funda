<template>
  <div class="main-layout">
    <LayoutHeader />

    <slot />

    <LayoutFooter class="footer" />
  </div>
</template>

<script lang="ts" setup>
import LayoutHeader from '@/components/layout/LayoutHeader.vue'
import LayoutFooter from '@/components/layout/LayoutFooter.vue'
</script>

<style lang="scss" scoped>
  .main-layout {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .footer {
    margin-top: auto;
  }
</style>

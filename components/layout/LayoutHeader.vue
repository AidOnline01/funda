<template>
  <div class="header">
    <div class="container">
      <router-link class="logo" :to="'/'">
        <img :src="logoSvg" alt="Logo">
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import logoSvg from '@/assets/images/logo.svg?url'
</script>

<style lang="scss" scoped>
  .header {
    background: var(--color-main);
    padding: 10px 0;
  }

  .container {
    display: flex;
  }

  .logo {
    width: 100px;
  }
</style>

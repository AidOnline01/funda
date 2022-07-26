<template>
  <div v-if="mainImage" class="estate-images" data-test-id="wrapper">
    <div class="main-image" data-test-id="main-image">
      <div class="main-image__inner" :style="`background-image: url(${mainImage})`" data-test-id="main-image-inner" />
    </div>

    <div class="images">
      <div class="images__wrapper">
        <div v-for="(image, index) in images" :key="index" :class="`image ${image === mainImage ? 'active' : ''}`" data-test-id="image">
          <div class="image__inner" :style="`background-image: url(${image})`" data-test-id="image-inner" @click="setMainImage(image)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { PropType } from 'vue'
import Estate from '@/types/Estate'

const props = defineProps({
  estate: {
    type: Object as PropType<Estate>,
    required: true
  }
})

const estate = computed(() => props.estate)
const images = computed(() => estate.value.photos)
const mainImage = ref(images.value[0] ? images.value[0] : null)

function setMainImage (image) {
  mainImage.value = image
}
</script>

<style lang="scss" scoped>
  .main-image__inner {
    background-size: cover;
    background-position: center center;
    padding-bottom: 80%;
  }

  .images {
    overflow: hidden;
    margin-top: 10px;
  }

  .images__wrapper {
    display: flex;
    margin: 0 -5px;
    overflow: auto;
  }

  .image {
    width: 100px;
    flex-shrink: 0;
    margin: 0 5px;

    &.active {
      .image__inner {
        border-color: var(--color-main);
      }
    }
  }

  .image__inner {
    padding-bottom: 70%;
    background-size: cover;
    background-position: center center;
    border-radius: 10px;
    border: 3px solid transparent;
  }
</style>

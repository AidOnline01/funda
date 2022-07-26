<template>
  <div class="estate-info">
    <EstateMakler :estate="estate" />
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { computed } from 'vue'
import EstateMakler from './EstateMakler.vue'
import type Estate from '@/types/Estate'

const props = defineProps({
  estate: {
    type: Object as PropType<Estate>,
    required: true
  }
})

const estate = computed(() => props.estate)
</script>

<style lang="scss" scoped>
.estate-info {
  border: 1px solid var(--color-grey-light);
  padding: 10px;
}
</style>

<template>
  <div class="estate-makler">
    <img class="image" src="@/assets/images/makler.png" alt="" data-test-id="image">

    <div class="info">
      <div class="name" data-test-id="name">
        {{ makler.name }}
      </div>

      <div class="phone" data-test-id="phone" @click="showPhone = true">
        <a v-if="showPhone" :href="`tel: +31${makler.phone.replaceAll(' ', '')}`">{{ makler.phone }}</a>
        <span v-else>Show phone number</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { computed, ref } from 'vue'
import type Estate from '@/types/Estate'

const props = defineProps({
  estate: {
    type: Object as PropType<Estate>,
    required: true
  }
})

const showPhone = ref(false)
const makler = computed(() => props.estate.makler)
</script>

<style lang="scss" scoped>
  .estate-makler {
    display: flex;
    align-items: flex-start;
  }

  .image {
    width: 70px;
  }

  .info {
    padding-left: 20px;
  }

  .name {
    font-weight: 700;
    margin-bottom: 10px;
  }

  .phone {
    color: teal;
  }
</style>

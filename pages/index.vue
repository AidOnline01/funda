<template>
  <div class="home">
    <span v-if="loading">Loading...</span>
    <router-link v-else :to="`/estate/${id}`">
      Go to the estate
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { useState } from '#app'
import { onMounted } from 'vue'
import { getModule } from 'vuex-module-decorators'
import { useStore } from 'vuex'
import type { State } from '@/store'
import EstateModule from '@/store/modules/Estate'

const store = useStore<State>()

const estateModule = getModule(EstateModule, store)

const id = useState<string | boolean>('id', () => false)
const loading = useState('loading', () => true)

onMounted(() => loadEstateId())

async function loadEstateId () {
  const estateId = await estateModule.findEstateId()

  loading.value = false
  id.value = estateId
}
</script>

<script lang="ts">
export default {
  name: 'HomePage'
}
</script>

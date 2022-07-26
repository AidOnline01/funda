<template>
  <div class="estate-page">
    <div class="container">
      <div v-if="loading" class="loading" data-test-id="loading">
        Loading...
      </div>

      <div v-else-if="estate" class="estate" data-test-id="estate">
        <EstateImages :estate="estate" />
      </div>

      <div v-else class="not-found" data-test-id="not-found">
        NotFound
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeRouteUpdate, onBeforeRouteLeave, useRoute } from 'vue-router'
import { computed, onMounted, watch, ref } from 'vue'
import { getModule } from 'vuex-module-decorators'
import { useStore } from 'vuex'
import type { State } from '@/store'
import EstateModule from '@/store/modules/Estate'
import Estate from '@/types/Estate'
import EstateImages from '@/components/estate/EstateImages.vue'

const route = useRoute()

const store = useStore<State>()

const estateModule = getModule(EstateModule, store)

const { loadEstate, setEstate } = estateModule

const estate = computed<Estate>(() => estateModule.estate)

onMounted(() => fetchEstate())
watch(() => route.params.id, () => fetchEstate())

onBeforeRouteUpdate(() => clearState())
onBeforeRouteLeave(() => clearState())

const loading = ref(true)
async function fetchEstate () {
  const loadedEstate = await loadEstate(route.params.id as string)

  setEstate(loadedEstate)
  loading.value = false
}

function clearState () {
  loading.value = true
  setEstate(null)
}
</script>

<script lang="ts">
export default {
  name: 'EstatePage'
}
</script>

<style lang="scss" scoped>
.estate {
  padding: 20px 0;
}
</style>

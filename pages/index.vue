<template>
  <div class="home">
    Home
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { getModule } from 'vuex-module-decorators'
import { useStore } from 'vuex'
import EstateModule from '@/store/modules/Estate'

const store = useStore()

const estateModule = getModule(EstateModule, store)

onMounted(() => loadEstateId())

async function loadEstateId () {
  const id = await estateModule.findEstateId()

  console.log(id)
}
</script>

<script lang="ts">
export default {
  name: 'HomePage'
}
</script>

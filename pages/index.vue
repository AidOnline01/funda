<template>
  <div class="home">
    <span v-if="loading" data-test-id="loading" class="loading">
      <div class="container">
        <AlertMessage message="Loading..." type="info" />
      </div>
    </span>

    <router-link v-else :to="`/estate/${id}`" class="estate" data-test-id="estate">
      <span>Go</span>
      <i>→</i>
      <span>To</span>
      <i>→</i>
      <span>The</span>
      <i>→</i>
      <span>Estate</span>
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
import AlertMessage from '@/components/ui/AlertMessage.vue'

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

<style lang="scss" scoped>
  .home {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  @keyframes home-estate-padding-wave {
    from {
      margin: 0px;
      border-radius: 0;
    }
    to {
      margin: 50px;
      border-radius: 30px;
    }
  }

  .estate {
    flex-grow: 1;
    background: var(--color-main-light);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--color-main-dark);
    font-size: 20px;
    text-decoration: none;
    animation-name: home-estate-padding-wave;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;

    i {
      transform: rotate(90deg);
    }

    span {
      display: block;
      margin: 10px 0;
      position: relative;
    }
  }

  .loading {
    padding: 20px 0;
  }

  @media (min-width: 768px) {
    .estate {
      flex-direction: row;
      font-size: 30px;

      i {
        transform: none;
      }

      span {
        margin: 0 10px;
      }
    }
  }
</style>

<script setup lang="ts">
import SeedsList from './UI/SeedsList.vue';

import { usePlayerStore } from '@/stores/PlayerStore';
import { usePlantsStore } from '@/stores/PlantsStore';

const playerStore = usePlayerStore();
const plantsStore = usePlantsStore();

const tab = ref('stock');
</script>

<template>
  <ul
    class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
  >
    <li
      @click="tab = 'stock'"
      class="mr-2 inline-block p-4 text-green-600 rounded-t-lg cursor-pointer"
      :class="{ 'bg-gray-100': tab == 'stock' }"
    >
      Stock
    </li>
    <li
      @click="tab = 'store'"
      class="mr-2 inline-block p-4 text-green-600 rounded-t-lg cursor-pointer"
      :class="{ 'bg-gray-100': tab == 'store' }"
    >
      Store
    </li>
  </ul>

  <SeedsList v-show="tab == 'stock'" :store="playerStore.player.stock" />
  <SeedsList v-show="tab == 'store'" :store="plantsStore.plants.store" />
</template>

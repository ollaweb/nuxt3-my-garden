<script setup lang="ts">
import { usePlayerStore } from '@/stores/PlayerStore';
import SeedsList from './UI/SeedsList.vue';
import { useStockStore } from '@/stores/StockStore';
import { usePlantsStore } from '@/stores/PlantsStore';

const playerStore = usePlayerStore();
const plantsStore = usePlantsStore();
const stockStore = useStockStore();

const tab = ref('stock');
</script>

<template>
  <div
    class="h-full w-full relative overflow-y-auto flex flex-col border border-gray-200 rounded-lg"
  >
    <div class="p-2 profile-info sticky top-0 left-0 z-[2] bg-white pb-2">
      <div class="flex gap-2 justify-between items-center">
        <h2 class="font-medium text-sm lg:text-base">
          <span class="text-green-600">{{ playerStore.player.name }}</span
          >'s garden
        </h2>
        <ProfileCoins />
        <ProfileLevel />
      </div>
      <div>
        <ul
          class="mt-2 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
        >
          <li
            @click="tab = 'stock'"
            class="mr-2 inline-block p-2 lg:p-4 text-green-600 rounded-t-lg cursor-pointer"
            :class="{ 'bg-gray-100': tab == 'stock' }"
          >
            Stock
          </li>
          <li
            @click="tab = 'store'"
            class="mr-2 inline-block p-2 lg:p-4 text-green-600 rounded-t-lg cursor-pointer"
            :class="{ 'bg-gray-100': tab == 'store' }"
          >
            Store
          </li>
        </ul>
      </div>
    </div>
    <div class="profile-controls relative p-2">
      <SeedsList v-show="tab == 'stock'" :tab="tab" :store="stockStore.stock" />
      <SeedsList
        v-show="tab == 'store'"
        :tab="tab"
        :store="plantsStore.plants"
      />
    </div>
  </div>
</template>

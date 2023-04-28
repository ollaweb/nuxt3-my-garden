<script setup lang="ts">
import SeedCard from '@/components/UI/SeedCard.vue';
import { useGrowingPlantStore } from '@/stores/GrowingPlantStore';
import { useStockStore } from '@/stores/StockStore';

const props = defineProps({
  store: {
    type: Object,
    required: true
  },
  tab: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div
    v-if="
      useGrowingPlantStore().growingPlant.stageOfGrowing > 0 && tab == 'stock'
    "
    class="mt-10 flex flex-col items-center gap-2"
  >
    <GrowingInfo />
  </div>
  <div
    v-else-if="useStockStore().stock.length == 0 && tab == 'stock'"
    class="mt-4"
  >
    You don't have any seeds to plant. Please, visit the Store.
  </div>
  <div v-else>
    <div v-for="plantType in props.store" :key="plantType.id">
      <div class="mt-4 pb-2">
        <i class="text-gray-500">{{ plantType.name }}</i>
        <div class="mt-1 grid grid-cols-3 gap-4">
          <SeedCard
            v-for="item in plantType.items"
            :item="item"
            :key="item.id"
            :plant-type-id="plantType.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

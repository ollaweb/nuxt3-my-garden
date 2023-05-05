<script setup>
import GrowingTimer from '@/components/UI/GrowingTimer.vue';
import { useGrowingPlantStore } from '@/stores/GrowingPlantStore';
import { usePlayerStore } from '~/stores/PlayerStore';

const canGetHarvest = ref(false);
const moneyToEarn = useGrowingPlantStore().growingPlant.plant.moneyToEarn;
const levelPoints = 6 * moneyToEarn;

function getHarvest() {
  usePlayerStore().incrementCoins(moneyToEarn);
  usePlayerStore().incrementLevelPoints(levelPoints);
  useGrowingPlantStore().resetStore();
}
</script>

<template>
  <p class="text-sm md:text-base">
    Now
    <span class="text-green-500 font-bold">{{
      useGrowingPlantStore().growingPlant.plant.name
    }}</span>
    is growing.
  </p>
  <p class="text-sm md:text-base">Time till you can get your harvest:</p>
  <GrowingTimer @finish-growing="canGetHarvest = true" />
  <button
    v-if="canGetHarvest"
    @click="getHarvest"
    type="button"
    class="mt-2 md:mt-8 text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-3 md:px-5 md:py-1.5 py-2.5"
  >
    Get Harvest
  </button>
</template>

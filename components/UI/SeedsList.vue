<script setup lang="ts">
import SeedCard from '@/components/UI/SeedCard.vue';
import GrowingTimer from '@/components/UI/GrowingTimer.vue';
import type { SeedingPlant } from '~/types/UI';
import { usePlayerStore } from '@/stores/PlayerStore';

const playerStore = usePlayerStore();

const props = defineProps({
  store: {
    type: Object,
    required: true
  },
  stageOfGrowing: {
    type: Number,
    default: 0
  }
});

let seededPlantName = ref('');

function seedAPlant(payload: SeedingPlant): void {
  seededPlantName.value = playerStore.findPlantById(
    payload.plantTypeId,
    payload.id
  ).name;
}

function updateTimeOfGrowing(newTime: number): void {
  playerStore.updateTimeOfGrowing(newTime);
}
</script>

<template>
  <div v-if="stageOfGrowing > 0" class="mt-10 flex flex-col items-center gap-2">
    <p>
      Now
      <span class="text-green-500 font-bold">{{ seededPlantName }}</span> is
      growing.
    </p>
    <p>Time till you can get your harvest:</p>
    <GrowingTimer
      :time-of-growing="playerStore.player.timeTillHarvest"
      @update-time-of-growing="updateTimeOfGrowing"
    />
  </div>
  <div v-else-if="props.store.length == 0" class="mt-4">
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
            @seed-a-plant="seedAPlant"
          />
        </div>
      </div>
    </div>
  </div>
</template>

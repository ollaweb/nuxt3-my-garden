<script setup lang="ts">
import { usePlayerStore } from '@/stores/PlayerStore';
import SeedCard from './UI/SeedCard.vue';
import { usePlantsStore } from '@/stores/PlantsStore';

const playerStore = usePlayerStore();
const plantsStore = usePlantsStore();

let progress = computed(() => {
  return (
    (
      ((360 / 100) * (playerStore.player.level.levelPoints * 100)) /
      playerStore.player.level.pointsToTheNextLevel
    ).toString() + 'deg'
  );
});
</script>

<template>
  <div class="p-2 h-full flex flex-col gap-4 border border-gray-200 rounded-lg">
    <div
      class="profile-info flex justify-between items-center pb-2 border-b-2 border-gray-100"
    >
      <h2 class="font-medium">
        <span class="text-green-600">{{ playerStore.player.name }}</span
        >'s garden
      </h2>
      <div class="flex items-center gap-2">
        coins
        <div class="flex items-center gap-1">
          {{ playerStore.player.coins }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 fill-green-700"
          >
            <path
              d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z"
            />
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div class="flex items-center gap-2">
        level
        <div
          class="relative level-progress w-8 h-8 rounded-full flex items-center justify-center before:content-[''] before:w-6 before:h-6 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-fuchsia-200"
        >
          <span class="z-[2]">{{ playerStore.player.level.number }}</span>
        </div>
      </div>
    </div>
    <div class="profile-controls">
      <div class="pb-2 border-b-2 border-gray-100">
        <span class="font-medium"> Stock:</span>
        <div class="mt-2" v-for="plantType in playerStore.player.stock">
          <i class="text-gray-500">{{ plantType.name }}</i>
          <div class="mt-1 grid grid-cols-3 gap-4">
            <SeedCard
              :plant-type-id="plantType.id"
              v-for="item in plantType.items"
              :item="item"
            />
          </div>
        </div>
      </div>
      <div class="pb-2 border-b-2 border-gray-100">
        <span class="font-medium"> Store:</span>
        <div
          class="mt-2"
          v-for="plantType in plantsStore.plants.store"
          :key="plantType.id"
        >
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
  </div>
</template>

<style lang="scss">
.level-progress {
  background: conic-gradient(#c026d3 v-bind(progress), #ffffff 0deg);
}
</style>

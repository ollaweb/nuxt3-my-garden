<script setup lang="ts">
import { useGrowingPlantStore } from '@/stores/GrowingPlantStore';

const growingPlantStore = useGrowingPlantStore();
</script>

<template>
  <div class="pot">
    <div v-if="growingPlantStore.growingPlant.stageOfGrowing == 0">
      <svg
        width="117"
        viewBox="0 0 117 143"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-12 md:w-20 lg:w-28"
      >
        <path
          d="M113 120H3C1.34315 120 0 121.343 0 123V140C0 141.657 1.34315 143 3 143H113C114.657 143 116 141.657 116 140V123C116 121.343 114.657 120 113 120Z"
          fill="#451A03"
        />
        <path
          d="M58.29 0H4.1444C2.22692 0 0.801629 1.77418 1.21491 3.64659L26.4806 118.117C26.784 119.491 28.0024 120.47 29.4101 120.47H58.29H87.17C88.5777 120.47 89.7961 119.491 90.0995 118.117L115.365 3.64659C115.778 1.77418 114.353 0 112.436 0H58.29Z"
          fill="#78350F"
        />
        <path
          d="M6.00459 0C7.4102 0 8.62735 0.975932 8.93287 2.34794L32.8272 109.652C33.1327 111.024 34.3499 112 35.7555 112H79.6448C81.0503 112 82.2674 111.024 82.573 109.652L106.477 2.34769C106.783 0.975807 108 0 109.405 0H112.436C114.353 0 115.778 1.77418 115.365 3.64659L90.0995 118.117C89.7961 119.491 88.5777 120.47 87.17 120.47H29.4101C28.0024 120.47 26.784 119.491 26.4806 118.117L1.2149 3.64659C0.801628 1.77418 2.22692 0 4.1444 0H6.00459Z"
          fill="#451A03"
        />
      </svg>
    </div>
    <div
      v-else
      v-html="
        growingPlantStore.growingPlant.plant.images[
          growingPlantStore.growingPlant.stageOfGrowing
        ]
      "
    ></div>
  </div>
</template>

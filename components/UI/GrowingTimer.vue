<script setup lang="ts">
import { timeInSecondsAndMinutes } from '~/helpers/timeInSecondsAndMinutes';
import { useGrowingPlantStore } from '@/stores/GrowingPlantStore';

let currentTime = new Date().getTime();
const computedTimeTillHarvest =
  useGrowingPlantStore().growingPlant.plant.timeOfGrowing + currentTime;
useGrowingPlantStore().updateTimeTillHarvest(computedTimeTillHarvest);

let timeTillHarvest = ref(useGrowingPlantStore().getTimeTillHarvest);

let time = computed(() => {
  return timeInSecondsAndMinutes(timeTillHarvest.value - currentTime);
});

let timerInterval: any;

onMounted(() => {
  timerInterval = setInterval(() => {
    timeTillHarvest.value -= 1000;
    useGrowingPlantStore().updateTimeTillHarvest(timeTillHarvest.value);
  }, 1000);
});

watch(
  () => timeTillHarvest.value,
  (newValue, oldValue) => {
    if (newValue == 0) {
      clearInterval(timerInterval);
    }
  }
);
</script>

<template>
  <div class="flex text-xl font-medium text-green-800">
    <div class="minutes">
      {{ time.minutes }}
    </div>
    :
    <div class="seconds">
      {{ time.seconds }}
    </div>
  </div>
</template>

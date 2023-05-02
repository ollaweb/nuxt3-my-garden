<script setup lang="ts">
import { timeInSecondsAndMinutes } from '~/helpers/timeInSecondsAndMinutes';
import { useGrowingPlantStore } from '@/stores/GrowingPlantStore';

let currentTime = new Date().getTime();
let timeTillHarvest = ref(useGrowingPlantStore().getTimeTillHarvest);

let time = computed(() => {
  return timeInSecondsAndMinutes(timeTillHarvest.value - currentTime);
});

let timerInterval: any;

onMounted(() => {
  if (
    !(
      Math.floor(timeTillHarvest.value / 100) - Math.floor(currentTime / 100) <=
      10
    )
  ) {
    timerInterval = setInterval(() => {
      timeTillHarvest.value -= 1000;
    }, 1000);
  }
});

watch(
  () => timeTillHarvest.value,
  (newValue, oldValue) => {
    if (Math.floor(newValue / 100) - Math.floor(currentTime / 100) <= 10) {
      clearInterval(timerInterval);
    }
  }
);

onBeforeUnmount(() => {
  clearInterval(timerInterval);
});
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

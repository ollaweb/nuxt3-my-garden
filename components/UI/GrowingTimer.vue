<script setup lang="ts">
import { timeInSecondsAndMinutes } from '~/helpers/timeInSecondsAndMinutes';
import { useGrowingPlantStore } from '@/stores/GrowingPlantStore';

let currentTime = ref(new Date().getTime());
let timeTillHarvest = useGrowingPlantStore().getTimeTillHarvest;

let time = computed(() => {
  return timeInSecondsAndMinutes(timeTillHarvest - currentTime.value);
});

let timerInterval: any;

onMounted(() => {
  if (
    !(
      Math.floor(timeTillHarvest / 100) - Math.floor(currentTime.value / 100) <=
      10
    )
  ) {
    timerInterval = setInterval(() => {
      currentTime.value = new Date().getTime();
    }, 1000);
  }
});

watch(
  () => currentTime.value,
  (newValue, oldValue) => {
    if (Math.floor(timeTillHarvest / 100) - Math.floor(newValue / 100) <= 10) {
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

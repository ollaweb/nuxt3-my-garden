<script setup lang="ts">
import { timeInSecondsAndMinutes } from '~/helpers/timeInSecondsAndMinutes';
import { useGrowingPlantStore } from '@/stores/GrowingPlantStore';

let currentTime = ref(new Date().getTime());
let timeTillHarvest = useGrowingPlantStore().getTimeTillHarvest;

let time = computed(() => {
  return timeInSecondsAndMinutes(timeTillHarvest - currentTime.value);
});

let timerInterval: any;

const timeOfGrowing = useGrowingPlantStore().growingPlant.plant.timeOfGrowing;
const onePercentOfTimeOfGrowing = timeOfGrowing / 100;
const timeToSwitchToStage2 = timeOfGrowing - onePercentOfTimeOfGrowing * 10;
const timeToSwitchToStage3 =
  timeToSwitchToStage2 - onePercentOfTimeOfGrowing * 10;
const timeToSwitchToStage4 =
  timeToSwitchToStage3 - onePercentOfTimeOfGrowing * 10;
const timeToSwitchToStage5 =
  timeToSwitchToStage4 - onePercentOfTimeOfGrowing * 15;
const timeToSwitchToStage6 =
  timeToSwitchToStage5 - onePercentOfTimeOfGrowing * 20;
const timeToSwitchToStage7 =
  timeToSwitchToStage6 - onePercentOfTimeOfGrowing * 20;
const timeToSwitchToStage8 =
  timeToSwitchToStage7 - onePercentOfTimeOfGrowing * 10;

const emit = defineEmits(['finishGrowing']);

if (time.value.minutes == '00' && time.value.seconds == '00') {
  emit('finishGrowing');
}

onMounted(() => {
  if (
    !(
      Math.floor(timeTillHarvest / 1000) -
        Math.floor(currentTime.value / 1000) <=
      0
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
    if (Math.floor(timeTillHarvest / 1000) - Math.floor(newValue / 1000) <= 0) {
      clearInterval(timerInterval);
      emit('finishGrowing');
    }
    if (timeTillHarvest - newValue <= timeToSwitchToStage2) {
      useGrowingPlantStore().updateStageOfGrowing(2);
    }
    if (timeTillHarvest - newValue <= timeToSwitchToStage3) {
      useGrowingPlantStore().updateStageOfGrowing(3);
    }
    if (timeTillHarvest - newValue <= timeToSwitchToStage4) {
      useGrowingPlantStore().updateStageOfGrowing(4);
    }
    if (timeTillHarvest - newValue <= timeToSwitchToStage5) {
      useGrowingPlantStore().updateStageOfGrowing(5);
    }
    if (timeTillHarvest - newValue <= timeToSwitchToStage6) {
      useGrowingPlantStore().updateStageOfGrowing(6);
    }
    if (timeTillHarvest - newValue <= timeToSwitchToStage7) {
      useGrowingPlantStore().updateStageOfGrowing(7);
    }
    if (timeTillHarvest - newValue <= timeToSwitchToStage8) {
      useGrowingPlantStore().updateStageOfGrowing(8);
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

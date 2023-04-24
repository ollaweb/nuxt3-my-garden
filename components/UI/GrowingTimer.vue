<script setup lang="ts">
import { timeInSecondsAndMinutes } from '~/helpers/timeInSecondsAndMinutes';

const { timeOfGrowing } = defineProps({
  timeOfGrowing: {
    type: Number,
    required: true
  }
});

let timeTillHarvest = ref(timeOfGrowing);
let time = computed(() => {
  return timeInSecondsAndMinutes(timeTillHarvest.value);
});

const emit = defineEmits(['updateTimeOfGrowing']);

let timerInterval: any;

onMounted(() => {
  timerInterval = setInterval(() => {
    timeTillHarvest.value -= 1000;
    emit('updateTimeOfGrowing', timeTillHarvest.value);
  }, 1000);
});

watch(
  () => timeTillHarvest.value,
  (newValue, oldValue) => {
    if (newValue == 0) {
      console.log('its zero');
      clearInterval(timerInterval);
    }
  }
);
</script>

<template>
  <div class="flex text-xl font-medium text-green-800">
    <div class="minutes">{{ time.minutes }}</div>
    :
    <div class="seconds">{{ time.seconds }}</div>
  </div>
</template>

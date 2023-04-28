<script setup>
import GrowingTimer from '@/components/UI/GrowingTimer.vue';
import { useGrowingPlantStore } from '@/stores/GrowingPlantStore';
</script>

<template>
  <p>
    Now
    <span class="text-green-500 font-bold">{{
      useGrowingPlantStore().growingPlant.plant.name
    }}</span>
    is growing.
  </p>
  <p>Time till you can get your harvest:</p>
  <GrowingTimer />
</template>

<script setup lang="ts">
import SeedCard from '@/components/UI/SeedCard.vue';

const props = defineProps({
  store: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="pb-2">
    <div class="mt-4" v-for="plantType in props.store" :key="plantType.id">
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
</template>

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
  <div v-if="props.store.length == 0" class="mt-4">
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
          />
        </div>
      </div>
    </div>
  </div>
</template>

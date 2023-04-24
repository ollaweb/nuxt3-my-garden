<script setup lang="ts">
import InputQuantity from './InputQuantity.vue';
import type { InputQuantityPayload } from '~/types/UI';
import { usePlayerStore } from '@/stores/PlayerStore';
const playerStore = usePlayerStore();

const { item, plantTypeId } = defineProps({
  item: {
    type: Object,
    required: true
  },
  plantTypeId: {
    type: Number,
    required: true
  }
});

const minutesOfGrowing = item.timeOfGrowing / 1000 / 60;
const secondsOfGrowing = minutesOfGrowing
  ? item.timeOfGrowing / 1000 - minutesOfGrowing * 60
  : item.timeOfGrowing / 1000;

function setQuantity(payload: InputQuantityPayload): void {
  const data = {
    ...payload,
    plantTypeId: plantTypeId
  };
  playerStore.addPlantToStock(data);
}

function seedAPlant(): void {
  if (item.quantity) {
    playerStore.seedAPlant({ plantTypeId: plantTypeId, id: item.id });
  }
}
</script>

<template>
  <div
    @click="seedAPlant"
    class="flex flex-col items-center justify-between gap-2 p-2 rounded"
    :class="{
      'hover:bg-green-50 transition-colors cursor-pointer': item.quantity
    }"
  >
    <div>
      <img :src="item.image" alt="picture of flower" />
    </div>
    <h4 class="font-bold text-sm">{{ item.name }}</h4>
    <div class="flex flex-col gap-1 w-full text-sm">
      <div class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span
          >{{ minutesOfGrowing ? minutesOfGrowing + 'm' : '' }}
          {{ secondsOfGrowing + 's' }}</span
        >
      </div>
      <div class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{{ item.moneyToEarn }}</span>
      </div>
      <div v-if="item.quantity" class="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
        <span>{{ item.quantity }}</span>
      </div>
      <div v-else class="mt-2">
        <InputQuantity
          :coins="playerStore.player.coins"
          :price="item.price"
          :id="item.id"
          @set-quantity="setQuantity"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PopUp from '@/components/UI/PopUp.vue';
import { usePlayerStore } from '@/stores/PlayerStore';
const playerStore = usePlayerStore();

const level = ref(playerStore.player.level.number);
</script>

<template>
  <PopUp v-if="playerStore.player.level.number > level">
    <h3 class="text-center font-bold text-green-600">Congratulations!</h3>
    <h4 class="mt-2 text-center">
      You have reached {{ playerStore.player.level.number }} level.
    </h4>
    <div class="mt-6 text-center">
      <button
        @click="level = playerStore.player.level.number"
        type="submit"
        class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Ok
      </button>
    </div>
  </PopUp>
</template>

<script setup lang="ts">
import PopUp from '@/components/UI/PopUp.vue';
import { usePlayerStore } from '@/stores/PlayerStore';
const playerStore = usePlayerStore();

const name = ref('');

function handleSubmit(payload: string): void {
  playerStore.setPlayerName(payload);
  name.value = '';
}
</script>

<template>
  <PopUp v-if="!playerStore.player.newPlayer && !playerStore.player.name">
    <h3>Please enter your name</h3>
    <form class="pt-4" @submit.prevent="handleSubmit(name)">
      <div class="relative z-0 w-full mb-6 group">
        <input
          name="name"
          type="text"
          id="name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:green-blue-600 peer"
          placeholder=" "
          v-model="name"
        />
        <label
          for="name"
          class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Your name</label
        >
      </div>
      <button
        type="submit"
        class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </form>
  </PopUp>
</template>

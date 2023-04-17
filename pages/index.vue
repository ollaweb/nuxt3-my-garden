<script setup lang="ts" >
import { useStorage } from '@vueuse/core'

const newPlayer = ref(true);
useStorage('new-player', newPlayer);

</script>

<template>
  <section>
    <div
      class="w-full h-96 min-h-96 mx-auto max-w-screen-xl px-4 py-8 flex flex-col items-center justify-center"
    >
    <div v-if="newPlayer">
        <h1 class="text-green-600 font-bold text-4xl text-center">
        Welcome to My Garden App
      </h1>
      <h2 class="mt-4 text-green-800 text-xl">Grow your own garden!</h2>
      <button @click="newPlayer = false" type="button" class="mt-8 text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5">Start now</button>
    </div>
      
    <div class="flex w-full gap-16">
        <div class="playground basis-3/5 bg-gradient-to-t">
        Here will be a playground
        </div>
        <div class="controls basis-2/5">
            Here will be a control panel
        </div>
    </div>
    
    </div>
  </section>
</template>

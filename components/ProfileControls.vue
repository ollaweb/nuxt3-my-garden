<script setup lang="ts">
import { usePlayerStore } from "@/stores/PlayerStore";
const playerStore = usePlayerStore();

let progress =
  (playerStore.player.levelPoints * 100) /
  playerStore.player.pointsToTheNextLevel;

let degree = (360 / 100) * progress;

let stringDegreeToCSS = degree.toString() + "deg";
</script>

<template>
  <div v-show="playerStore.player.name">
    <div class="flex justify-between items-center">
      <h2>{{ playerStore.player.name }}'s garden</h2>
      <div
        class="relative level-progress w-8 h-8 rounded-full flex items-center justify-center before:content-[''] before:w-6 before:h-6 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-fuchsia-300"
      >
        <span class="z-[2]">{{ playerStore.player.level }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.level-progress {
  background: conic-gradient(#c026d3 v-bind(stringDegreeToCSS), #ffffff 0deg);
}
</style>

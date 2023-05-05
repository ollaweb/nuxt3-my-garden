<script setup lang="ts">
import { usePlayerStore } from '@/stores/PlayerStore';
const playerStore = usePlayerStore();

let progress = computed(() => {
  return (
    (
      ((360 / 100) * (playerStore.player.level.levelPoints * 100)) /
      playerStore.player.level.pointsToTheNextLevel
    ).toString() + 'deg'
  );
});
</script>

<template>
  <div class="flex items-center gap-2 text-sm lg:text-base">
    level
    <div
      class="relative level-progress w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center before:content-[''] before:w-5 before:h-5 lg:before:h-6 lg:before:w-6 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-fuchsia-200"
    >
      <span class="z-[2]">{{ playerStore.player.level.number }}</span>
    </div>
  </div>
</template>

<style lang="scss">
.level-progress {
  background: conic-gradient(#c026d3 v-bind(progress), #ffffff 0deg);
}
</style>

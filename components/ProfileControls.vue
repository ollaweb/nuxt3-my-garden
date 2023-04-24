<script setup lang="ts">
import { usePlayerStore } from '@/stores/PlayerStore';

const playerStore = usePlayerStore();
</script>

<template>
  <div class="p-2 h-full flex flex-col gap-4 border border-gray-200 rounded-lg">
    <div
      class="profile-info flex justify-between items-center pb-2 border-b-2 border-gray-100"
    >
      <h2 class="font-medium">
        <span class="text-green-600">{{ playerStore.player.name }}</span
        >'s garden
      </h2>
      <ProfileCoins />
      <ProfileLevel />
    </div>
    <div class="profile-controls">
      <ProfileSeeds />
    </div>
  </div>
</template>

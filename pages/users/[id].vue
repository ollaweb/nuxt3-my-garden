<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="w-full h-full mx-auto max-w-screen-xl px-4 py-8">
    <h2 class="text-xl text-green-600">{{ route.params.id }}</h2>
    <p>Welcome to your homepage!</p>
  </div>
</template>

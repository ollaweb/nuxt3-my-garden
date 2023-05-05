<script setup lang="ts">
import PopUp from '@/components/UI/PopUp.vue';

const landscape = ref(true);

window.matchMedia('(orientation: portrait)').addEventListener('change', e => {
  const portrait = e.matches;

  if (portrait && window.innerWidth < 1024) {
    landscape.value = false;
  } else {
    landscape.value = true;
  }
});

onMounted(() => {
  const portrait = window.matchMedia('(orientation: portrait)').matches;
  if (portrait && window.innerWidth < 1024) {
    landscape.value = false;
  }
});
</script>

<template>
  <div v-if="!landscape">
    <div
      class="p-6 bg-white rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
    >
      <h3 class="text-center">
        Please, rotate your device to landscape mode to continue
      </h3>
      <div class="mt-4 flex gap-4 justify-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 rotate-90"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
        </div>
      </div>
    </div>
    <div
      class="absolute top-0 left-o w-full h-full bg-gradient-to-b from-cyan-200 to-green-200 z-20"
    ></div>
  </div>
</template>

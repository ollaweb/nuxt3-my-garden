<script setup lang="ts">
import { usePlayerStore } from '@/stores/PlayerStore';
const playerStore = usePlayerStore();

const isMenuOpened = ref(false);
const router = useRouter();

function onRestartHandler(): void {
  playerStore.changePlayerState();
  isMenuOpened.value = false;
  router.push({ path: '/' });
}
</script>

<template>
  <div class="wrapper relative">
    <header class="fixed top-0 left-0 right-0 z-10 lg:bg-white">
      <div @click="isMenuOpened = true" class="lg:hidden p-2">
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>
      </div>
      <nav
        class="absolute top-0 lg:relative lg:top-0 lg:left-0 w-full lg:mx-auto pt-16 lg:pt-4 pb-4 pl-4 pr-4 py-2 lg:py-8 z-30 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between h-screen lg:h-auto max-w-[60%] lg:max-w-screen-xl bg-white border-gray-200"
        :class="{ 'left-0': isMenuOpened, '-left-full': !isMenuOpened }"
      >
        <div
          @click="isMenuOpened = false"
          class="lg:hidden absolute top-2 right-2 w-8 h-8 p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <NuxtLink
          @click="isMenuOpened = false"
          to="/"
          class="text-green-600 font-bold hover:text-green-700 transition-colors text-sm md:text-base lg:text-xl"
          >My Garden App</NuxtLink
        >
        <ul
          class="flex flex-col lg:flex-row gap-2 lg:gap-8 lg:items-center text-sm lg:text-base"
        >
          <!-- <li>
              <button
                type="button"
                class="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                <NuxtLink to="/login">Login</NuxtLink>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="text-green-600 hover:text-white border border-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                <NuxtLink to="/register">Register</NuxtLink>
              </button>
            </li> -->
          <li>
            <NuxtLink
              @click="isMenuOpened = false"
              to="/"
              class="font-medium text-zinc-800 hover:text-green-600 transition-colors"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              @click="isMenuOpened = false"
              to="/about"
              class="font-medium text-zinc-800 hover:text-green-600 transition-colors"
              >About</NuxtLink
            >
          </li>
          <li>
            <button
              v-if="!playerStore.isNewPlayer"
              @click="onRestartHandler"
              type="button"
              class="text-green-600 hover:text-white border border-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-2 lg:px-5 py-1.5 lg:py-2.5"
            >
              Restart the game
            </button>
          </li>
        </ul>
      </nav>
      <div
        v-show="isMenuOpened"
        @click="isMenuOpened = false"
        class="absolute top-0 left-o w-screen h-screen bg-zinc-800 bg-opacity-70 z-20"
      ></div>
    </header>
    <main class="pt-8 lg:pt-28 lg:pb-16 h-screen relative overflow-x-hidden">
      <slot />
    </main>
    <footer class="hidden lg:block fixed bottom-0 left-0 right-0 z-10 bg-white">
      <div
        class="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between"
      >
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >© 2023, My Garden App
          <a href="https://flowbite.com/" class="hover:underline"></a>. All
          Rights Reserved.
        </span>
        <ul
          class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
        >
          <li>
            <NuxtLink to="/" class="mr-6 hover:underline">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="mr-6 hover:underline">About</NuxtLink>
          </li>
          <li>
            <a href="https://github.com/ollaweb/nuxt3-my-garden/" class="group">
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 0C4.9225 0 0 4.8176 0 10.7656C0 15.5294 3.14875 19.553 7.52125 20.9794C8.07125 21.0736 8.2775 20.7507 8.2775 20.4681C8.2775 20.2124 8.26375 19.3646 8.26375 18.463C5.5 18.9609 4.785 17.8036 4.565 17.198C4.44125 16.8885 3.905 15.9331 3.4375 15.6774C3.0525 15.4755 2.5025 14.9776 3.42375 14.9642C4.29 14.9507 4.90875 15.7447 5.115 16.0676C6.105 17.6959 7.68625 17.2384 8.31875 16.9558C8.415 16.256 8.70375 15.785 9.02 15.5159C6.5725 15.2468 4.015 14.3182 4.015 10.2004C4.015 9.02963 4.44125 8.06073 5.1425 7.30714C5.0325 7.038 4.6475 5.93453 5.2525 4.45426C5.2525 4.45426 6.17375 4.17166 8.2775 5.55773C9.1575 5.31551 10.0925 5.19439 11.0275 5.19439C11.9625 5.19439 12.8975 5.31551 13.7775 5.55773C15.8813 4.15821 16.8025 4.45426 16.8025 4.45426C17.4075 5.93453 17.0225 7.038 16.9125 7.30714C17.6138 8.06073 18.04 9.01618 18.04 10.2004C18.04 14.3317 15.4688 15.2468 13.0213 15.5159C13.42 15.8523 13.7638 16.4983 13.7638 17.5075C13.7638 18.9474 13.75 20.1047 13.75 20.4681C13.75 20.7507 13.9563 21.0871 14.5063 20.9794C16.6901 20.2581 18.5877 18.8846 19.932 17.0524C21.2764 15.2201 21.9996 13.0213 22 10.7656C22 4.8176 17.0775 0 11 0Z"
                  fill="#6B7280"
                  class="group-hover:fill-gray-800 transition-colors"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

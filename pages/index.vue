<script setup lang="ts">
import PopUp from "~/components/UI/PopUp.vue";
import { usePlayerStore } from "~/stores/PlayerStore";
const playerStore = usePlayerStore();
</script>

<template>
  <section class="flex grow">
    <div
      class="w-full mx-auto max-w-screen-xl px-4 py-8 flex justify-center grow"
    >
      <div
        v-if="playerStore.isNewPlayer"
        class="flex flex-col items-center justify-center"
      >
        <h1 class="text-green-600 font-bold text-4xl text-center">
          Welcome to My Garden App
        </h1>
        <h2 class="mt-4 text-green-800 text-xl">Grow your own garden!</h2>
        <div class="mt-4">
          <svg
            width="162"
            height="428"
            viewBox="0 0 162 428"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-48"
          >
            <path
              d="M154.53 405.03H11.9399V427.62H154.53V405.03Z"
              fill="#3F1A1A"
            />
            <path
              d="M83.24 284.56H25.35L51.9399 405.03H83.24H114.53L141.12 284.56H83.24Z"
              fill="#4F3913"
            />
            <path
              d="M33.35 284.56L58.29 396.56H107L131.94 284.56H141.12L114.53 405.03H51.9399L25.35 284.56H33.35Z"
              fill="#3A270C"
            />
            <path
              d="M76.9399 125.82L78.8199 192.11L78.88 192.16C61.09 180.95 32.78 174.42 15.58 183.36C27.9 201.06 57.1899 211.21 78.8199 203.3L79.61 225.54L79.4399 226.68C68.9399 223.52 43.0901 226.07 35.8101 226.07C40.4501 238.77 71.26 242.44 80.05 233.03L79.52 247.32C79.42 255.14 79.45 264.77 78.8 274.37C77.84 288.42 76.86 318.27 76.86 318.27L76.83 318.08C76.54 324.16 67.97 330.72 59.89 337.25C59.74 337.37 59.9001 337.6 60.0601 337.5C67.2001 333.05 75.83 328.27 77.71 324.98C77.81 324.81 78.06 324.85 78.1 325.04C80.16 335.04 84.7201 356.2 86.8101 364.72C86.8301 364.81 86.97 364.79 86.96 364.69C84.84 352.11 82.23 331.09 81.54 312.83C81.53 312.67 81.77 312.65 81.8 312.81C85.07 329.16 92.4 345.02 100.28 360.82C100.33 360.91 100.46 360.85 100.43 360.76C93.3001 342.12 84.69 318 82.09 307.66C81.54 305.48 81.64 295.26 81.8 293.01L84.83 244.3L84.86 232.56C100.45 243.35 126.05 240.56 127.83 222.75C117.56 226.33 92.88 222.18 83.86 226.26L83.15 203.01C102.06 207.51 127.44 195.87 138.3 181.8C123.31 176.06 98.93 183.74 83.83 191.85L81.8 113.8L76.9399 125.82Z"
              fill="url(#paint0_linear_1_52)"
            />
            <path
              d="M62.8 73.1601H93.2499C101.67 45.7901 97.8999 21.34 77.5899 0.830048C77.2499 0.490048 76.6699 0.520055 76.3699 0.900055C62.6799 18.5501 58.16 42.6301 62.8 73.1601Z"
              fill="#E5CB10"
            />
            <path
              d="M76.9399 69.3101L99.5699 89.6901C124.14 74.9901 137.7 54.2901 136.33 25.4601C136.31 24.9801 135.85 24.6101 135.38 24.7001C113.39 28.6401 93.9099 43.5101 76.9399 69.3101Z"
              fill="#E2DD13"
            />
            <path
              d="M87.8 73.1301L90.45 103.47C118.44 109.47 142.48 103.59 161.14 81.5601C161.45 81.1901 161.37 80.6101 160.96 80.3501C142.19 68.2501 117.8 65.8401 87.8 73.1301Z"
              fill="#E2BA13"
            />
            <path
              d="M93.95 85.0101L69.95 103.76C80.16 130.51 98.1899 147.46 126.82 151.11C127.3 151.17 127.74 150.79 127.74 150.3C127.67 127.96 116.41 106.2 93.95 85.0101Z"
              fill="#E5CB10"
            />
            <path
              d="M91.2601 93.7801L62.47 83.8701C45.6 107 41.2 131.35 53.73 157.36C53.94 157.8 54.5001 157.96 54.9101 157.69C73.6001 145.45 85.7201 124.15 91.2601 93.7801Z"
              fill="#E2E213"
            />
            <path
              d="M73.91 99.4601L66.54 69.9101C37.95 68.3601 15.13 77.9301 0.149976 102.61C-0.100024 103.02 0.0699615 103.58 0.509961 103.78C20.96 112.79 45.42 111.36 73.91 99.4601Z"
              fill="#E5CB10"
            />
            <path
              d="M61.0301 92.01L81.8001 69.74C67.5301 44.92 47.07 31 18.22 31.87C17.73 31.88 17.36 32.33 17.44 32.81C21 54.86 35.5301 74.59 61.0301 92.01Z"
              fill="#E29813"
            />
            <path
              d="M78.03 108.17C89.5286 108.17 98.85 98.8486 98.85 87.35C98.85 75.8515 89.5286 66.53 78.03 66.53C66.5315 66.53 57.21 75.8515 57.21 87.35C57.21 98.8486 66.5315 108.17 78.03 108.17Z"
              fill="#E8800F"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_52"
                x1="76.7"
                y1="336.877"
                x2="76.9479"
                y2="178.256"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="0.0984" stop-color="#F8FCF6" />
                <stop offset="0.2616" stop-color="#E6F2DC" />
                <stop offset="0.4696" stop-color="#C7E3B3" />
                <stop offset="0.714" stop-color="#9ECF7A" />
                <stop offset="0.9864" stop-color="#69B432" />
                <stop offset="1" stop-color="#66B32E" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <button
          @click="playerStore.changePlayerState()"
          type="button"
          class="mt-8 text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Start now
        </button>
      </div>

      <div v-else class="flex w-full gap-16">
        <div
          class="playground basis-3/5 bg-gradient-to-b from-cyan-200 to-green-200"
        >
          Here will be a playground
        </div>
        <div class="controls basis-2/5">
          <ProfileControls />
        </div>
      </div>
    </div>
  </section>
  <PopUp />
</template>

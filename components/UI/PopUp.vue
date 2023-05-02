<template>
  <div>
    <div
      class="p-6 bg-white rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
    >
      <slot></slot>
    </div>
    <div
      class="absolute top-0 left-o w-full h-full bg-zinc-800 bg-opacity-70"
    ></div>
  </div>
</template>

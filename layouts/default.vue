<template>
  <div class="relative flex flex-col min-h-screen">
    <header>
      <div class="w-full mx-auto max-w-screen-xl px-4 py-8">
        <nav
          class="flex flex-wrap items-center justify-between bg-white border-gray-200"
        >
          <NuxtLink
            to="/"
            class="text-green-600 font-bold hover:text-green-700 transition-colors text-xl"
            >My Garden App</NuxtLink
          >
          <ul class="flex gap-8 items-center">
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
                to="/"
                class="font-medium hover:text-green-600 transition-colors"
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/about"
                class="font-medium hover:text-green-600 transition-colors"
                >About</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="relative grow shrink-0 basis-auto overflow-x-hidden">
      <slot />
    </main>
    <footer class="bg-white rounded-lg shadow m-4">
      <div
        class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
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
            <NuxtLink to="/" class="mr-4 hover:underline md:mr-6"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/about" class="mr-4 hover:underline md:mr-6"
              >About</NuxtLink
            >
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

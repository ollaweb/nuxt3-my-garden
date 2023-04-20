<script setup lang="ts">
const props = defineProps({
  price: {
    type: Number,
    required: true
  }
})

const quantity = ref(1)
const totalPrice = computed(() => {
  return quantity.value * props.price
})

const emit = defineEmits(['setQuantity'])

function handleSubmitQuantity() {
  emit('setQuantity', quantity.value)
  quantity.value = 1
}
</script>

<template>
  <div class="flex flex-col gap-2 items-center">
    <div class="flex justify-between gap-2">
      <button
        @click="quantity--"
        type="button"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-3 py-1"
      >
        -
      </button>
      <input
        type="text"
        name="quantity"
        v-model="quantity"
        class="w-full border border-gray-200 rounded text-center"
      />
      <button
        @click="quantity++"
        type="button"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-3 py-1"
      >
        +
      </button>
    </div>

    <div>
      <button
        @click="handleSubmitQuantity"
        type="button"
        class="flex flex-wrap gap-1 focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm pl-3 pr-2 py-1.5"
      >
        Buy for
        <span class="flex gap-1">
          {{ totalPrice }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </button>
    </div>
  </div>
</template>

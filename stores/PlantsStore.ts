import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { Store } from '~/types'

const startPlantsStore: Store = {
  store: [
    {
      id: 1,
      name: 'flowers',
      items: [
        {
          id: 1,
          name: 'Magic Flower',
          image: '/images/store/flowers/1.svg',
          timeOfGrowing: 120000,
          moneyToEarn: 5,
          price: 3
        },
        {
          id: 2,
          name: 'Sunny Flower',
          image: '/images/store/flowers/2.svg',
          timeOfGrowing: 150000,
          moneyToEarn: 8,
          price: 4
        }
      ]
    }
  ]
}

export const usePlantsStore = defineStore('PlantsStore', {
  state: () => ({
    plants: useLocalStorage('my-garden-app-store', startPlantsStore, {
      mergeDefaults: true
    })
  })
})

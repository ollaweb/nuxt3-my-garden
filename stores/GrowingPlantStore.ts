import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

import type { Plant } from '~/types';

const initialState: {
  plant: Plant;
  stageOfGrowing: number;
  timeTillHarvest: number;
} = {
  plant: {
    id: 0,
    name: '',
    image: '',
    timeOfGrowing: 0,
    moneyToEarn: 0
  },
  stageOfGrowing: 0,
  timeTillHarvest: 0
};

export const useGrowingPlantStore = defineStore('GrowingPlantStore', {
  state: () => ({
    growingPlant: useLocalStorage('my-garden-app-growing-plant', initialState)
  }),
  getters: {
    getGrowingPlantInfo: state => state.growingPlant,
    getTimeTillHarvest: state => state.growingPlant.timeTillHarvest
  },
  actions: {
    resetStore() {
      this.growingPlant = initialState;
    },
    updateStageOfGrowing() {
      this.growingPlant.stageOfGrowing = 1;
    },
    seedAPlant(plant: Plant) {
      this.growingPlant.plant = plant;
    },
    updateTimeTillHarvest(time: number) {
      this.growingPlant.timeTillHarvest = time;
    }
  }
});

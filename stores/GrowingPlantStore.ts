import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

import type { Plant } from '~/types';

const initialState: {
  plant: Plant;
  stageOfGrowing: number;
  timeTillHarvest: number;
} = {
  plant: {
    id: 0,
    name: '',
    thumbnail: '',
    images: [],
    timeOfGrowing: 0,
    moneyToEarn: 0
  },
  stageOfGrowing: 0,
  timeTillHarvest: 0
};

export const useGrowingPlantStore = defineStore('GrowingPlantStore', {
  state: () => ({
    growingPlant: useStorage('my-garden-app-growing-plant', initialState)
  }),
  getters: {
    getGrowingPlantInfo: state => state.growingPlant,
    getTimeTillHarvest: state => state.growingPlant.timeTillHarvest
  },
  actions: {
    resetStore() {
      localStorage.removeItem('my-garden-app-growing-plant');
      this.growingPlant = initialState;
    },
    updateStageOfGrowing(stage: number) {
      this.growingPlant.stageOfGrowing = stage;
    },
    seedAPlant(plant: Plant) {
      this.growingPlant.plant = plant;
      this.growingPlant.timeTillHarvest =
        this.growingPlant.plant.timeOfGrowing + new Date().getTime();
    }
  }
});

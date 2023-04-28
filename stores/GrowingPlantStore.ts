import { defineStore } from 'pinia';
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
    growingPlant: initialState
  }),
  getters: {
    getGrowingPlantInfo: state => state.growingPlant,
    getTimeTillHarvest: state => state.growingPlant.timeTillHarvest
  },
  actions: {
    updateStateOfGrowing() {
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

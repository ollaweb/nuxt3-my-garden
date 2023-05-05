import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import { PlantType, Plant } from '~/types';
import {
  flowerImages,
  magicFlowerImages,
  sunnyFlowerImages
} from '~/seeders/flowerImages';

const startPlantsStore: PlantType[] = [
  {
    id: 1,
    name: 'flowers',
    items: [
      {
        id: 1,
        name: 'Magic Flower',
        thumbnail: '/images/store/flowers/1.svg',
        images: [
          null,
          flowerImages[1],
          flowerImages[2],
          flowerImages[3],
          flowerImages[4],
          flowerImages[5],
          flowerImages[6],
          magicFlowerImages[7],
          magicFlowerImages[8]
        ],
        timeOfGrowing: 60000,
        moneyToEarn: 5,
        price: 3
      },
      {
        id: 2,
        name: 'Sunny Flower',
        thumbnail: '/images/store/flowers/2.svg',
        images: [
          null,
          flowerImages[1],
          flowerImages[2],
          flowerImages[3],
          flowerImages[4],
          flowerImages[5],
          flowerImages[6],
          sunnyFlowerImages[7],
          sunnyFlowerImages[8]
        ],
        timeOfGrowing: 80000,
        moneyToEarn: 8,
        price: 4
      }
    ]
  }
];

export const usePlantsStore = defineStore('PlantsStore', {
  state: () => ({
    plants: startPlantsStore
  }),
  getters: {
    getPlantTypeById: state => {
      return (plantTypeId: number): PlantType =>
        state.plants.filter(item => item.id == plantTypeId)[0];
    },
    getPlantInPlantTypeById: state => {
      return (plantTypeId: number, id: number): Plant =>
        state.plants
          .filter(plantType => plantType.id == plantTypeId)[0]
          .items.filter(item => item.id == id)[0];
    }
  }
});

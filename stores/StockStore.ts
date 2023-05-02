import { defineStore } from 'pinia';
import { Plant, PlantType } from '~/types';
import { useLocalStorage } from '@vueuse/core';
import { usePlantsStore } from '@/stores/PlantsStore';

const startStockStore: PlantType[] = [
  {
    id: 1,
    name: 'flowers',
    items: [
      {
        id: 1,
        name: 'Magic Flower',
        image: '/images/store/flowers/1.svg',
        quantity: 2,
        timeOfGrowing: 60000,
        moneyToEarn: 5
      }
    ]
  }
];

export const useStockStore = defineStore('StockStore', {
  state: () => ({
    stock: useLocalStorage('my-garden-app-stock', startStockStore)
  }),
  getters: {
    getStock: state => state.stock,
    findPlantTypeById: state => {
      return (plantTypeId: number): PlantType | undefined =>
        state.stock.find(item => item.id == plantTypeId);
    },
    getPlantInPlantTypeById: state => {
      return (plantTypeId: number, id: number): Plant =>
        state.stock
          .filter(plantType => plantType.id == plantTypeId)[0]
          .items.filter(item => item.id == id)[0];
    }
  },
  actions: {
    resetStore() {
      localStorage.removeItem('my-garden-app-stock');
      this.stock = startStockStore;
    },
    addPlantToStock(payload: {
      plantTypeId: number;
      id: number;
      quantity: number;
    }) {
      //get info about adding plant from PlantStore
      const plantTypeFromStore: PlantType = usePlantsStore().getPlantTypeById(
        payload.plantTypeId
      );

      const plantFromStore: Plant = usePlantsStore().getPlantInPlantTypeById(
        payload.plantTypeId,
        payload.id
      );

      const newPlant: Plant = {
        id: plantFromStore.id,
        name: plantFromStore.name,
        image: plantFromStore.image,
        quantity: payload.quantity,
        timeOfGrowing: plantFromStore.timeOfGrowing,
        moneyToEarn: plantFromStore.moneyToEarn
      };
      const newPlantTypeWithPlant: PlantType = {
        id: plantTypeFromStore.id,
        name: plantTypeFromStore.name,
        items: [newPlant]
      };

      //find plant type of plant that is need to be added in stock
      const existingPlantType = this.findPlantTypeById(payload.plantTypeId);

      //if such plant type already exists in stock
      if (typeof existingPlantType !== 'undefined') {
        //try to find adding plant in this plant type
        const existingPlant: Plant | undefined = existingPlantType.items.find(
          item => item.id == payload.id
        );
        //if such plant already exists in stock
        if (typeof existingPlant !== 'undefined') {
          //update it's quantity
          if (typeof existingPlant.quantity !== 'undefined') {
            existingPlant.quantity += payload.quantity;
          }
        } else {
          //if there is no such a plant, then add it to the existing plant type
          existingPlantType.items.push(newPlant);
        }
      } else {
        //but if there is no such plant type in stock, then we need to create new one and add our adding plant inside of it
        this.stock.push(newPlantTypeWithPlant);
      }
    },
    decrementPlantFromStock(payload: { plantTypeId: number; id: number }) {
      const removingPlant = this.getPlantInPlantTypeById(
        payload.plantTypeId,
        payload.id
      );

      if (typeof removingPlant.quantity !== 'undefined') {
        //if it's the last plant
        if (removingPlant.quantity == 1) {
          //get plant type index
          const plantTypeIndex = this.stock.findIndex(
            item => item.id == payload.plantTypeId
          );
          //and if it's the last item in plant type, then delete the whole plant type
          if (this.findPlantTypeById(payload.plantTypeId)?.items.length == 1) {
            this.stock.splice(plantTypeIndex, 1);
          } else {
            //else delete only that plant
            const removingPlantIndex = this.stock[
              plantTypeIndex
            ].items.findIndex(item => item.id == payload.id);
            this.stock[plantTypeIndex].items.splice(removingPlantIndex, 1);
          }
          return;
        }
        --removingPlant.quantity;
      }
    }
  }
});

import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import type {
  Player,
  PlayerPlantType,
  StorePlantType,
  StoreItemsType
} from '~/types';
import type { InputQuantityPayload } from '~/types/UI';
import { usePlantsStore } from '@/stores/PlantsStore';

const startPlayer: Player = {
  newPlayer: true,
  name: '',
  level: {
    number: 1,
    levelPoints: 0,
    pointsToTheNextLevel: 100
  },
  coins: 10,
  stageOfGrowing: 0,
  stock: [
    {
      id: 1,
      name: 'flowers',
      items: [
        {
          id: 1,
          name: 'Magic Flower',
          image: '/images/store/flowers/1.svg',
          quantity: 2,
          timeOfGrowing: 120000,
          moneyToEarn: 5
        }
      ]
    }
  ]
};

export const usePlayerStore = defineStore('PlayerStore', {
  state: () => ({
    player: useLocalStorage('my-garden-app-player', startPlayer)
  }),
  getters: {
    isNewPlayer: state => state.player.newPlayer
  },
  actions: {
    changePlayerState() {
      this.player.newPlayer = !this.player.newPlayer;

      // localStorage.removeItem('my-garden-app-player');
      // useLocalStorage('my-garden-app-player', startPlayer);
    },
    setPlayerName(name: string) {
      this.player.name = name.trim();
      // useLocalStorage('my-garden-app-player', { name: this.player.name });
    },
    addPlantToStock(payload: InputQuantityPayload) {
      //subtract coins for purchased plant
      this.player.coins -= payload.totalPrice;

      //use PlantsStore
      const plantsStore = usePlantsStore();

      //find PlantType in store
      const newPlantType: StorePlantType[] = plantsStore.plants.store.filter(
        item => item.id == payload.plantTypeId
      );

      //find a plant in that PlantType
      const newPlant: StoreItemsType[] = newPlantType[0].items.filter(
        item => item.id == payload.id
      );

      const { price, ...restOfPlant } = newPlant[0];

      const plantToCollect = {
        ...restOfPlant,
        quantity: payload.quantity
      };

      //add level points for buying new seeds
      this.player.level.levelPoints +=
        plantToCollect.moneyToEarn * plantToCollect.quantity;

      //if there is no such a PlantType in player's stock
      if (
        this.player.stock.findIndex(item => item.id == payload.plantTypeId) ==
        -1
      ) {
        //then create new PlantType and put inside the plant
        const newTypeItem: PlayerPlantType = {
          id: newPlantType[0].id,
          name: newPlantType[0].name,
          items: [plantToCollect]
        };

        //push newPlantType to players stock with new plant
        this.player.stock.push(newTypeItem);
      } else {
        //if there is a PlantType, so find it
        const existingPlantTypeIndex: number = this.player.stock.findIndex(
          item => item.id == payload.plantTypeId
        );

        const existingPlantIndex: number = this.player.stock[
          existingPlantTypeIndex
        ].items.findIndex(item => item.id == payload.id);

        //if there is no such a plant inside existing plant type
        if (existingPlantIndex == -1) {
          //insert new plant
          this.player.stock[existingPlantTypeIndex].items.push(plantToCollect);
        } else {
          //if there is such a plant, so we need to add quantity to existing quantity
          this.player.stock[existingPlantTypeIndex].items[
            existingPlantIndex
          ].quantity += payload.quantity;
        }
      }
    }
  }
});

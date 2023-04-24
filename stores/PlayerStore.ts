import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import type {
  Player,
  PlayerPlantType,
  PlayerItemsType,
  StorePlantType,
  StoreItemsType
} from '~/types';
import type { InputQuantityPayload, SeedingPlant } from '~/types/UI';
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
  timeTillHarvest: 0,
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
    isNewPlayer: state => state.player.newPlayer,
    findPlantTypeIndex: state => {
      return (plantTypeId: number): number =>
        state.player.stock.findIndex(item => item.id == plantTypeId);
    },
    findPlantIndex: state => {
      return (plantTypeId: number, id: number): number =>
        state.player.stock[
          state.player.stock.findIndex(item => item.id == plantTypeId)
        ].items.findIndex(item => item.id == id);
    },
    findPlantById: state => {
      return (plantTypeId: number, id: number): PlayerItemsType =>
        state.player.stock[
          state.player.stock.findIndex(item => item.id == plantTypeId)
        ].items[
          state.player.stock[
            state.player.stock.findIndex(item => item.id == plantTypeId)
          ].items.findIndex(item => item.id == id)
        ];
    }
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
        const existingPlantTypeIndex: number = this.findPlantTypeIndex(
          payload.plantTypeId
        );

        const existingPlantIndex: number = this.findPlantIndex(
          payload.plantTypeId,
          payload.id
        );

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
    },
    setTimeOfGrowingWhenSeedAPlant(payload: SeedingPlant) {
      this.player.timeTillHarvest = this.findPlantById(
        payload.plantTypeId,
        payload.id
      ).timeOfGrowing;
    },
    updateTimeOfGrowing(newTime: number) {
      this.player.timeTillHarvest = newTime;
    },
    seedAPlant(payload: SeedingPlant) {
      //decrement quantity when seeding a plant
      --this.findPlantById(payload.plantTypeId, payload.id).quantity;

      //set store sate of timeOfGrowing
      this.setTimeOfGrowingWhenSeedAPlant(payload);

      //update the growing stage
      this.player.stageOfGrowing++;

      //if we seeded the last seed
      if (this.findPlantById(payload.plantTypeId, payload.id).quantity == 0) {
        const plantToDelete = {
          plantTypeId: payload.plantTypeId,
          id: payload.id
        };

        //delete seed from stock
        this.deletePlant(plantToDelete);
      }
    },
    deletePlant(payload: SeedingPlant) {
      const existingPlantTypeIndex = this.findPlantTypeIndex(
        payload.plantTypeId
      );
      const existingPlantIndex = this.findPlantIndex(
        payload.plantTypeId,
        payload.id
      );

      this.player.stock[existingPlantTypeIndex].items.splice(
        existingPlantIndex,
        1
      );

      //if we deleted the last item from plant's type, the delete the whole type of plants from the stock
      if (this.player.stock[existingPlantTypeIndex].items.length == 0) {
        this.player.stock.splice(existingPlantTypeIndex, 1);
      }
    }
  }
});

import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import { useStockStore } from './StockStore';
import type { Player } from '~/types';

const startPlayer: Player = {
  newPlayer: true,
  name: '',
  level: {
    number: 1,
    levelPoints: 0,
    pointsToTheNextLevel: 100
  },
  coins: 10
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
      if (this.player.newPlayer === true) {
        this.player.newPlayer = false;
      } else {
        localStorage.removeItem('my-garden-app-player');
        this.player.newPlayer = true;
        useStockStore().resetStore();
        this.player = startPlayer;
      }
    },
    setPlayerName(name: string) {
      this.player.name = name.trim();
    },
    incrementCoins() {},
    decrementCoins(totalPrice: number) {
      this.player.coins -= totalPrice;
    },
    incrementLevelPoints(points: number) {
      this.player.level.levelPoints += points;
    }
  }
});

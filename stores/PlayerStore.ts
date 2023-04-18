import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const usePlayerStore = defineStore("PlayerStore", {
  state: () => ({
    player: useLocalStorage("my-garden-app",{ newPlayer: true, name:"", level: 1, levelPoints: 0, pointsToTheNextLevel: 100}),
  }),
  getters: {
    isNewPlayer: (state) => state.player.newPlayer,
  },
  actions: {
    changePlayerState() {
      this.player.newPlayer = !this.player.newPlayer;
      if(this.player.name != '') {
        this.player.name = '';
      }
      useLocalStorage("my-garden-app", {newPlayer: this.player.newPlayer, name: this.player.name});
    },
    setPlayerName(name: string) {
      this.player.name = name.trim();
      useLocalStorage("my-garden-app", {name: this.player.name});
    }
  },
});

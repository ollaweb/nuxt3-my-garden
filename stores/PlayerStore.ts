import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const usePlayerStore = defineStore("PlayerStore", {
  state: () => ({ newPlayer: useLocalStorage("new-player", true) }),
  getters: {
    isNewPlayer: (state) => state.newPlayer,
  },
  actions: {
    changePlayerState() {
      this.newPlayer = !this.newPlayer;
      useLocalStorage("new-player", this.isNewPlayer);
    },
  },
});

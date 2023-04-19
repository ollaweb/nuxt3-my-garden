import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { Player } from '~/types'

const startPlayer: Player = {
  newPlayer: true,
  name: '',
  level: 1,
  levelPoints: 0,
  pointsToTheNextLevel: 100,
  coins: 10,
  pot: 1,
  stageOfGrowing: 0
}

export const usePlayerStore = defineStore('PlayerStore', {
  state: () => ({
    player: useLocalStorage('my-garden-app', startPlayer)
  }),
  getters: {
    isNewPlayer: state => state.player.newPlayer
  },
  actions: {
    changePlayerState() {
      this.player.newPlayer = !this.player.newPlayer
      useLocalStorage('my-garden-app', startPlayer)
    },
    setPlayerName(name: string) {
      this.player.name = name.trim()
      useLocalStorage('my-garden-app', { name: this.player.name })
    }
  }
})

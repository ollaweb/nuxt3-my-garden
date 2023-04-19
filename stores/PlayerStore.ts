import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { Player } from '~/types'

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
      name: 'flowers',
      items: [
        {
          name: 'Magic Flower',
          amount: 2
        }
      ]
    }
  ]
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

export interface Player {
  name: string
  newPlayer: boolean
  level: number
  levelPoints: number
  pointsToTheNextLevel: number
  coins: number
  pot: number
  stageOfGrowing: number
}

export interface Weather {
  name: string
  time: number
}

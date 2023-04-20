export interface Player {
  name: string
  newPlayer: boolean
  level: Level
  coins: number
  stageOfGrowing: number
  stock: PlantType[]
}

interface Level {
  number: number
  levelPoints: number
  pointsToTheNextLevel: number
}

export interface PlantType {
  id: number
  name: string
  items: ItemsType[]
}

interface ItemsType {
  id: number
  name: string
  image: string
  quantity?: number
  timeOfGrowing: number
  moneyToEarn: number
  price?: number
}

export interface Weather {
  name: string
  time: number
}

export interface Store {
  store: PlantType[]
}

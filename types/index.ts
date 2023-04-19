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

interface PlantType {
  name: string
  items: ItemsType[]
}

interface ItemsType {
  name: string
  amount: number
}

export interface Weather {
  name: string
  time: number
}

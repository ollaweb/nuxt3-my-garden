export interface Player {
  name: string;
  newPlayer: boolean;
  level: Level;
  coins: number;
  stageOfGrowing: number;
  timeTillHarvest: number;
  stock: PlantType[];
}

interface Level {
  number: number;
  levelPoints: number;
  pointsToTheNextLevel: number;
}

export interface PlantType {
  id: number;
  name: string;
  items: Plant[];
}

export interface Plant {
  id: number;
  name: string;
  image: string;
  timeOfGrowing: number;
  moneyToEarn: number;
  quantity?: number;
  price?: number
}

export interface Weather {
  name: string;
  time: number;
}

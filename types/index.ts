export interface Player {
  name: string;
  newPlayer: boolean;
  level: Level;
  coins: number;
  stageOfGrowing: number;
  stock: PlayerPlantType[];
}

interface Level {
  number: number;
  levelPoints: number;
  pointsToTheNextLevel: number;
}

export interface PlayerPlantType {
  id: number;
  name: string;
  items: PlayerItemsType[];
}

export interface PlayerItemsType {
  id: number;
  name: string;
  image: string;
  quantity: number;
  timeOfGrowing: number;
  moneyToEarn: number;
}

export interface Weather {
  name: string;
  time: number;
}

export interface Store {
  store: StorePlantType[];
}

export interface StorePlantType {
  id: number;
  name: string;
  items: StoreItemsType[];
}

export interface StoreItemsType {
  id: number;
  name: string;
  image: string;
  timeOfGrowing: number;
  moneyToEarn: number;
  price: number;
}

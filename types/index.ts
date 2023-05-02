export interface Player {
  name: string;
  newPlayer: boolean;
  level: Level;
  coins: number;
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
  thumbnail: string;
  images: PlantImages | [];
  timeOfGrowing: number;
  moneyToEarn: number;
  quantity?: number;
  price?: number;
}

export interface Weather {
  name: string;
  time: number;
}

type PlantImages = [
  null,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

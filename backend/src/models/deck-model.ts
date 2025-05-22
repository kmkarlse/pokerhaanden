export const cardTypes = ["s", "k", "h", "r"];
export const cardValues = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "t", //10
  "j",
  "d",
  "k",
  "e",
];

export interface Card {
  value: string;
}

export type HandRank =
  | "High Card"
  | "One Pair"
  | "Two Pair"
  | "Three of a Kind"
  | "Straight"
  | "Flush"
  | "Full House"
  | "Four of a Kind"
  | "Straight Flush";

export const handRankScores: Record<HandRank, number> = {
  "High Card": 1,
  "One Pair": 2,
  "Two Pair": 3,
  "Three of a Kind": 4,
  Straight: 5,
  Flush: 6,
  "Full House": 7,
  "Four of a Kind": 8,
  "Straight Flush": 9,
};

export interface HandAnalysis {
  rank: HandRank;
  highestCard: string;
  valueCounts: Record<string, number>;
  typeCounts: Record<string, number>;
}

export interface HandHistory {
  hand: Card[];
  analysis: HandAnalysis;
  timeStamp: string;
}

export interface Hand {
  cards: Card[];
  winner?: boolean;
}

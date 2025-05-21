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

export interface HandAnalysis {
  rank: HandRank;
  highestCard: string;
  valueCounts: Record<string, number>;
  typeCounts: Record<string, number>;
}

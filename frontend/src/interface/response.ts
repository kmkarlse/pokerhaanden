export interface Card {
  value: string;
}

export interface HandAnalysis {
  rank: string;
  highestCard: string;
  valueCounts: Record<string, number>;
  typeCounts: Record<string, number>;
}

export interface PlayResponse {
  hand: Card[];
  analysis: HandAnalysis;
}

export interface PlayHistory {
  hand: Card[];
  analysis: HandAnalysis;
  timeStamp: string;
}

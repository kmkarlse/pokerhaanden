import type { Card } from "./response";

export interface Hand {
  cards: Card[];
  winner?: boolean;
  rank?: string;
}

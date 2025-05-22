import {
  Card,
  cardValues,
  Hand,
  HandAnalysis,
  handRankScores,
} from "../models/deck-model";
import { analyzeHand, generateDeck, generateHand } from "./deck";

export const multipleDeks = (count: number): Hand[] => {
  let hands: Hand[] = [];
  let deck = generateDeck();

  for (let i = 0; i < count; i++) {
    const cards = generateHand(deck, 5);
    deck = deck.filter(
      (deckCard: Card) =>
        !cards.some((handCard: Card) => handCard.value === deckCard.value)
    );
    hands.push({ cards });
  }

  return hands;
};

export const winnerDeck = (hands: Hand[]): Hand[] => {
  const analyzed = hands.map((hand) => ({
    hand,
    analysis: analyzeHand(hand.cards),
  }));

  const best = analyzed.reduce(
    (acc, current) => {
      const cmp = compareHands(current.analysis, acc[0].analysis);

      if (cmp > 0) {
        return [current]; // New best
      } else if (cmp === 0) {
        return [...acc, current]; // Tie
      } else {
        return acc; // Keep current best
      }
    },
    [analyzed[0]]
  );

  return best.map((entry) => entry.hand);
};

const compareHands = (a: HandAnalysis, b: HandAnalysis): number => {
  const rankA = Number(handRankScores[a.rank]);
  const rankB = Number(handRankScores[b.rank]);

  if (rankA > rankB) return 1;
  if (rankA < rankB) return -1;

  const indexA = cardValues.indexOf(a.highestCard.slice(0, -1));
  const indexB = cardValues.indexOf(b.highestCard.slice(0, -1));

  if (indexA > indexB) return 1;
  if (indexA < indexB) return -1;

  return 0;
};

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
    hands.push({ cards, winner: false });
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
        return [current];
      } else if (cmp === 0) {
        return [...acc, current];
      } else {
        return acc;
      }
    },
    [analyzed[0]]
  );

  const winningHands = best.map((entry) => entry.hand);

  return hands.map((hand) => ({
    ...hand,
    winner: winningHands.includes(hand),
  }));
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

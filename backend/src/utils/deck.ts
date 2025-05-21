import {
  cardTypes,
  cardValues,
  Card,
  HandAnalysis,
  HandRank,
} from "../models/deck-model";

export const generateDeck = (): Card[] => {
  const deck: Card[] = [];

  for (const type of cardTypes) {
    for (const cardValue of cardValues) {
      deck.push({ value: `${cardValue}${type}` });
    }
  }

  return deck;
};

export const generateHand = (deck: Card[], count: number): Card[] => {
  const shuffle = [...deck].sort(() => Math.random() - 0.5);

  return shuffle.slice(0, count);
};

export const analyzeHand = (cards: Card[]): HandAnalysis => {
  const valueCounts: Record<string, number> = {};
  const typeCounts: Record<string, number> = {};
  const values: string[] = [];
  const types: string[] = [];

  for (const card of cards) {
    const value = card.value.slice(0, -1);
    const type = card.value.slice(-1);

    valueCounts[value] = (valueCounts[value] || 0) + 1;
    typeCounts[type] = (typeCounts[type] || 0) + 1;

    values.push(value);
    types.push(type);
  }

  const sortedValues = values
    .map((v) => cardValues.indexOf(v))
    .sort((a, b) => a - b);

  const highestIndex = Math.max(...sortedValues);
  const hightestValue = cardValues[highestIndex];
  const highestCard =
    cards.find((c) => c.value.startsWith(hightestValue))?.value || "";

  const isFlush = Object.values(typeCounts).some((count) => count === 5);
  const isStraight = sortedValues.every(
    (val, i, arr) => i === 0 || val === arr[i - 1] + 1
  );

  const isLowAceStraight = sortedValues.toString() === "0,1,2,3,12";

  const counts = Object.values(valueCounts);
  const hasFour = counts.includes(4);
  const hasThree = counts.includes(3);
  const hasTwo = counts.filter((c) => c === 2).length;

  let rank: HandRank = "High Card";

  if (isStraight && isFlush) {
    rank = "Straight Flush";
  } else if (hasFour) {
    rank = "Four of a Kind";
  } else if (hasThree && hasTwo === 1) {
    rank = "Full House";
  } else if (isFlush) {
    rank = "Flush";
  } else if (isStraight || isLowAceStraight) {
    rank = "Straight";
  } else if (hasThree) {
    rank = "Three of a Kind";
  } else if (hasTwo === 2) {
    rank = "Two Pair";
  } else if (hasTwo === 1) {
    rank = "One Pair";
  }

  const analyedHand: HandAnalysis = {
    rank,
    highestCard,
    valueCounts,
    typeCounts,
  };

  return analyedHand;
};

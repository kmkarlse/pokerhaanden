import prisma from "./client";
import { Hand as HandModel } from "../models/deck-model";

export const saveHands = async (hands: HandModel[]) => {
  for (const hand of hands) {
    await prisma.hand.create({
      data: {
        winner: !!hand.winner,
        rank: hand.rank ?? "Unknown",
        cards: {
          create: hand.cards.map((card) => ({
            value: card.value,
          })),
        },
      },
    });
  }
};

export const getSavedHands = async () => {
  return await prisma.hand.findMany({
    include: { cards: true },
  });
};

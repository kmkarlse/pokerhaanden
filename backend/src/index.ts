import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { analyzeHand, generateDeck, generateHand } from "./utils/deck";
import { HandAnalysis } from "./models/deck-model";
dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/play", (req: Request, res: Response) => {
  const deck = generateDeck();
  const hand = generateHand(deck, 5);
  const analysis: HandAnalysis = analyzeHand(hand);

  res.json({ hand, analysis });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));

import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { analyzeHand, generateDeck, generateHand } from "./utils/deck";
import { HandAnalysis, HandHistory } from "./models/deck-model";
import { multipleDeks } from "./utils/multipleDecks";
dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const handHistory: HandHistory[] = [];

app.get("/play", (req: Request, res: Response) => {
  const deck = generateDeck();
  const hand = generateHand(deck, 5);
  const analysis: HandAnalysis = analyzeHand(hand);

  const store = {
    hand,
    analysis,
    timeStamp: new Date().toISOString(),
  };

  handHistory.push(store);

  res.json({ hand, analysis });
});

app.get("/history", (req: Request, res: Response) => {
  res.json(handHistory);
});

app.post("/multiplayer", (req: Request, res: Response) => {
  const count = Number(req.body.count);
  const hands = multipleDeks(count);
  res.send(hands);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));

import { useEffect, useState } from "react";
import type { PlayResponse } from "../../interface/response";
import "./poker.scss";
import { HandCard } from "../handCard/handCard";
import { AnalysisCard } from "../analysis/analysisCard";
import { MultiDeck } from "../multideck/multiDeck";

export const Poker = () => {
  const [response, setResponse] = useState<PlayResponse | null>(null);

  useEffect(() => {
    getNewHand();
  }, []);

  const getNewHand = () => {
    fetch("http://localhost:8000/play")
      .then((res) => res.json())
      .then((data: PlayResponse) => {
        setResponse(data);
      })
      .catch((err) => console.error("Error fethcing hand", err));
  };

  return (
    <>
      <section className="poker-section">
        <MultiDeck />
      </section>
      <section className="poker-section">
        <button onClick={getNewHand}>Get new hand</button>
        <HandCard cards={response?.hand} player={0} />
        <AnalysisCard analysis={response?.analysis} />
      </section>
    </>
  );
};

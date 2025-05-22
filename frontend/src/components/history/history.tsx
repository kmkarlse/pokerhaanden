import { useState } from "react";
import type { PlayHistory } from "../../interface/response";
import "../poker/poker.scss";
import "./history.scss";
import { HandCard } from "../handCard/handCard";

export const History = () => {
  const [history, setHistory] = useState<PlayHistory[] | null>(null);

  const fetchHistory = () => {
    fetch("http://localhost:8000/history")
      .then((res) => res.json())
      .then((data: PlayHistory[]) => {
        data.reverse();
        setHistory(data);
      })
      .catch((err) => console.error("Error fetching history", err));
  };

  return (
    <section className="history">
      <button onClick={fetchHistory}>History</button>
      {history?.map((data: PlayHistory, i) => (
        <HandCard key={i} cards={data?.hand} player={0} />
      ))}
    </section>
  );
};

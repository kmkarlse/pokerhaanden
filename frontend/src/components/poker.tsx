import { useEffect, useState } from "react";
import type { Card, PlayResponse } from "../interface/response";

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
        console.log(data);
      })
      .catch((err) => console.error("Error fethcing hand", err));
  };

  return (
    <>
      <button onClick={getNewHand}>Get new hand</button>
      <section className="poker-section">
        {response?.hand?.map((card: Card, i) => (
          <article className="poker-card" key={i}>
            {card.value}
          </article>
        ))}
        <article className="analysis-card">
          <div className="column-layout">
            <p>Highest Card: {response?.analysis.highestCard}</p>
            <p>Type: {response?.analysis.rank}</p>
          </div>
          {response && (
            <>
              {Object.entries(response.analysis.valueCounts).map(
                ([value, count]) => (
                  <p key={value}>
                    {value.toUpperCase()} : {count}
                  </p>
                )
              )}
            </>
          )}
        </article>
      </section>
    </>
  );
};

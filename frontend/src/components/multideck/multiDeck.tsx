import { useState } from "react";
import "./multiDeck.scss";
import type { Hand } from "../../interface/multiple";
import { HandCard } from "../handCard/handCard";

export const MultiDeck = () => {
  const [count, setCount] = useState(1);
  const [hands, setHands] = useState<Hand[] | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(Number(event.target.value));

    setCount(Number(event?.target.value));
  };

  const getHands = (event: React.FormEvent) => {
    event.preventDefault();

    fetch(`http://localhost:8000/multiplayer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ count }),
    })
      .then((res) => res.json())
      .then((data: Hand[]) => {
        setHands(data);
      });
  };

  return (
    <section className="multideck-container">
      <form onSubmit={getHands}>
        <label htmlFor="players">How many players</label>
        <input
          type="number"
          name="count"
          id="players"
          min={1}
          max={10}
          step={1}
          value={count}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {hands?.map((hand: Hand) => (
        <HandCard cards={hand.cards} winnerHand={hand.winner} />
      ))}
    </section>
  );
};

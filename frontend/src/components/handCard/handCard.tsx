import type { Card } from "../../interface/response";
import "./handCard.scss";

type HandCardProps = {
  cards?: Card[];
  winnerHand?: boolean;
  player: number;
};

export const HandCard: React.FC<HandCardProps> = ({
  cards,
  winnerHand,
  player,
}) => {
  return (
    <div className="hand-content">
      {cards?.map((card: Card, i) => (
        <article key={i} className={`poker-card ${winnerHand ? "winner" : ""}`}>
          <p className="card-value">{card.value}</p>
        </article>
      ))}
      {winnerHand ? (
        <h2>Winner, Player: {player + 1}</h2>
      ) : (
        <p>Player: {player + 1}</p>
      )}
    </div>
  );
};

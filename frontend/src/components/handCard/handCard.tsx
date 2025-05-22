import type { Card } from "../../interface/response";
import "./handCard.scss";

type HandCardProps = {
  cards?: Card[];
  winnerHand?: boolean;
  player: number;
  rank?: string;
};

export const HandCard: React.FC<HandCardProps> = ({
  cards,
  winnerHand,
  player,
  rank,
}) => {
  return (
    <div className="hand-content">
      {cards?.map((card: Card, i) => (
        <article key={i} className={`poker-card ${winnerHand ? "winner" : ""}`}>
          <p className="card-value">{card.value}</p>
        </article>
      ))}
      {winnerHand ? (
        <h2>
          Winner, Player: {player + 1}, {rank}
        </h2>
      ) : (
        <p>
          Player: {player + 1}, {rank}
        </p>
      )}
    </div>
  );
};

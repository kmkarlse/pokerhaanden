import type { Card } from "../../interface/response";
import "./handCard.scss";

type HandCardProps = {
  cards?: Card[];
  winnerHand?: boolean;
};

export const HandCard: React.FC<HandCardProps> = ({ cards, winnerHand }) => {
  return (
    <div className="hand-content">
      {cards?.map((card: Card, i) => (
        <article key={i} className={`poker-card ${winnerHand ? "winner" : ""}`}>
          <p className="card-value">{card.value}</p>
        </article>
      ))}
      {winnerHand ? <h2>Winner</h2> : <p></p>}
    </div>
  );
};

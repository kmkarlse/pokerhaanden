import type { Card } from "../../interface/response";
import "./handCard.scss";

type HandCardProps = {
  cards?: Card[];
};

export const HandCard: React.FC<HandCardProps> = ({ cards }) => {
  return (
    <div className="hand-content">
      {cards?.map((card: Card, i) => (
        <article key={i} className="poker-card">
          {card.value}
        </article>
      ))}
    </div>
  );
};

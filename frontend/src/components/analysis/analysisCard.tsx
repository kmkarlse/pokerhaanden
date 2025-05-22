import type { HandAnalysis } from "../../interface/response";
import "./analysisCard.scss";

type AnalysisProp = {
  analysis?: HandAnalysis;
};

export const AnalysisCard: React.FC<AnalysisProp> = ({ analysis }) => {
  return (
    <article className="analysis-card">
      <div className="column-layout">
        <p>Highest Card: {analysis?.highestCard}</p>
        <p>Type: {analysis?.rank}</p>
      </div>
      {analysis && (
        <>
          {Object.entries(analysis?.valueCounts).map(([value, count]) => (
            <p key={value}>
              {value.toUpperCase()} : {count}
            </p>
          ))}
        </>
      )}
    </article>
  );
};

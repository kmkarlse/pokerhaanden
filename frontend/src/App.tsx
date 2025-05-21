import { Poker } from "./components/poker/poker";
import "./main.scss";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Pokerhånden</h1>
      </header>
      <main>
        <Poker />
      </main>
    </div>
  );
}

export default App;

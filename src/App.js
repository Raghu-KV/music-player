import Player from "./components/Player";
import Song from "./components/Song";
import "./style/app.scss";
import Data from "./Data";

function App() {
  return (
    <h1>
      <Song />
      <Player />
    </h1>
  );
}

export default App;

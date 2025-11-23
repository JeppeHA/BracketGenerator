import { useState } from "react";
import NamesList from "./Components/NamesList.jsx";
import Bracket from "./Components/Bracket.jsx";

function App() {

  const [refreshTrigger, setRefreshTrigger] = useState(0);

  function handlePostFinished() {
    setRefreshTrigger(prev => prev + 1);
  }

  return (
    <div>
      <h1>Bracket creator</h1>

      <NamesList onPostFinished={handlePostFinished} />
      <Bracket refreshTrigger={refreshTrigger} />

    </div>
  );
}

export default App;
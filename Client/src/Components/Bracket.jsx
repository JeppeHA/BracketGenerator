import { useEffect, useState } from "react";
import "../CSS/Bracket.css";

function Bracket({ refreshTrigger }) {
  const [entries, setEntries] = useState([]);
  const [columnsArray, setColumnsArray] = useState([]);

  function createColumns() {
    const totalEntries = entries.length;
    if (totalEntries === 0) {
      setColumnsArray([]);
      return;
    }

    const bracketPower = Math.ceil(Math.log2(totalEntries));
    const bracketSize = Math.pow(2, bracketPower);

    const levels = bracketPower + 1;

    const paddedEntries = [...entries];
    while (paddedEntries.length < bracketSize) {
      paddedEntries.push("—");
    }

    const cols = [];

    for (let r = 0; r < levels; r++) {
      const matchesInRound = Math.pow(2, bracketPower - r);
      const buttons = [];

      if (r === 0) {
        for (let m = 0; m < matchesInRound; m++) {
          buttons.push(
            <button key={`${r}-${m}`} className="entry">
              {paddedEntries[m]}
            </button>
          );
        }
      } else {
        for (let m = 0; m < matchesInRound; m++) {
          buttons.push(
            <button key={`${r}-${m}`} className="entry empty">
              —
            </button>
          );
        }
      }

      cols.push(
        <div key={`col-${r}`} className="column">
          {buttons}
        </div>
      );
    }

    setColumnsArray(cols);
  }

  useEffect(() => {
    let cancelled = false;

    async function loadData() {
      const res = await fetch("http://localhost:5000/submit");
      const data = await res.json();
      if (!cancelled) {
        setEntries(data);
      }
    }

    loadData();

    return () => {
      cancelled = true;
    };
  }, [refreshTrigger]);

  useEffect(() => {
    createColumns();
  }, [entries]);

  return (
    <div>
      <div id="bracket">{columnsArray}</div>
    </div>
  );
}

export default Bracket;

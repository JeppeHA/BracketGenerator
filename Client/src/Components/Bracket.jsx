import { createElement, useEffect, useState } from "react";
import "../CSS/Bracket.css";

function Bracket({ refreshTrigger }) {
  const [entries, setEntries] = useState([]);
  const [columns, setColumns] = useState(0);
  const [columnsArray, setColumnsArray] = useState([]);

  async function calculateColumns(data) {
    const cols = Math.ceil(Math.log2(data.length + 1));
    setColumns(cols);
    console.log("columns:");
    console.log(columns);
  }

  function createColumns() {
    const cols = [];
    let currentCol = columns;

    console.log(`There are gonna be ${columns}`);
    console.log(`Entries ${entries} `);

    let lastColumnEmptySpaces = Math.pow(columns, 2) - entries.length + 1;
    console.log(`Number of empty spaces ${lastColumnEmptySpaces}`);

    for (let c = 1; c <= columns; c++) {
      const buttons = [];
      console.log(`current col ${currentCol}`);

      for (let e = Math.pow(currentCol, 2); e > 0; e--) {
        if (c === 1 && e < lastColumnEmptySpaces) {
          continue;
        }

        console.log("Add button!");
        buttons.push(
          <button key={e} className="entry">
            Test
          </button>
        );
      }

      cols.push(
        <div key={c} className="column">
          {buttons}
        </div>
      );

      currentCol--;
    }

    setColumnsArray(cols);
  }

  useEffect(() => {
    async function loadData() {
      const res = await fetch("http://localhost:5000/submit");
      const data = await res.json();
      console.log(data);
      console.log(data.length);
      await calculateColumns(data);
      await createColumns();
      setEntries(data);
    }

    loadData();
  }, [refreshTrigger]);

  return (
    <div>
      <div id="bracket">{columnsArray}</div>
    </div>
  );
}

export default Bracket;

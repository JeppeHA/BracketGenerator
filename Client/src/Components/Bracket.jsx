import { createElement, useEffect, useState } from "react";
import "../CSS/Bracket.css"

function Bracket({ refreshTrigger }) {

  const [entries, setEntries] = useState([]);
  const [columns, setColumns] = useState(0);

  async function calculateColumns(data){
    const cols = Math.ceil(Math.log2(data.length + 1));
    setColumns(cols);
    console.log("columns:")
    console.log(columns);
  }

  useEffect(() => {
    async function loadData() {
      const res = await fetch("http://localhost:5000/submit");
      const data = await res.json();
      console.log(data);
      console.log(data.length)
      await calculateColumns(data);
      setEntries(data);

    }

    loadData();
  }, [refreshTrigger]);

  return (
    <div>
      <div id="bracket">
        </div>
        {entries.map((data, index) => (
        <button className="entry" key={index}>
        {data}
        </button>
        ))}
    </div>

      
  );
}

export default Bracket;
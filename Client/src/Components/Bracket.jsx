import { createElement, useEffect, useState } from "react";
import "../CSS/Bracket.css"

function Bracket({ refreshTrigger }) {

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function loadData() {
      const res = await fetch("http://localhost:5000/submit");
      const data = await res.json();
      console.log(data[1]);
      setEntries(data);
    }

    loadData();
  }, [refreshTrigger]);

  return (
    <div>
      <dir>{entries.length}</dir>
      {entries.map((data, index) => (
        createElement("button",{className: "entry", key: index},
          "Test"//<button  class="entry" key={index}>{data}</button>
        )
      ))}
    </div>
  );
}

export default Bracket;
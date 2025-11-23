import { useEffect, useState } from "react";

function Bracket({ refreshTrigger }) {

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function loadData() {
      const res = await fetch("http://localhost:5000/submit");
      const data = await res.json();
      setEntries(data);
    }

    loadData();
  }, [refreshTrigger]);

  return (
    <div>
      {entries.map((data, index) => (
        <div key={index}>{data}</div>
      ))}
    </div>
  );
}

export default Bracket;
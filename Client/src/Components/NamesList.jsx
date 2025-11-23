import { useState } from 'react'
import "../CSS/NamesList.css";


function NamesList({ onPostFinished }) {

    const [input, SetInput] = useState("Jeppe");

    async function SendInput() {
        // POST to backend
        await fetch("http://localhost:5000/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userInput: { text: input }
            })
        });

        // Tell parent POST is done
        onPostFinished();
    }

    return (
        <div>
            <textarea id="input_box" onChange={e => SetInput(e.target.value)} />
            <button id="submit_button" onClick={SendInput}>
                Submit names
            </button>
        </div>
    );
}

export default NamesList;
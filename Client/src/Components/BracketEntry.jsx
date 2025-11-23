import { useState } from 'react'

function BracketEntry() {
    const [content, SetContent] = useState("Test");

    return (
        <div>
            <button>{content}</button>
        </div>
    );
}

export default BracketEntry;
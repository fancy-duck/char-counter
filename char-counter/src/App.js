import React, { useState } from "react";
import "./App.css";

function App() {
  const limit = 150;
  const [text, setText] = useState("");

  return (
    <div className="container">
      <div className="box">
        <textarea
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={limit}
        />

        <div className={`counter ${limit - text.length <= 10 ? "warning" : ""}`}>
          {text.length}/{limit}
        </div>
      </div>
    </div>
  );
}

export default App;

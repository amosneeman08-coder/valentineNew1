import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie please",
  "Don’t do this to me",
  "I’m gonna cry...",
  "You’re breaking my heart 💔",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const yesButtonSize = noCount * 20 + 16;

  function moveNoButton() {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    setNoPosition({ x, y });
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/gUiuZyxfzYAAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div className="text">Yay!!! 💖</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />

          <div className="text">Will you be my valentine?</div>

          <div style={{ position: "relative", height: "200px" }}>
            <button
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>

            <button
              onMouseEnter={moveNoButton}
              style={{
                position: "absolute",
                transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
              }}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

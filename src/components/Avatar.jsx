import { useState } from "react";
import "./Avatar.css";

function Avatar() {
  const [showGreeting, setShowGreeting] = useState(true);

  return (
    <div className="avatar-wrapper">
      <button
        className="avatar-circle"
        onClick={() => setShowGreeting(!showGreeting)}
        aria-label="Show welcome message"
      >
        <img src="/images/Group-3.png" alt="Arham Mulla" />
        <span className="avatar-ring"></span>
      </button>

      {showGreeting && (
        <div className="greeting-bubble">
          <button
            className="greeting-close"
            onClick={() => setShowGreeting(false)}
            aria-label="Close greeting"
          >
            ×
          </button>

          <h3>Hey, I'm Arham! 👋</h3>
          <p>Welcome to my portfolio.</p>
        </div>
      )}
    </div>
  );
}

export default Avatar;
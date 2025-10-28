// import { useState } from "react";
// import "../styles/congrats-page.css";

// const CongratsPage = () => {
//   const [iconIndex, setIconIndex] = useState(0);

//   const icons = ["🎁", "🎉", "💫", "🎂", "🌵", "🌟", "2️⃣1️⃣", "💲"];

//   const handleClick = () => {
//     setIconIndex((prev) => (prev + 1) % icons.length);
//   };

//   return (
//     <div className="congrats-container">
//       <div className="message">
//         <h1>С днем рождения!</h1>
//         <p className="wish">
//           Всего самого наилучшего и ты это... держись там.
//           <br />— От одного фронтендера другому, Лиза
//         </p>
//       </div>

//       <button className="gift-button" onClick={handleClick}>
//         <span className="gift-icon">{icons[iconIndex]}</span>
//       </button>

//     </div>
//   );
// };

// export default CongratsPage;

import { useState } from "react";
import Confetti from "react-dom-confetti";
import "../styles/congrats-page.css";

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

const CongratsPage = () => {
  const [iconIndex, setIconIndex] = useState(0);
  const [confettiActive, setConfettiActive] = useState(false);

  const icons = ["🎁", "🎉", "💫", "🎂", "🌵", "🌟", "2️⃣1️⃣", "💲"];

  const handleClick = () => {
    setIconIndex((prev) => (prev + 1) % icons.length);
    setConfettiActive(true);

    setTimeout(() => setConfettiActive(false), 500);
  };

  return (
    <div className="congrats-container">
      <div className="message">
        <h1>С днем рождения!</h1>
        <p className="wish">
          Всего самого наилучшего и ты это... держись там.
          <br />— От одного фронтендера другому, Лиза
        </p>
      </div>

      <button className="gift-button" onClick={handleClick}>
        <span className="gift-icon">{icons[iconIndex]}</span>
        {/* Confetti positioned relative to button */}
        <Confetti active={confettiActive} config={config} />
      </button>
    </div>
  );
};

export default CongratsPage;

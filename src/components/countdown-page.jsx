import { useEffect, useState } from "react";
import "../styles/countdown-page.css";

const CountdownPage = ({ onCountdownEnd }) => {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onCountdownEnd();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onCountdownEnd]);

  const formatted = `00:00:${timeLeft.toString().padStart(2, "0")}`;

  return (
    <div className="countdown-container">
      <div className="timer">{formatted}</div>
      <p className="text">Приготовься</p>
    </div>
  );
};

export default CountdownPage;

import "../styles/start-page.css";

const StartPage = ({ onNext }) => {
  return (
    <div className="start-container">
      <button className="start-button" onClick={onNext}>
        Начать сюрприз
      </button>
      <p>P.S. Включи звук</p>
    </div>
  );
};

export default StartPage;

import { useState } from "react";
import "../styles/input-page.css";

const InputPage = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(false);
  const [isNikita, setIsNikita] = useState(false);

  const correctName = "валера";
  const correctDate = "2004-10-28";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim().toLowerCase() === correctName &&
      date.trim() === correctDate
    ) {
      setError(false);
      onSuccess();
    } else if (name.trim().toLowerCase() === "никита") {
      setIsNikita(true);
    } else {
      setError(true);
    }
  };

  const handleGoBack = () => {
    setError(false);
    setName("");
    setIsNikita(false);
  };

  return (
    <div className="input-page">
      {!isNikita ? (
        <>
          <form className="input-form" onSubmit={handleSubmit}>
            <p>Введи свою дату рождения</p>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input-field"
            />
            <p>Введи свое имя</p>
            <input
              type="text"
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
            />
            <button type="submit" className="submit-button">
              Проверить
            </button>
          </form>

          {error && !isNikita && (
            <div className="try-again-message">
              <p>Я знаю, что это враки, Валера :(</p>
              <p>Попробуй еще раз</p>
            </div>
          )}
        </>
      ) : (
        <div className="error-screen">
          <p className="error-text">Говори правду</p>
          <button className="go-back-button" onClick={handleGoBack}>
            Еще раз
          </button>
        </div>
      )}
    </div>
  );
};

export default InputPage;

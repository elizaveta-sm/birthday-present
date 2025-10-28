import { useEffect, useRef, useState } from "react";
import StartPage from "./components/start-page";
import CountdownPage from "./components/countdown-page";
import InputPage from "./components/input-page";
import CongratsPage from "./components/congrats-page";
import "./styles/App.css";

const App = () => {
  const [page, setPage] = useState(1);
  const [musicStarted, setMusicStarted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/surprise-song.mp3");
    audioRef.current.loop = true;
  }, []);

  const handleStart = () => {
    if (!musicStarted && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setMusicStarted(true))
        .catch((err) => console.warn("Autoplay blocked", err));
    }
    setPage(2);
  };

  return (
    <div className="app">
      {page === 1 && <StartPage onNext={handleStart} />}
      {page === 2 && <CountdownPage onCountdownEnd={() => setPage(3)} />}
      {page === 3 && <InputPage onSuccess={() => setPage(4)} />}
      {page === 4 && <CongratsPage />}
    </div>
  );
};

export default App;

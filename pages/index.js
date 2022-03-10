import { useState } from "react";

import Game from "../components/Game";
import WordleForm from "../components/WordleForm";
import NextButton from "../components/NextButton";
import PlayAgainButton from "../components/PlayAgainButton";
import WinLoseNotification from "../components/WinLoseNotification";

export default function Home() {
  const [gameData, setGameData] = useState([]);
  const [gameProgress, setGameProgress] = useState([]);
  const [gameHasStarted, setGameHasStarted] = useState(false);
  const [gameIsFinished, setGameIsFinished] = useState(false);
  const [gameWon, setGameWon] = useState();

  function dequeueGameData() {
    let tempGameData = [...gameData];
    let row = tempGameData.shift();
    setGameData(tempGameData);
    let tempProgress = [...gameProgress];
    tempProgress.push(row);
    setGameProgress(tempProgress);

    if (tempGameData.length === 0) {
      console.log("Game Is Over!");
      return setGameIsFinished(true);
    }
  }

  function renderForm() {
    if (!gameHasStarted) {
      return (
        <WordleForm
          setGameHasStarted={setGameHasStarted}
          setGameData={setGameData}
          setGameWon={setGameWon}
        />
      );
    }
  }

  if (gameData.length > 0 && gameProgress.length < 1) {
    dequeueGameData();
  }

  // TODO: Implement a LoadScreen -- The API may take a couple of seconds to render!

  function renderGame() {
    if (gameHasStarted) {
      return <Game gameProgress={gameProgress} />;
    }
  }

  function renderNextButton() {
    if (gameHasStarted && !gameIsFinished) {
      return <NextButton dequeueGameData={dequeueGameData} />;
    }
  }

  function renderWinLoseNotification() {
    if (gameIsFinished) {
      return <WinLoseNotification gameWon={gameWon} />;
    }
  }

  function renderPlayAgainButton() {
    function resetStates() {
      setGameHasStarted(false);
      setGameIsFinished(false);
      setGameData(null);
      setGameProgress([]);
      setGameWon(null);
    }
    if (gameIsFinished) {
      return <PlayAgainButton resetStates={resetStates} />;
    }
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-base md:text-3xl my-6 font-medium drop-shadow text-center">
        Play Wordle with an AI
      </h1>
      {renderForm()}
      {renderGame()}
      {renderNextButton()}
      {renderWinLoseNotification()}
      {renderPlayAgainButton()}
    </div>
  );
}

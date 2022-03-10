import { useState } from "react";

import Game from "../components/Game";
import WordleForm from "../components/WordleForm";
import NextButton from "../components/NextButton";

export default function Home() {
  const [gameData, setGameData] = useState();
  const [gameProgress, setGameProgress] = useState([]);
  const [gameHasStarted, setGameHasStarted] = useState(false);
  const [gameIsFinished, setGameIsFinished] = useState(false);
  const [gameWon, setGameWon] = useState();

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

  function renderGame() {
    if (gameHasStarted) {
      return <Game gameProgress={gameProgress} />;
    }
  }

  function renderNextButton() {
    if (gameHasStarted && !gameIsFinished) {
      return (
        <NextButton
          gameData={gameData}
          setGameData={setGameData}
          gameProgress={gameProgress}
          setGameProgress={setGameProgress}
          setGameIsFinished={setGameIsFinished}
        />
      );
    }
  }

  return (
    <div className="m-16 max-w-4xl">
      <h1 className="text-base md:text-3xl font-medium text-center drop-shadow">
        Play Wordle with an AI
      </h1>
      {renderForm()}
      {renderGame()}
      {renderNextButton()}
    </div>
  );
}

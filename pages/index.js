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

  // TODO: Implement a win or loose screen when gameIsFinished and gameIsWon

  return (
    <div className="flex flex-col">
      <h1 className="text-base md:text-3xl my-6 font-medium drop-shadow text-center">
        Play Wordle with an AI
      </h1>
      {renderForm()}
      {renderGame()}
      {renderNextButton()}
    </div>
  );
}

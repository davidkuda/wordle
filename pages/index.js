import { useState } from "react";

import Head from "../components/Head";
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
  const [apiError, setApiError] = useState(false);

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
    if (!apiError && !gameHasStarted) {
      return (
        <WordleForm
          setGameHasStarted={setGameHasStarted}
          setGameData={setGameData}
          setGameWon={setGameWon}
          setApiError={setApiError}
        />
      );
    }
  }

  if (
    !apiError &&
    gameData !== null &&
    gameData.length > 0 &&
    gameProgress.length < 1
  ) {
    dequeueGameData();
  }

  // TODO: Implement a LoadScreen -- The API may take a couple of seconds to render!

  function renderGame() {
    if (!apiError && gameHasStarted) {
      return <Game gameProgress={gameProgress} />;
    }
  }

  function renderNextButton() {
    if (!apiError && gameHasStarted && !gameIsFinished) {
      return <NextButton dequeueGameData={dequeueGameData} />;
    }
  }

  function renderWinLoseNotification() {
    if (!apiError && gameIsFinished) {
      return <WinLoseNotification gameWon={gameWon} />;
    }
  }

  function renderApiError() {
    if (apiError) {
      return (
        <p className="text-2xl text-red-600 text-center mt-8 mx-12">
          {apiError}
        </p>
      );
    }
  }

  function renderPlayAgainButton() {
    function resetStates() {
      setGameHasStarted(false);
      setGameIsFinished(false);
      setGameData(null);
      setGameProgress([]);
      setGameWon(null);
      setApiError(false);
    }
    if (apiError || gameIsFinished) {
      return <PlayAgainButton resetStates={resetStates} />;
    }
  }

  return (
    <>
      <Head />
      <div className="flex flex-col">
        <h1 className="text-base md:text-3xl my-6 font-medium drop-shadow text-center">
          Play Wordle with an AI
        </h1>
        {renderForm()}
        {renderGame()}
        {renderNextButton()}
        {renderWinLoseNotification()}
        {renderApiError()}
        {renderPlayAgainButton()}
      </div>
    </>
  );
}

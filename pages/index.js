import { useState } from "react";

import Head from "../components/Head";
import Game from "../components/Game";
import WordleForm from "../components/WordleForm";
import NextButton from "../components/NextButton";
import PlayAgainButton from "../components/PlayAgainButton";
import WinLoseNotification from "../components/WinLoseNotification";

export default function Home() {
  const [yourWord, setYourWord] = useState("");
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
          setYourWord={setYourWord}
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

  const renderYourWord = (
    <div className="m-8 mx-4 md:mx-12 flex flex-col items-center">
      <div className="prose w-4/5 md:w-3/5">
        <p className="text-center text-xl">
          Your word is <span className="font-bold">{yourWord}.</span> <br />
          Will the AI guess it?
        </p>
      </div>
    </div>
  );

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
      setYourWord("");
    }
    if (apiError || gameIsFinished) {
      return <PlayAgainButton resetStates={resetStates} />;
    }
  }

  return (
    <>
      <Head />
      <div className="flex flex-col">
        <h1 className="text-3xl my-6 font-medium drop-shadow text-center">
          Play Wordle with our AI
        </h1>
        {yourWord && renderYourWord}
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

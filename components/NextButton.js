export default function NextButton(props) {
  function handleClick(event) {
    if (props.gameData.length == 0) {
      console.log("Game Is Over!");
      return props.setGameIsFinished(true);
    }
    let tempGameData = [...props.gameData];
    let row = tempGameData.shift();
    props.setGameData(tempGameData);
    let tempProgress = [...props.gameProgress];
    tempProgress.push(row);
    props.setGameProgress(tempProgress);
  }

  return (
    <button
      onClick={handleClick}
      className="w-28 self-center mt-8 bg-gray-500  border-gray-500 text-sm border-4 text-white py-1 px-2 rounded hover:bg-gray-700 hover:border-gray-700"
    >
      Next Guess
    </button>
  );
}

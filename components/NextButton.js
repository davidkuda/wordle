export default function NextButton({dequeueGameData}) {
  function handleClick(event) {
    dequeueGameData();
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

export default function PlayAgainButton({ resetStates }) {
  function handleClick(event) {
    resetStates();
  }

  return (
    <button
      className="w-28 self-center mt-8 bg-gray-500  border-gray-500 text-sm border-4 text-white py-1 px-2 rounded hover:bg-gray-700 hover:border-gray-700"
      onClick={handleClick}
    >
      Play Again?
    </button>
  );
}

import { useEffect } from "react";

export default function NextButton({ dequeueGameData }) {
  function handleClick(event) {
    dequeueGameData();
  }

  useEffect(() => {
    // Add event listeners
    const upHandler = (event) => {
      if (event.key === "n") {
        document.getElementById("next-guess-button").click();
      }
    };
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return (
    <button
      id="next-guess-button"
      onClick={handleClick}
      className="w-auto self-center mt-8 bg-gray-500  border-gray-500 text-sm border-4 text-white py-1 px-2 rounded hover:bg-gray-700 hover:border-gray-700"
    >
      Next Guess
    </button>
  );
}

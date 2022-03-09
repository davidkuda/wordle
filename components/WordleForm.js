import { useState } from "react";
import wordList from "../public/wordle_words.json";

export default function FuncForm() {
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const userInput = event.target.elements.word.value;
    // TODO: Do something with the userInput !
  }

  function handleChange(event) {
    const { value } = event.target;
    var isInDictionary = wordList.includes(value);
    var isLessThenFiveChars = value.length < 5;
    var isMoreThanFiveChars = value.length > 5;
    var isFiveChars = value.length === 5;

    if (isLessThenFiveChars || isMoreThanFiveChars) {
      setError("Your word must have exactly five characters.");
    }

    if (isFiveChars) {
      setError();
    }

    if (isFiveChars && !isInDictionary) {
      setError("Word is not in our English Dictionary!");
    }
  }

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="text-2xl flex justify-center items-center py-3"
      >
        <div className="flex justify-center items-center border-b border-gray-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            name="word"
            id="word"
            placeholder="Enter a word"
            aria-label="Word"
            onChange={handleChange}
          ></input>
          <button
            disabled={Boolean(error)}
            className={
              "flex-shrink-0 bg-gray-500  border-gray-500 text-sm border-4 text-white py-1 px-2 rounded"
              + (Boolean(error)? "" : " hover:bg-gray-700 hover:border-gray-700")
            }
            type="submit"
          >
            Start
          </button>
        </div>
      </form>
      <p className="text-red-600 text-center">{error}</p>
    </>
  );
}

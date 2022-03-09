import WordleLetter from "./WordleLetter";

export default function WordleRow(props) {
  return (
    <div className="h-min p-2 min-w-full md:h-40 bg-white m-8 flex items-center justify-between rounded-lg shadow-lg">
      {props.letters.map((letter, letterNum) => (
        <WordleLetter
          key={`letter_${letterNum}_of_row_${props.rowNum}`}
          letter={letter.letter}
          state={letter.state}
        />
      ))}
    </div>
  );
}

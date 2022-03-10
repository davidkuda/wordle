import WordleLetter from "./WordleLetter";

export default function WordleRow(props) {
  return (
    <>
      {props.letters.map((letter, letterNum) => (
        <WordleLetter
          key={`letter_${letterNum}_of_row_${props.rowNum}`}
          letter={letter.letter}
          state={letter.state}
        />
      ))}
    </>
  );
}

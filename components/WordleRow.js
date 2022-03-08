import WordleLetter from "./WordleLetter";

export default function WordleRow(props) {
  return (
    <div className="h-40 bg-cyan-500 m-8 flex items-center justify-between">
      <WordleLetter letter={props.letter_1} />
      <WordleLetter letter={props.letter_2} />
      <WordleLetter letter={props.letter_3} />
      <WordleLetter letter={props.letter_4} />
      <WordleLetter letter={props.letter_5} />
    </div>
  );
}

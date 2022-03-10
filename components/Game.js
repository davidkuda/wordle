import WordleRow from "./WordleRow";

export default function Game(props) {

  function renderRows(data) {
    if (data.length > 0) {
      return data.map((row, rowNum) => (
        <WordleRow key={`row_${rowNum}`} rowNum={rowNum} letters={row.letters} />
      ))
    }
  }

  return (
    <div className="m-16 max-w-4xl">
      <div className="game-container bg-slate-300 p-12 rounded-xl drop-shadow-lg">
        {renderRows(props.gameProgress)}
      </div>
    </div>
  );
}

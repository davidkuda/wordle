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
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-5 md:text-4xl sm:text-xl xs:text-sm gap-4 text-gray-100 font-bold">
        {renderRows(props.gameProgress)}
      </div>
    </div>
  );
}

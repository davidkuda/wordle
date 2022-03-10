import WordleRow from "./WordleRow";
import { useEffect, useState } from "react";

export default function Game(props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://wordlapp.azurewebsites.net/v2/game?action=hi&word=${props.word}`
      );
      const gameData = await response.json();
      setData(gameData);
    };
    fetchData();
  }, [props.word, setData]);

  return (
    <div className="m-16 max-w-4xl">
      <div className="game-container bg-slate-300 p-12 rounded-xl drop-shadow-lg">
        {data && data.history.map((row, rowNum) => (
          <WordleRow key={`row_${rowNum}`} rowNum={rowNum} letters={row.letters} />
        ))}
      </div>
    </div>
  );
}

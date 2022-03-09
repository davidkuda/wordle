import WordleForm from "./WordleForm";
import WordleRow from "./WordleRow";

export default function Game(props) {
  const sampleData = JSON.parse(sampleJson);
  return (
    <div className="m-16 max-w-4xl">
      <div className="game-container bg-slate-300 p-12 rounded-xl drop-shadow-lg">
        <WordleForm />
        {sampleData.history.map((row, rowNum) => (
          <WordleRow key={`row_${rowNum}`} rowNum={rowNum} letters={row.letters} />
        ))}
      </div>
    </div>
  );
}

const sampleJson = `
{
  "game_won": "True",
  "history": [
    {
      "letters": [
        {
          "letter": "E",
          "state": -1
        },
        {
          "letter": "V",
          "state": 1
        },
        {
          "letter": "A",
          "state": 1
        },
        {
          "letter": "D",
          "state": -1
        },
        {
          "letter": "E",
          "state": -1
        }
      ]
    },
    {
      "letters": [
        {
          "letter": "F",
          "state": -1
        },
        {
          "letter": "O",
          "state": -1
        },
        {
          "letter": "C",
          "state": -1
        },
        {
          "letter": "A",
          "state": 2
        },
        {
          "letter": "L",
          "state": 2
        }
      ]
    },
    {
      "letters": [
        {
          "letter": "N",
          "state": 2
        },
        {
          "letter": "A",
          "state": 2
        },
        {
          "letter": "V",
          "state": 2
        },
        {
          "letter": "A",
          "state": 2
        },
        {
          "letter": "L",
          "state": 2
        }
      ]
    }
  ]
}
`;

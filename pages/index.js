import WordleRow from "../components/WordleRow";

export default function Home() {
  return (
    <div className="m-16 max-w-4xl">
      <div className="game-container bg-slate-300 p-12 rounded-xl drop-shadow-lg">
        <h1 className="text-3xl font-medium text-center drop-shadow">
          Play Wordle with an AI
        </h1>
        <WordleRow
          letter_1="A"
          letter_2="B"
          letter_3="C"
          letter_4="D"
          letter_5="E"
        />
        <WordleRow
          letter_1="A"
          letter_2="B"
          letter_3="C"
          letter_4="D"
          letter_5="E"
        />
        <WordleRow
          letter_1="B"
          letter_2="R"
          letter_3="O"
          letter_4="D"
          letter_5="E"
        />
      </div>
    </div>
  );
}

import Game from "../components/Game";
import WordleForm from "../components/WordleForm";

export default function Home() {
  return (
    <div className="m-16 max-w-4xl">
      <h1 className="text-base md:text-3xl font-medium text-center drop-shadow">
        Play Wordle with an AI
      </h1>
      <WordleForm />
      <Game word="hello" />
    </div>
  );
}

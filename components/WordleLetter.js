export default function WordleLetter(props) {
  const letter = props.letter;
  return (
    <div className="aspect-square p-1 m-0.5 md:p-4 bg-slate-400 shadow-lg rounded-lg">
      {/* TODO: If state === 2 => ... etc. */}
      <p className="text-white text-base sm:text-4xl md:text-8xl text-center">
        {letter}
      </p>
    </div>
  );
}

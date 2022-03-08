export default function WordleLetter(props) {
  const letter = props.letter;
  return (
    <div className="h-4/5 p-4 mx-2 my-2 w-1/5 bg-slate-400 shadow-lg rounded-lg">
      <p className="text-white text-4xl md:text-8xl text-center">{letter}</p>
    </div>
  );
}

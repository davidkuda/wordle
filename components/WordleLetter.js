export default function WordleLetter(props) {
  const letter = props.letter;
  return (
    <div className="h-4/5 p-4 mx-2 my-2 w-1/5 bg-cyan-200">
      <p className="text-4xl md:text-8xl">{letter}</p>
    </div>
  );
}

export default function WordleLetter(props) {
  const letter = props.letter;
  const state = props.state;
  var bgClass = null;

  if (state == "isWrongLetter") {
    bgClass = "bg-gray-500";
  } else if (state == "isCorrectLetter") {
    bgClass = "bg-yellow-600";
  } else if (state == "isCorrectPosition") {
    bgClass = "bg-green-700";
  }

  return (
    <div
      className={
        "flex items-center justify-center md:w-16 md:h-16 sm:w-12 sm:h-12 w-8 h-8 " +
        bgClass
      }
    >
      {letter}
    </div>
  );
}

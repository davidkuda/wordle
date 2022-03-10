export default function WinLoseNotification(props) {
  let title;
  let paragraph;
  if (props.gameWon) {
    title = "The AI Won";
    paragraph = "Yay! Our AI was smart enough to find your word. :)";
  } else {
    title = "The AI Lost";
    paragraph =
      "Unfortunately, our AI was not smart enough to find out your word. :( Well done on choosing that word!";
  }
  return (
    <div className="flex flex-col items-center mt-6">
      <div className="w-2/5 flex flex-col items-center">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

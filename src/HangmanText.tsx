type HangmanTextProps = {
  textToGuess: string;
  guessWords: string[];
  isLosed: boolean;
};

export default function HangmanText({
  textToGuess,
  guessWords,
  isLosed,
}: HangmanTextProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1.5rem",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {textToGuess.split("").map((ele, index) => (
        <span style={{ borderBottom: "7px solid black" }} key={index}>
          <span
            style={{
              display: "inline-block",
              width: "30px",
              textAlign: "center",
              fontSize: "4rem",
              fontWeight: "bold",
              visibility: !isLosed
                ? guessWords.includes(ele)
                  ? "visible"
                  : "hidden"
                : "visible",
              color: !guessWords.includes(ele) ? "red" : "black",
            }}
          >
            {ele}
          </span>
        </span>
      ))}
    </div>
  );
}

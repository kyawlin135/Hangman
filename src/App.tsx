import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import HangmanDraw from "./HangmanDraw";
import HangmanText from "./HangmanText";
import Keyboard from "./Keyboard";

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

function App() {
  const [textToGuess, setTextToGuess] = useState(getWord);

  const [guessWords, setGuessWords] = useState<string[]>([]);

  const incorrectWords = guessWords.filter(
    (letter) => !textToGuess.includes(letter)
  );

  const isLosed = incorrectWords.length >= 6;
  const isWon = textToGuess
    .split("")
    .every((word) => guessWords.includes(word));

  const addGuessWords = useCallback(
    (letter: string) => {
      if (guessWords.includes(letter) || isLosed || isWon) return;

      setGuessWords((letters) => [...letters, letter]);
    },
    [guessWords]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      e.preventDefault();

      if (key === "Enter") {
        setTextToGuess(getWord);
        setGuessWords([]);
        return;
      }

      if (!key.match(/^[a-z]$/)) return;

      addGuessWords(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessWords]);

  return (
    <div
      style={{
        display: "flex",
        maxWidth: "800px",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 auto",
        gap: "2rem",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
        }}
      >
        {isWon && "You won - Refresh to play again or press enter"}

        {isLosed && "Nice Try - Refresh to play again or press enter"}
      </div>
      <HangmanDraw incorrectLength={incorrectWords.length} />
      <HangmanText
        textToGuess={textToGuess}
        guessWords={guessWords}
        isLosed={isLosed}
      />
      <div
        style={{
          alignSelf: "stretch",
        }}
      >
        <Keyboard
          isActiveWords={guessWords.filter((word) =>
            textToGuess.includes(word)
          )}
          isInActiveWords={incorrectWords}
          addGuessWords={addGuessWords}
          disabled={isLosed || isWon}
        />
      </div>
    </div>
  );
}
export default App;

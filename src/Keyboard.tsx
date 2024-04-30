import styles from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  isActiveWords: string[];
  isInActiveWords: string[];
  disabled?: boolean;
  addGuessWords: (letter: string) => void;
};

export default function Keyboard({
  isActiveWords,
  isInActiveWords,
  addGuessWords,
  disabled,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = isActiveWords.includes(key);
        const isInActive = isInActiveWords.includes(key);
        return (
          <button
            key={key}
            className={`${styles.btn} ${isActive && styles.active} ${
              isInActive && styles.inactive
            }`}
            disabled={isInActive || isActive || disabled}
            onClick={() => addGuessWords(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

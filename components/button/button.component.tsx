import styles from "./button.module.css";

export const Button = (Props: { text: string; handleClick: () => void }) => {
  const { text, handleClick } = Props;
  return (
    <button className={styles.button} onClick={handleClick}>
      {text}
    </button>
  );
};

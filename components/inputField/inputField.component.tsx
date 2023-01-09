import { useState, useEffect, RefObject } from "react";
import styles from "./inputField.module.css";
type Props = {};
export const InputField = (Props: {
  placeholder: string;
  inputRef: RefObject<HTMLInputElement>;
  clearField: () => void;
  clear: Boolean;
  handleKeyDown?: (e: any) => void;
}) => {
  const [inputVal, setInputVal] = useState("");
  // const [clearField, setClearField] = useState(false);
  const { placeholder, inputRef, clearField, clear, handleKeyDown } = Props;
  // console.log(inputVal);
  useEffect(() => {
    if (clear) {
      setInputVal("");
    }
  }, [clear]);
  const handleChange = (e: any) => {
    setInputVal(e.target.value);
    clearField();
  };

  return (
    <div className={styles.inputField}>
      <input
        type="text"
        placeholder={placeholder}
        value={inputVal}
        onChange={handleChange}
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

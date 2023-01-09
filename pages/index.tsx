import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { InputField } from "../components/inputField/inputField.component";
import { useRef, useState, useEffect } from "react";
import { Button } from "./../components/button/button.component";
import { TodoItem } from "./../components/todoItem/todoItem.component";
import { Todo } from "../typeDef/typeDef";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [clearField, setClearField] = useState(false);
  const handleClick = () => {
    if (inputRef.current?.value) {
      setTodos([...todos, { text: inputRef.current.value, complete: false }]);
      setClearField(true);
    }
  };
  useEffect(() => {
    const localTodos = window.localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);
  const toggleTodo = (selectedTodo: any) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
    window.localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  const handleClearField = () => {
    if (clearField) {
      setClearField(false);
    }
  };

  return (
    <>
      <Head>
        <title>To-Do App</title>
        <meta name="description" content="A Simple todo app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>To-Do App</h1>
        <div className={styles.addTodo}>
          <InputField
            placeholder="Enter to-do element"
            inputRef={inputRef}
            clearField={handleClearField}
            clear={clearField}
            handleKeyDown={(e) => {
              if (e.key === "Enter") {
                handleClick();
              }
            }}
          />
          <Button text="Add" handleClick={handleClick} />
        </div>
        <div className={styles.listTodo}>
          <ul>
            {todos.map((todo, idx) => (
              <TodoItem key={idx} todo={todo} toggleTodo={toggleTodo} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

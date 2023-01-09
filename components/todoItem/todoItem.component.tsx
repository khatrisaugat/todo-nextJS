import { Todo } from "../../typeDef/typeDef";
import styles from "./todoItem.module.css";
export const TodoItem = (Props: {
  todo: Todo;
  toggleTodo: (todo: Todo) => void;
}) => {
  const { todo, toggleTodo } = Props;
  return (
    <li className={styles.listItem}>
      <label
        className={`${styles.item} ${todo.complete ? styles.completed : ""}`}
      >
        {todo.text}
      </label>
      <input
        type="checkbox"
        className={styles.checkBox}
        checked={todo.complete}
        onChange={() => {
          toggleTodo(todo);
        }}
      />
    </li>
  );
};

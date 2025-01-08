import { Button } from "./button";
import { Todo } from "./home/TodoList/Todo";
import { Input } from "./input";
import styles from "./home/TodoList/TodoList.module.css";

export default function TaskItem({
  editedTodo,
  task,
  changeInput,
  onClickSave,
  onClickCancel,
  onClickToggle,
  onClickEdit,
  onClickDelete,
}: {
  editedTodo: string;
  task: Todo;
  changeInput: any;
  onClickSave: any;
  onClickCancel: any;
  onClickToggle: any;
  onClickEdit: any;
  onClickDelete: any;
}) {
  return (
    <li
      key={task.id}
      className={`${styles.item} ${task.completed ? styles.itemCompleted : ""}`}
    >
      {task.editing ? (
        <>
          <Input type="text" value={editedTodo} onChange={changeInput} />
          <Button onClick={onClickSave}>Save</Button>
          <Button onClick={onClickCancel}>Cancel</Button>
        </>
      ) : (
        <>
          <Input
            type="checkbox"
            checked={task.completed}
            onChange={onClickToggle}
          />
          <span
            className={`${styles.span} ${
              task.completed ? styles.spanCompleted : ""
            }`}
          >
            {task.text}
          </span>
          <Button onClick={onClickEdit}>Edit</Button>
          <Button onClick={onClickDelete}>Delete</Button>
        </>
      )}
    </li>
  );
}

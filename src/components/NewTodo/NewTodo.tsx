import { useState } from "react";
import type { NewTodoProps, TODO } from "../../../data";
import { nanoid } from "nanoid";

const NewTodo = ({ setTodoList }: NewTodoProps) => {
  const [todo, setTodo] = useState("");

  const handleSetTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const todoName = e.target.value;
    setTodo(todoName);
  };

  const handleAddNewTodos = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.trim()) return;
    const newTodo = {
      todo: todo,
      done: false,
      id: nanoid(),
    };
    setTodoList((prevList: TODO[]) => [...prevList, newTodo]);
    setTodo("");
  };

  return (
    <form className="new-todo" onSubmit={handleAddNewTodos}>
      <input type="text" placeholder={`Enter task`} className="todo-name" value={todo} onChange={handleSetTodo} />
      <button className="add-todo">Add</button>
    </form>
  );
};

export default NewTodo;

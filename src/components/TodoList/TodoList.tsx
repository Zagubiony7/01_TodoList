import { type TodoListProps } from "../../../data";

const TodoList = ({ todoList, setTodoList, sortOption }: TodoListProps) => {
  const handleUpdateTodoState = (id: string) => {
    setTodoList((todoList) => todoList.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  const handleRemoveTodo = (id: string) => {
    setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));
  };

  const todosArr = sortOption === "all" ? todoList : todoList.slice().filter((todo) => todo.done);

  return (
    <ul className="todo-list">
      {todosArr.map(({ todo, done, id }) => (
        <li className="todo" key={id}>
          <p style={done ? { textDecoration: "line-through" } : {}}>{todo}</p>
          <div className="todo-actions">
            <input type="checkbox" onClick={() => handleUpdateTodoState(id)}></input>
            <span onClick={() => handleRemoveTodo(id)}>❌</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

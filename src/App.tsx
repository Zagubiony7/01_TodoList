import { useState } from "react";
import { TODOS } from "../data";

import NewTodo from "./components/NewTodo/NewTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoControls from "./components/TodoControls/TodoControls";

const App = () => {
  const [todoList, setTodoList] = useState(TODOS);
  const [sortOption, setSortOption] = useState("all");

  const handleSortByDone = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  return (
    <>
      <h1>TODO LIST</h1>
      <div className="container">
        <div>
          <NewTodo setTodoList={setTodoList} />
          <TodoList todoList={todoList} setTodoList={setTodoList} sortOption={sortOption} />
        </div>
        {todoList.length > 0 && <TodoControls setTodoList={setTodoList} onSortTodos={handleSortByDone} />}
      </div>
    </>
  );
};

export default App;

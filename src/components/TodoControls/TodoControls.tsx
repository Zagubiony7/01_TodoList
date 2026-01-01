import type { TodoControlsProps } from "../../../data";

const TodoControls = ({ setTodoList, onSortTodos }: TodoControlsProps) => {
  const handleRemoveAllTodos = () => setTodoList([]);
  return (
    <div className="todo-controls">
      <select className="sort-select" name="sort-todos" id="sort-by-done" onChange={onSortTodos}>
        <option value="all">Show all</option>
        <option value="done">Show done</option>
      </select>
      <button className="clear-all" onClick={handleRemoveAllTodos}>
        Clear all
      </button>
    </div>
  );
};

export default TodoControls;

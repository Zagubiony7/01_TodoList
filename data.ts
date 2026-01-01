import type { Dispatch, SetStateAction } from "react";

export type TODO = { todo: string; done: boolean; id: string };

type SET_TODO_LIST = Dispatch<SetStateAction<TODO[]>>;

export const TODOS = [
  { todo: "Learn React", done: false, id: "a" },
  { todo: "Build React apps", done: false, id: "b" },
  { todo: "Study 10 hours a day", done: false, id: "c" },
];

export type TodoListProps = {
  todoList: TODO[];
  setTodoList: SET_TODO_LIST;
  sortOption: string;
};

export type NewTodoProps = {
  setTodoList: SET_TODO_LIST;
};

export type TodoControlsProps = {
  setTodoList: SET_TODO_LIST;
  onSortTodos: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

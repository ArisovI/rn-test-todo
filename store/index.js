import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [],
  createNewTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      ),
    })),
  updateTogo: (newTodo) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === newTodo.id ? newTodo : todo
      ),
    })),
}));

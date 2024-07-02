import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TasksProps {
  name: string;
}

interface TodoProps {
  todos: string[];
  tasks: TasksProps;
  editIndex: number | null;
  isClick: boolean;
}

const initialState: TodoProps = {
  todos: [],
  tasks: {
    name: " ",
  },
  editIndex: null,
  isClick: false,
};

export const ToDo = createSlice({
  name: "ToDo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push(action.payload);
      state.tasks.name = " ";
    },
    addTask(state, action: PayloadAction<string>) {
      state.tasks.name = action.payload;
    },
    deleteTask(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((_, index) => index !== action.payload);
    },
    onEditButtonClick(state, action: PayloadAction<number>) {
      state.isClick = true;
      state.editIndex = action.payload;
      state.tasks.name = state.tasks.name[action.payload];
    },
    onEditTask(state, action: PayloadAction<string>) {
      state.tasks.name = action.payload;
    },
    editTask(state) {
      const updateTodo = state.todos.map((task, index) =>
        index === state.editIndex ? state.tasks.name : task
      );
      state.todos = updateTodo;
      state.isClick = false;
      state.editIndex = null;
    },
  },
});

export const {
  addTodo,
  addTask,
  deleteTask,
  onEditButtonClick,
  onEditTask,
  editTask,
} = ToDo.actions;
export default ToDo.reducer;

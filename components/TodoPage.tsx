"use client";
import {
  addTask,
  addTodo,
  deleteTask,
  editTask,
  onEditButtonClick,
  onEditTask,
} from "@/providers/redux/Todo";
import { RootState } from "@/providers/redux/store";
import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// icons
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
import { MdOutlineFileDownloadDone } from "react-icons/md";

export default function TodoPage() {
  const todos = useSelector((state: RootState) => state.ToDo.todos);
  const taskes = useSelector((state: RootState) => state.ToDo.tasks);
  const click = useSelector((state: RootState) => state.ToDo.isClick);
  const editIndex = useSelector((state: RootState) => state.ToDo.editIndex);

  const dispatch = useDispatch();

  const handleTaskSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(taskes.name));
  };

  const handleEditTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editTask());
  };

  console.log(todos);
  return (
    <>
      {/* input field */}
      <form
        className="w-full flex justify-center p-2"
        onSubmit={handleTaskSubmit}
      >
        <div className="flex w-[20%] gap-2">
          <input
            type="text"
            name="name"
            value={taskes.name}
            disabled={click ? true : false}
            onChange={(e) => dispatch(addTask(e.target.value))}
            className="text-black w-[70%]"
            placeholder="provide task name..."
          />

          <button
            className="text-black text-xs bg-slate-200 p-1 rounded-md"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>

      {/* ********
       */}

      {/* task list section */}
      <div className="w-full flex  items-center justify-center">
        {todos.length === 0 && (
          <p className="text-gray-500">no task for today</p>
        )}

        {todos.length !== 0 && (
          <div className="w-1/2 flex flex-col gap-2">
            {todos.map((todo: string, idx) => (
              <div
                className="bg-[#6c44443b] flex px-2 py-1.5 font-semibold rounded-md justify-center"
                key={idx}
              >
                {click && editIndex === idx ? (
                  <form className="w-full flex" onSubmit={handleEditTask}>
                    <input
                      type="text"
                      name="name"
                      value={taskes.name}
                      onChange={(e) => dispatch(onEditTask(e.target.value))}
                      className="text-white bg-inherit pt-0 w-[80%] border mb-1"
                    />
                    <button
                      type="submit"
                      className="w-[20%]  flex items-center justify-center"
                    >
                      <MdOutlineFileDownloadDone size={25} color="yellow" />
                    </button>
                  </form>
                ) : (
                  <>
                    <p className="w-[80%]">{todo}</p>
                    <div className="flex gap-5">
                      <button onClick={() => dispatch(deleteTask(idx))}>
                        <RiDeleteBin5Line size={25} />
                      </button>
                      <button onClick={() => dispatch(onEditButtonClick(idx))}>
                        <RiEdit2Fill size={25} />
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

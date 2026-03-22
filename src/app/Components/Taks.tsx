"use client";

import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

type Task = {
  id: number;
  title: string;
};

export default function Tasks() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (!taskText.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: taskText,
    };

    setTasks((prev) => [...prev, newTask]);
    setTaskText("");
  };

  return (
    <div className="tasks flex flex-col justify-center items-center mt-10 gap-3">
      <h1 className="text-[#1F2937] text-4xl font-semibold">
        Welcome To ToDaily
      </h1>

      <p className="text-[#6B7280] text-xl">
        Organize your tasks and boost your productivity
      </p>

      <div className="inputsection mt-5 flex items-center gap-3">
        <Input
          type="text"
          placeholder="Enter your Task here"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="border border-[#6B7280] p-3 rounded-xl outline-none w-[500px] text-[#53575f]"
        />

        <Button
          text="Add"
          type="button"
          onClick={addTask}
          className="bg-[#5B3EF0] text-white px-6 py-3 rounded-xl"
        />
      </div>

      <div className="w-full max-w-[700px] mt-8 flex flex-col gap-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white shadow-sm rounded-xl px-4 py-3 text-[#1F2937]"
          >
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
}
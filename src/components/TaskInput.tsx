import React, { useState } from "react";
import { Input } from "./ui/input";
import { useTaskStore } from "@/store/useTaskStore";
import { Button } from "./ui/button";

export const TaskInput = () => {
  const [text, setText] = useState("");
  const [priority, setPrority] = useState("medium");
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text, priority);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <select
        defaultValue="medium"
        name="priority"
        value={priority}
        onChange={(e) => setPrority(e.target.value)}
        className="border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>

      <Input
        type="text"
        placeholder="할 일 작성하기"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1"
      ></Input>
      <Button type="submit">추가</Button>
    </form>
  );
};

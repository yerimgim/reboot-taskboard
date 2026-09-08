import type { FilterStatus, Task } from "@/types/task";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type TaskState = {
  tasks: Task[];
  filter: FilterStatus;
};

type TaskStoreActions = {
  addTask: (title: Task["title"], priority?: Task["priority"]) => void;
};

type TaskStore = TaskState & TaskStoreActions;

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      filter: "all",
      addTask: (title, priority = "medium") =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: crypto.randomUUID(),
              title,
              completed: false,
              priority,
              createdAt: Date.now(),
            },
          ],
        })),
    }),
    {
      name: "task-storage",
    },
  ),
);

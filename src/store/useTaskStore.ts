import type { FilterStatus, Task } from "@/types/task";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type TaskState = {
  tasks: Task[];
  filter: FilterStatus;
};

type TaskStoreActions = {
  addTask: (title: Task["title"], priority?: Task["priority"]) => void;
  setFilter: (filter: FilterStatus) => void;
  toggleTask: (id: Task["id"]) => void;
  deleteTask: (id: Task["id"]) => void;
};

type TaskStore = TaskState & TaskStoreActions;

const getValidTasks = (tasks: Task[]) =>
  (tasks || []).filter((task) => Boolean(task && task.id));

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      filter: "all",
      addTask: (title, priority = "medium") =>
        set((state) => ({
          tasks: [
            ...getValidTasks(state.tasks),
            {
              id: crypto.randomUUID(),
              title,
              completed: false,
              priority,
              createdAt: Date.now(),
            },
          ],
        })),
      setFilter: (filter) => set({ filter }),
      toggleTask: (id) =>
        set((state) => ({
          tasks: getValidTasks(state.tasks).map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task,
          ),
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: getValidTasks(state.tasks).filter((task) => task.id !== id),
        })),
    }),
    {
      name: "task-storage",
    },
  ),
);

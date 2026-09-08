export type Priority = "low" | "medium" | "high";
export type FilterStatus = "all" | "active" | "completed";

export type Task = {
  id: string;
  title: string;
  completed: boolean;
  priority: Priority;
  createdAt: number;
};

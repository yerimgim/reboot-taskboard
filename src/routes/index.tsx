import { TaskFilter } from "@/components/TaskFilter";
import { TaskInput } from "@/components/TaskInput";
import { TaskList } from "@/components/TaskList";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IndexComponent,
});

function IndexComponent() {
  return (
    <div className="flex flex-col gap-2">
      <TaskInput />
      <TaskFilter />
      <TaskList />
    </div>
  );
}

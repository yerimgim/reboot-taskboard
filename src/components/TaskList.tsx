import { useTaskStore } from "@/store/useTaskStore";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";

export const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const filter = useTaskStore((state) => state.filter);
  const toggleTask = useTaskStore((state) => state.toggleTask);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  if (filteredTasks.length === 0) {
    return <div>할 일을 등록해주세요</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      {filteredTasks.map((task) => (
        <Card key={task.id} className="transition-all">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => toggleTask(task.id)}
              />
              <span
                className={`text-sm ${
                  task.completed ? "line-through" : "font-medium"
                }`}
              >
                {task.title}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

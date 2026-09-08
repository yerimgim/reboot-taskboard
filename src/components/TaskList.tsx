import { useTaskStore } from "@/store/useTaskStore";
import { Card, CardContent } from "./ui/card";

export const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  return (
    <div>
      {tasks.map((task) => (
        <Card key={task.id}>
          <CardContent>
            <div>{task.title}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

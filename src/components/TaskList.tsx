import { useTaskStore } from "@/store/useTaskStore";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CalendarFold, Pencil, X } from "lucide-react";
import { useState } from "react";
import { Input } from "@base-ui/react";
import type { Task } from "@/types/task";

export const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const filter = useTaskStore((state) => state.filter);
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const updateTaskTitle = useTaskStore((state) => state.updateTaskTitle);

  const [editingId, setEditingId] = useState("");
  const [editTitle, setEditTitle] = useState("");

  const handleStartEdit = (task: Task) => {
    setEditTitle(task.title);
    setEditingId(task.id);
  };

  const handleSave = (id: string) => {
    if (!editTitle.trim()) return;
    updateTaskTitle(id, editTitle);
    setEditingId("");
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  if (filteredTasks.length === 0) {
    return (
      <div className="flex items-center justify-center text-sm m-4">
        <CalendarFold strokeWidth={1.25} /> 할 일 찾아보기
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {filteredTasks.map((task) => {
        const isEditing = editingId === task.id;

        return (
          <Card key={task.id} className="transition-all">
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => toggleTask(task.id)}
                />
                {isEditing ? (
                  <>
                    <Badge
                      variant={
                        task.priority === "high" ? "destructive" : "outline"
                      }
                    >
                      {task.priority.slice(0, 4)}
                    </Badge>
                    <Input
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSave(task.id);
                      }}
                      autoFocus
                      className="h-8 text-sm"
                    />
                  </>
                ) : (
                  <span
                    onDoubleClick={() => handleStartEdit(task)}
                    className={`text-sm flex items-center gap-2 ${
                      task.completed ? "line-through" : "font-medium"
                    }`}
                    title="수정"
                  >
                    <Badge
                      variant="outline"
                      className={`${
                        task.priority === "high"
                          ? "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300"
                          : task.priority === "medium"
                            ? "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300"
                            : task.priority === "low"
                              ? ""
                              : ""
                      }`}
                    >
                      {task.priority.slice(0, 4)}
                    </Badge>
                    {task.title}
                  </span>
                )}
              </div>
              <div className="flex items-center">
                {isEditing ? (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSave(task.id)}
                      className="h-8 px-2 text-xs text-primary"
                    >
                      저장
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="ghost"
                      className=""
                      onClick={() => handleStartEdit(task)}
                    >
                      <Pencil />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => deleteTask(task.id)}
                    >
                      <X />
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

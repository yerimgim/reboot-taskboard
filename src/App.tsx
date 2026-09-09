import { ThemeProvider } from "@/components/ThemeProvider";
import { useThemeStore } from "@/store/useThemeStore";
import { Button } from "@/components/ui/button";
import { TaskInput } from "./components/TaskInput";
import { Bell, Moon, Sun, Trash } from "lucide-react";
import { TaskList } from "./components/TaskList";
import { TaskFilter } from "./components/TaskFilter";
import { useTaskStore } from "./store/useTaskStore";

function App() {
  const { theme, setTheme } = useThemeStore();
  const clearCompleted = useTaskStore((state) => state.clearCompleted);
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <ThemeProvider>
      <main className="min-h-screen text-foreground bg-background">
        <div className="mx-auto max-w-md px-4 py-12">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="flex items-center gap-0.5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              <Bell /> 오늘의 할 일
            </h1>
            <Button
              variant="outline"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              테마 색상:
              {theme === "dark" ? <Moon /> : <Sun />}
            </Button>
          </div>

          <div className="flex flex-col gap-2">
            <TaskInput />
            <TaskFilter />
            <TaskList />
            {tasks.length === 0 || (
              <div className="flex justify-end pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearCompleted}
                  className="text-xs hover:text-foreground"
                >
                  <Trash />
                  완료된 항목 삭제
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;

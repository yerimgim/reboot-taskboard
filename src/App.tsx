import { ThemeProvider } from "@/components/ThemeProvider";
import { useThemeStore } from "@/store/useThemeStore";
import { Button } from "@/components/ui/button";
import { TaskInput } from "./components/TaskInput";
import { Moon, Sun } from "lucide-react";

function App() {
  const { theme, setTheme } = useThemeStore();

  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground transition-colors">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Reboot taskboard
        </h1>
        <p>Task & Theme 관리</p>
        <Button
          variant="outline"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          테마 색상: {theme.toUpperCase()}
          {theme === "dark" ? <Moon /> : <Sun />}
        </Button>

        <TaskInput />
      </div>
    </ThemeProvider>
  );
}

export default App;

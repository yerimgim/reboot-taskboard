import { ThemeProvider } from "@/components/ThemeProvider";
import { useThemeStore } from "@/store/useThemeStore";
import { Button } from "@/components/ui/button";
function App() {
  const { theme, setTheme } = useThemeStore();
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col transition-colors">
        <h1>Reboot taskboard</h1>
        <p>theme 동작 테스트</p>
        <Button
          variant="outline"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          버튼 theme {theme.toUpperCase()}
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;

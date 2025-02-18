import "./App.css";
import { AppRouter } from "./providers/router";
import { Suspense, useEffect, useState } from "react";
import { Navbar } from "@/widgets/Navbar";

export type Theme = "light" | "dark";
function App() {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    document.body.className = `app_${theme}_theme`;
  }, [theme]);
  const chnageTheme = (theme: Theme) => {
    let newTheme: Theme;
    switch (theme) {
      case "light":
        newTheme = "dark";
        break;
      case "dark":
        newTheme = "light";
        break;
      default:
        newTheme = "light";
    }
    setTheme(newTheme);
  };

  return (
    <div className={`app app_${theme}_theme`}>
      <Navbar chnageTheme={() => chnageTheme(theme)} />
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </div>
  );
}

export default App;

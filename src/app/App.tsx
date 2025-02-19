import "./App.css";
import { AppRouter } from "./providers/router";
import { Suspense, useEffect, useState } from "react";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar/ui/Sidebar";

export type Theme = "light" | "dark";
function App() {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    document.body.className = `app_${theme}_theme`;
  }, [theme]);
  const changeTheme = (theme: Theme) => {
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
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <div className={"contentWrapper"}>
          <Sidebar changeTheme={() => changeTheme(theme)} />
          <AppRouter  />
        </div>
      </Suspense>
    </div>
  );
}

export default App;

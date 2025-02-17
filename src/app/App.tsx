import "./App.css";
import { AppRouter } from "./providers/router";
import { Suspense, useEffect, useState } from "react";
import { Navbar } from "@/widgets/Navbar";

function App() {
  
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.className = `app_${theme}_theme`;
  }, [theme]);

  return (
    <div className={`app app_${theme}_theme`}>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </div>
  );
}

export default App;

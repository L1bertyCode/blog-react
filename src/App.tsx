import { Link } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./app/providers/router";
import { routeConfig } from "./shared/config/routeConfig/routeConfig";

function App() {
  return (
    <div className="app">
      {routeConfig.map((r) => (
        <Link to={r.path}>{r.name}</Link>
      ))}
      <AppRouter />
    </div>
  );
}

export default App;

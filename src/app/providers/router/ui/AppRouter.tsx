import { NotFoundPage } from "@/pages/NotFoundPage";
import { routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map((r) => (
        <Route
          key={r.path}
          path={r.path}
          element={<div className={"page"}>{r.element}</div>}
        />
      ))}
      <Route
        path="*"
        className={"page"}
        element={<NotFoundPage />}
      />
    </Routes>
  );
};

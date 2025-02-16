import { ArticlesPage } from "@/pages/ArticlesPage";
import { MainPage } from "@/pages/MainPage";
import { ReactNode } from "react";

// const routePaths = {
//   main: "/",
//   articles: "/articles",
// } as const;

export const routeConfig: { path: string; name: string; element: ReactNode }[] =
  [
    { path: "/", element: <MainPage />, name: "Home" },
    { path: "/articles", element: <ArticlesPage />, name: "Articles" },
  ];

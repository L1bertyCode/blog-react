import { ReactNode } from "react";
import s from "./MainLayout.module.scss";
interface MainLayoutProps {
  header: ReactNode;
  navbar: ReactNode;
  main: ReactNode;
  footer?: ReactNode;

  className?: string;
}
export const MainLayout = ({ className }: MainLayoutProps) => {
  return (
    <div className={s.mainLayout}>
      <div>MainLayout</div>
    </div>
  );
};

import { ReactNode } from "react";
import s from "./MainLayout.module.scss";
interface MainLayoutProps {
  header: ReactNode;
  sidebar: ReactNode;
  main: ReactNode;
  footer?: ReactNode;

  className?: string;
}
export const MainLayout = ({
  header,
  main,
  sidebar,
  footer,
  className,
}: MainLayoutProps) => {
  return (
    <div className={s.mainLayout}>
      <>{header}</>
      <div>
        <>{sidebar}</>
        <>{main}</>
      </div>
    </div>
  );
};

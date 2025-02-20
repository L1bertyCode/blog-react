import { classNames } from "@/shared/lib/classNames";
import s from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import { routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { useState } from "react";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher/ThemeSwitcher";
import { LanguageSwitcher } from "@/shared/ui/LanguageSwitcher/LanguageSwitcher";
interface SidebarProps {
  changeTheme: () => void;
  className?: string;
}
export const Sidebar = ({ changeTheme, className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div
      className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [
        className,
      ])}
    >
      <nav>
        {routeConfig.map((r) => (
          <Link
            key={r.path}
            to={r.path}
          >
            {r.name}
          </Link>
        ))}
      </nav>
      <AppButton
        variant="clearInverted"
        onClick={() => setCollapsed((prev) => !prev)}
      >
        {collapsed ? ">" : "<"}
      </AppButton>
      <div className={s.switchers}>
        <ThemeSwitcher changeTheme={changeTheme} />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

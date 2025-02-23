import { classNames } from "@/shared/lib/classNames";
import s from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import { routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { useState } from "react";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher/ThemeSwitcher";
import { LanguageSwitcher } from "@/shared/ui/LanguageSwitcher/LanguageSwitcher";
import { AppFlex } from "@/shared/ui/AppFlex/AppFlex";
interface SidebarProps {
  changeTheme: () => void;
  className?: string;
}
export const Sidebar = ({ changeTheme, className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <AppFlex
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      gap={20}
      className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [
        className,
      ])}
    >
      <AppFlex
        flexDirection="column"
        BlockElement={"nav"}
      >
        {routeConfig.map((r) => (
          <Link
            key={r.path}
            to={r.path}
          >
            {r.name}
          </Link>
        ))}
      </AppFlex>
      <AppButton
        variant="clearInverted"
        onClick={() => setCollapsed((prev) => !prev)}
      >
        {collapsed ? ">" : "<"}
      </AppButton>
      <AppFlex
        flexDirection="column"
        className={s.switchers}
      >
        <ThemeSwitcher changeTheme={changeTheme} />
        <LanguageSwitcher />
      </AppFlex>
    </AppFlex>
  );
};

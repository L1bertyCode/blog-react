import { routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { classNames } from "@/shared/lib/classNames";
import s from "./Navbar.module.scss";
import { NavbarItem } from "../NavbarItem/NavbarItem";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import ThemeSvg from "@/shared/assets/icons/theme.svg";

interface NavbarProps {
  chnageTheme: () => void;
  className?: string;
}
export const Navbar = ({ chnageTheme, className }: NavbarProps) => {
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <AppButton
        onClick={chnageTheme}
        variant="clearInverted"
      >
        <ThemeSvg />
      </AppButton>
      {routeConfig.map((r) => (
        <NavbarItem
          key={r.path}
          route={r}
        />
      ))}
    </div>
  );
};

import { routeConfig } from "@/shared/config/routeConfig/routeConfig";
import s from "./Navbar.module.scss";
import { NavbarItem } from "../NavbarItem/NavbarItem";
interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={s.navbar}>
      {routeConfig.map((r) => (
        <NavbarItem
          key={r.path}
          route={r}
        />
      ))}
    </div>
  );
};

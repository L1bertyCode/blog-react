import { routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { classNames } from "@/shared/lib/classNames";
import s from "./Navbar.module.scss";
import { Link } from "react-router-dom";

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      {routeConfig.map((r) => (
        <Link
          key={r.path}
          to={r.path}
        >
          {r.name}
        </Link>
      ))}
    </div>
  );
};

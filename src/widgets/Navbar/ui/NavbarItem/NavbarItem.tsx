import { Link } from "react-router-dom";
import s from "./NavbarItem.module.scss";
import { ReactNode } from "react";
interface NavbarItemProps {
  route: { path: string; name: string; element: ReactNode };
  className?: string;
}
export const NavbarItem = ({ route, className }: NavbarItemProps) => {
  return (
    <Link
      className={s.navbarItem}
      to={route.path}
    >
      {route.name}
    </Link>
  );
};

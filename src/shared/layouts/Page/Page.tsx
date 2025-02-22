import s from "./Page.module.scss";
import { ReactNode } from "react";
interface PageProps {
  children: ReactNode;
  className?: string;
}
export const Page = ({ children, className }: PageProps) => {
  return <div className={`${s.page} ${className}`}>{children}</div>;
};

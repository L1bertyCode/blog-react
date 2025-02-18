import { classNames } from "@/shared/lib/classNames";
import s from "./AppButton.module.scss";
import { ButtonHTMLAttributes, ReactNode } from "react";

type AppButtonVariant =
  | "clear"
  | "clearInverted"
  | "filled"
  | "filledInverted"
  | "outlined"
  | "outlinedInverted";
interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: AppButtonVariant;
  className?: string;
}
export const AppButton = ({
  children,
  variant = "clear",
  className,
  ...otherPross
}: AppButtonProps) => {
  return (
    <button
      {...otherPross}
      className={classNames(s.appButton, {}, [s[variant], className])}
    >
      {children}
    </button>
  );
};

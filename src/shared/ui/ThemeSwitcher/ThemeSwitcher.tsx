import { AppButton } from "@/shared/ui/AppButton/AppButton";
import ThemeSvg from "@/shared/assets/icons/theme.svg";
interface ThemeSwitcherProps {
  changeTheme: () => void;
}
export const ThemeSwitcher = ({ changeTheme }: ThemeSwitcherProps) => {
  return (
    <AppButton
      onClick={changeTheme}
    >
      <ThemeSvg />
    </AppButton>
  );
};

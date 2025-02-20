import { useTranslation } from "react-i18next";
import { AppButton } from "../AppButton/AppButton";

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const changeLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };
  return (
    <AppButton
      variant="clearInverted"
      onClick={changeLang}
    >
      {t("Lang")}
    </AppButton>
  );
};

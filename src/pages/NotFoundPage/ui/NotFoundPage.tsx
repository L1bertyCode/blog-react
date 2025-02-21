import { useTranslation } from "react-i18next";
import s from "./NotFoundPage.module.scss";
interface NotFoundPageProps {
  className?: string;
}
const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={s.notFoundPage}>
      <div>{t("NotFoundPage")}</div>
    </div>
  );
};

export default NotFoundPage;

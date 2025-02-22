import { useTranslation } from "react-i18next";
import s from "./NotFoundPage.module.scss";
import { Page } from "@/shared/layouts/Page/Page";
interface NotFoundPageProps {
  className?: string;
}
const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <Page className={s.notFoundPage}>
      <div>{t("NotFoundPage")}</div>
    </Page>
  );
};

export default NotFoundPage;

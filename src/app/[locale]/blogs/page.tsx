import { getTranslations } from "next-intl/server";

const page = async () => {
  const t = await getTranslations("homePage");

  return <div>{t("blogLink")}</div>;
};

export default page;

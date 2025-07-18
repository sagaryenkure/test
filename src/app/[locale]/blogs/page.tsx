import { getTranslations } from "next-intl/server";

export const BlogPage = async () => {
  const t = await getTranslations("homePage");

  return <div>{t("blogLink")}</div>;
};

export default BlogPage;

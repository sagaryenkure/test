import { Suspense } from "react";
import Product_Page from "./_components/ProductPage";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

const ProductSkeleton = () => {
  return (
    <li className="flex h-full animate-pulse flex-col items-center rounded-xl bg-white/10 p-4 text-center shadow-md">
      <div className="h-[320px] w-[320px] rounded-lg bg-gray-800" />
      <div className="mt-3 h-5 w-24 rounded bg-gray-700" />
      <div className="mt-2 h-4 w-32 rounded bg-gray-700" />
      <div className="mt-2 h-5 w-16 rounded bg-gray-700" />
      <div className="mt-4 h-8 w-24 rounded bg-gray-600" />
    </li>
  );
};

export default async function Home() {
  const t = await getTranslations("homePage");

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0c29] px-4 py-12 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <span className="mb-2 block text-sm font-medium text-gray-400">
          {t("homeLink")}
        </span>
        <h2 className="mb-4 text-4xl font-bold tracking-tight">{t("title")}</h2>
        <p className="mb-6 text-lg text-gray-300">{t("description")}</p>
        <Link
          href="/blogs"
          className="inline-block rounded bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
        >
          {t("blogLink")}
        </Link>
      </div>

      <div className="mt-12 flex justify-center">
        <Suspense fallback={<ProductSkeleton />}>
          <Product_Page />
        </Suspense>
      </div>
    </main>
  );
}

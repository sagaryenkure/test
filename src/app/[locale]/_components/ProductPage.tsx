import { api, HydrateClient } from "@/trpc/server";
import BuyButton from "./BuyButton";
import { getTranslations } from "next-intl/server";

const wait = (time = 2000) =>
  new Promise((resolve) => setTimeout(resolve, time));

export default async function Product_Page() {
  const t = await getTranslations("listSection");
  const products = await api.post.getProducts({ limit: 10 });

  //   await wait(5000);
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center gap-12 px-4 py-16">
          <h1>{t("title")}</h1>
          <p>{t("description")}</p>
          {/* Products */}
          <div className="w-full max-w-4xl">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {products?.map((p) => (
                <BuyButton key={p.id} p={p} />
              ))}
            </ul>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}

import { api, HydrateClient } from "@/trpc/server";
import BuyButton from "./_components/BuyButton";

export default async function Home() {
  const products = await api.post.getProducts({ limit: 10 });

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center gap-12 px-4 py-16">
          {/* Products */}
          <div className="w-full max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-semibold">
              Products ( {products?.length} items )
            </h2>
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

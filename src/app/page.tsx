import { Suspense } from "react";
import Product_Page from "./_components/ProductPage";

const ProductSkeleton = () => {
  return (
    <li className="flex h-full animate-pulse flex-col items-center rounded-xl p-4 text-center">
      <div className="h-[320px] w-[320px] rounded bg-black" />
      <div className="mt-2 h-5 w-24 rounded bg-black" />
      <div className="mt-1 h-4 w-32 rounded bg-black" />
      <div className="mt-1 h-5 w-16 rounded bg-black" />
      <div className="mt-3 h-8 w-24 rounded bg-black" />
    </li>
  );
};

export default function Home() {
  return (
    <>
      <h2 className="mb-4 text-center text-3xl font-semibold">Products</h2>
      <Suspense fallback={<ProductSkeleton />}>
        <Product_Page />;
      </Suspense>
    </>
  );
}

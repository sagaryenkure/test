"use client";

import type { Product } from "@/server/api/routers/post";
import React, { Suspense } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

const BuyButton = ({ p }: { p: Product }) => {
  return (
    <Suspense fallback={<div className="p-4">Loading...</div>}>
      <li className="flex flex-col items-center rounded-lg bg-white/10 p-4 text-center transition hover:bg-white/20">
        <Image
          src={p.image}
          alt={p.title}
          width={120}
          height={120}
          className="rounded"
        />
        <h3 className="mt-2 font-semibold">{p.model}</h3>
        <p className="text-sm text-gray-300">{p.title}</p>
        <p className="mt-1 font-bold text-white">${p.price}</p>

        <button onClick={() => toast.success(`buy the item ${p.title}`)}>
          Buy Now
        </button>
      </li>
    </Suspense>
  );
};

export default BuyButton;

"use client";

import { motion } from "framer-motion";
import type { Product } from "@/server/api/routers/post";
import Image from "next/image";
import toast from "react-hot-toast";

const BuyButton = ({ p }: { p: Product }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center rounded-lg bg-white/10 p-4 text-center transition hover:bg-white/20"
    >
      <Image
        src={p.image}
        alt={p.title}
        width={120}
        height={120}
        priority
        className="rounded"
      />
      <h3 className="mt-2 font-semibold">{p.model}</h3>
      <p className="text-sm text-gray-300">{p.title}</p>
      <p className="mt-1 font-bold text-white">${p.price}</p>

      <button
        onClick={() => toast.success(`Buy the item: ${p.title}`)}
        className="mt-2 rounded bg-white px-3 py-1 text-black hover:bg-gray-200"
      >
        Buy Now
      </button>
    </motion.li>
  );
};

export default BuyButton;

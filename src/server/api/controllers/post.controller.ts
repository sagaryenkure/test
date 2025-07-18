import type { Product } from "../routers/post";

type GetProductsParams = { limit: number };

const postController = {
  getProducts: async ({ limit }: GetProductsParams) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.in/api/products?limit=${limit}s&lang=jp`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = (await response.json()) as { products: Product[] };
      console.log("Fetching products:", data);
      return data.products;
    } catch (error) {
      console.error("Failed to fetch products:", error);
      return [];
    }
  },
};

export default postController;

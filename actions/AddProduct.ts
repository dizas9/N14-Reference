"use server";

import { revalidateTag } from "next/cache";

export const AddProductHandler = async (e: FormData) => {
  try {
    const productName = e.get("productName")?.toString();
    const price = e.get("price")?.toString();
    const category = e.get("category")?.toString();

    const response = await fetch(
      "https://66655ef3d122c2868e407779.mockapi.io/api/products/products",
      {
        method: "POST",
        body: JSON.stringify({
          productName,
          price,
          category,
        }),
        headers: {
          "content-type": "application/json",
        },
      }
    );

    console.log(response);
    revalidateTag("products");
  } catch (error: any) {
    console.log(error.message);
  }
};

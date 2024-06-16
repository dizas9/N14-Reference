"use client";

import { AddProductHandler } from "@/actions/AddProduct";
import HomeButton from "@/components/HomeButton";
import { ChangeEvent, FormEvent, useState } from "react";

export default function ClientAction() {
  const [product, setProduct] = useState({
    productName: " ",
    price: " ",
    category: " ",
  });

  const [loading , setLoading] = useState(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setProduct({ ...product, [e.target.name]: e.target.value });

  const onSubmithandler = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    const formData = new FormData();

    formData.append("productName", product.productName);
    formData.append("price", product.price);
    formData.append("category", product.category);

    await AddProductHandler(formData);
    setLoading(false);
  };
  return (
    <div>
      <form className="text-black" onSubmit={onSubmithandler}>
        <div className="">
          <input
            type="text"
            value={product.productName}
            name="productName"
            onChange={onChangeHandler}
            placeholder="Enter Product Name"
          />
        </div>

        <div className="my-1">
          <input
            type="text"
            value={product.price}
            name="price"
            onChange={onChangeHandler}
            placeholder="Enter Price"
          />
        </div>

        <div className="my-1">
          <input
            type="text"
            value={product.category}
            name="category"
            onChange={onChangeHandler}
            placeholder="Enter category"
          />
        </div>

        <button
          className="bg-green-800 px-2 py-0.5 shadow-[red] shadow-2xl"
          type="submit"
          disabled={loading}
        >
          {loading ? "wait..." : "Add"}
        </button>
      </form>
    </div>
  );
}

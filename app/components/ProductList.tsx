"use client";
import { useState } from "react";
import { ProductProps } from "../types/productTypes";

export default function ProductList({ product }: ProductProps) {
  const [click, SetClick] = useState(false);

  const clickHandler = () => {
    SetClick(!click);
  };

  return (
    <div className="flex w-2/3 flex-wrap">
      <button className={`${!click ? "" : "bg-red-500 text-white"}`} onClick={clickHandler}>Click</button>
      {product.map((item, idx) => (
        <div className="w-1/4 border" key={idx}>
          <p className="">{item.productName}</p>
          <p className="">{item.price}</p>
          <p className="">{item.category}</p>
          <p className="">{item.productDescription}</p>
        </div>
      ))}
    </div>
  );
}

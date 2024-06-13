"use client";

import { useEffect } from "react";
import { ProductProps } from "../types/productTypes";
import { animated, useSpring } from "@react-spring/web";

export default function ProductList({ product }: ProductProps) {
  const [spring, api] = useSpring(() => ({
    from: {
      x: 0,
    },
  }));



  useEffect(() => {
    api.start({
      from: { x: 0 },
      to: { x: 100 },
    });
  }, []);

  return (
    <>
      <animated.div
        className="flex w-2/3 flex-wrap"
        style={{...spring}}
      >
        {product.map((item, idx) => (
          <div className="w-1/4 border" key={idx}>
            <p className="">{item.productName}</p>
            <p className="">{item.price}</p>
            <p className="">{item.category}</p>
          </div>
        ))}
      </animated.div>
    </>
  );
}

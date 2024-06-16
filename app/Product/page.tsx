import Link from "next/link";

import ProductList from "../../components/ProductList";
import HomeButton from "../../components/HomeButton";
import FetchData from "@/libs/FetchData";

export default async function page() {
  const data = await FetchData();
  return (
    <div>
      <HomeButton />
      <ProductList product={data} />
    </div>
  );
}

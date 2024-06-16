import HomeButton from "../../components/HomeButton";
import ProductList from "../../components/ProductList";
import FetchData from "@/libs/FetchData";
import { AddProductHandler } from "@/actions/AddProduct";
import ClientAction from "../ClientAction/page";

export default async function ServerAction() {
  const data = await FetchData();

  return (
    <div>
      <HomeButton />

      <form action={AddProductHandler} className="text-black">
        <div className="">
          <input
            type="text"
            name="productName"
            placeholder="Enter Product Name"
          />
        </div>

        <div className="my-1">
          <input type="text" name="price" placeholder="Enter Price" />
        </div>

        <div className="my-1">
          <input type="text" name="category" placeholder="Enter category" />
        </div>

        <button className="bg-green-800 px-2 py-0.5 shadow-[red] shadow-2xl">
          Add{" "}
        </button>
      </form>

      {/* client form */}

      <h1>Client form</h1>

      <ClientAction />

      {/* Product list */}
      <ProductList product={data} />
    </div>
  );
}

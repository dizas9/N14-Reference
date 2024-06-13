import { revalidateTag } from "next/cache";
import HomeButton from "../components/HomeButton";
import ProductList from "../components/ProductList";
import FetchData from "../libs/FetchData";

export default async function ServerAction() {
//   const products = await fetch(
//     "https://mockapi.io/projects/66655ef3d122c2868e40777a",
//     {
//       cache: "no-cache",
//       next: {
//         tags: ["products"],
//       },
//     }
//   );

  const data = await FetchData();

  // server action function
  const Add = async (e: FormData) => {
    "use server";
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
    revalidateTag("products")
  };
  return (
    <div>
      <HomeButton />

      {/* Server Action form */}

      <form action={Add} className="text-black">
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

      {/* Product list */}
      <ProductList product={data} />
    </div>
  );
}

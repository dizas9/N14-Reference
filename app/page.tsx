import Link from "next/link";
import FetchData from "./libs/FetchData";


export default async function Home() {

 
  return (
   <div className="flex flex-col">
    helo

    <Link href={"/Product"} className="border p-1 w-fit">
    Product
    </Link>
   </div>
  );
}

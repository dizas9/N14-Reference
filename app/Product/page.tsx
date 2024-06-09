import Link from 'next/link';
import FetchData from '../libs/FetchData';
import ProductList from '../components/ProductList';


export default async function page() {
     const data = await FetchData();
     console.log(data);
  return (
    <div>
      <Link href={"/"} className="border p-1 w-fit">
        home
      </Link>
      <ProductList product={data}/>
    </div>
  );
}

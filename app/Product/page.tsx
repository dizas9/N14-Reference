import Link from 'next/link';
import FetchData from '../libs/FetchData';
import ProductList from '../components/ProductList';
import HomeButton from '../components/HomeButton';


export default async function page() {
     const data = await FetchData();
  return (
    <div>
     <HomeButton/>
      <ProductList product={data}/>
    </div>
  );
}

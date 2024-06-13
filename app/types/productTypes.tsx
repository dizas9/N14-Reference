 interface Product {
  category: string;
  image: string;
  productName: string;
  price:string;
  id:string;
}

export interface ProductProps{
product: Product[];
}
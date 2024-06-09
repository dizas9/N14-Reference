 interface Product {
  category: string;
  image: string;
  productName: string;
  productDescription: string;
  price:string;
  id:string;
}

export interface ProductProps{
product: Product[];
}
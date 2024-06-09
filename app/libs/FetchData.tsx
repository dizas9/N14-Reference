export default async function FetchData(){
    const res = await fetch(
      "https://66655ef3d122c2868e407779.mockapi.io/api/products/products",{
        cache:"no-cache",
      }
    );

    return res.json();
}
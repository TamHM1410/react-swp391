import ProductFilter from "./product-filter";
import ProductList from "./product-list";
import { useQuery } from "@tanstack/react-query";
import { get_products } from "../../apis/products";
const ProductView = () => {
  const {data,isLoading}=useQuery({
    queryKey:['products'],
    queryFn:async()=>{
      const res=await get_products()
        return res
      
    }
  })

  console.log(data,'ta')
  return (
    <div class="grid grid-cols-[20%_80%] gap-4 w-full h-[100vh] px-5 ">
      <div >
        <ProductFilter/>
      </div>
      <div >
        <ProductList data={data}/>
      </div>
    </div>
  );
};

export default ProductView

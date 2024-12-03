import DashBoardLayout from "../../../../layouts/DashboardLayout";
import BreadcrumbProduct from "./breadcumb";
import AddNewProdcuct from "./AddNewProduct";
import ProductTable from "./product-table";
import { useQuery } from "@tanstack/react-query";
import { get_products } from "../../../../apis/products";
import { Link } from "react-router-dom";

const ProductManageMentview = () => {
  
  const {data,isLoading}=useQuery({
    queryKey:['products'],
    queryFn:async ()=>{
      const res=await get_products()
      return res
    }
  })

  
  return (
    <>
    <DashBoardLayout>
        <div>
          <BreadcrumbProduct />

          <div>
            <button className="btn" type="button">
              <Link to='/dashboard/product/addnew'>            Thêm mới sản phẩm

              </Link>

            </button>
          </div>

          {/* <AddNewProdcuct /> */}

          <ProductTable  data={data}/>
        </div>
    </DashBoardLayout>
    </>
  );
};
    
export default ProductManageMentview;

import DashBoardLayout from "../../../../layouts/DashboardLayout";
import BreadcrumbProduct from "./breadcumb";
import AddNewProdcuct from "./AddNewProduct";
import ProductTable from "./product-table";
import { useQuery } from "@tanstack/react-query";
import { get_products } from "../../../../apis/products";
import { Link } from "react-router-dom";

const ProductManageMentview = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await get_products();
      console.log(res,'res')
      return res;
    },
  });

  return (
    <>
      <DashBoardLayout>
        <div>
          <BreadcrumbProduct />

          <div>
            <Link to="/dashboard/product/addnew" className="btn"> Thêm mới sản phẩm</Link>
          </div>

          {/* <AddNewProdcuct /> */}

          <ProductTable data={data}  />
        </div>
      </DashBoardLayout>
    </>
  );
};

export default ProductManageMentview;

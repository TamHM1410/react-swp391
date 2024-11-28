import DashBoardLayout from "../../../../layouts/DashboardLayout";
import BreadcrumbProduct from "./breadcumb";
import AddNewProdcuct from "./AddNewProduct";
import ProductTable from "./product-table";

const ProductManageMentview = () => {
  return (
    <>
    <DashBoardLayout>
        <div>
          <BreadcrumbProduct />

          {/* <AddNewProdcuct /> */}

          <ProductTable />
        </div>
    </DashBoardLayout>
    </>
  );
};
    
export default ProductManageMentview;

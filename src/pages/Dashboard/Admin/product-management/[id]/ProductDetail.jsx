import DashBoardLayout from "../../../../../layouts/DashboardLayout";
import Breadcrum from "../../../../../components/Breadcrum";
import ProductDetailContent from "./ProductDetail-content";

import ProductViewDetail from "./Product-view";
import { useSearchParams } from "react-router-dom";

const title = ["Dashboard", "Product", "Details"];
const ProductDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const action = searchParams.get("action");

  return (
    <>
      <DashBoardLayout>
        {action === "edit" && (
          <>
            <div className="py-2 text-[28px]">Edit</div>
            <Breadcrum title={title} />
            <ProductDetailContent />
          </>
        )}

        {action === "view" && (
          <>
            <div className="py-2 text-[28px]">View</div>
            <Breadcrum title={title} />
            <ProductViewDetail />
          </>
        )}
      </DashBoardLayout>
    </>
  );
};

export default ProductDetail;

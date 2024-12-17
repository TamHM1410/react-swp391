import DashBoardLayout from "../../../../../layouts/DashboardLayout";
import Breadcrum from "../../../../../components/Breadcrum";
import ProductDetailContent from "./ProductDetail-content";

import ProductViewDetail from "./Product-view";
import { useSearchParams } from "react-router-dom";
import useStoreProducts from "../../../../../stores/products-store";
import { useQuery } from "@tanstack/react-query";
import { Pencil, Cog } from "lucide-react";
import { useState } from "react";

const title = ["Dashboard", "Quản lý", "Sản phẩm", "Chi tiết"];
const ProductDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const action = searchParams.get("action");
  const [isEdit, setEdit] = useState(false);

  const { currentProduct, selectedId } = useStoreProducts();

  return (
    <>
      <DashBoardLayout>
        {/* <>
            <div className="py-2 text-[28px]"></div>
            <Breadcrum title={title} />
          </> */}

        <>
          <div className="py-2 text-[28px]">Sản phẩm</div>
          <Breadcrum title={title} />
          <div>
            <button
              className="btn "
              type="button"
              onClick={() => setEdit(!isEdit)}
            >
              <Cog />
            </button>
          </div>
          {isEdit ? <ProductDetailContent /> : <ProductViewDetail />}
        </>
      </DashBoardLayout>
    </>
  );
};

export default ProductDetail;

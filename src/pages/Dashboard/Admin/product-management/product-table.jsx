import Table from "../../../../components/Table";
const title=["Id","Tên","Mô tả"," Kho","Giá","Hình ảnh"]
import { paths } from "../../../../config/endPoint";

const ProductTable = ({data=[]}) => {
  
  return (
    <div className="px-5 py-5 w-full h-full">
      <Table  title={title} data={data} paths="/dashboard/product" />
    </div>
  );
};

export default ProductTable;

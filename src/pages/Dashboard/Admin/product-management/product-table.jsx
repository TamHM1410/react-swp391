import Table from "../../../../components/Table";
const title=["Id","Name","Price","Description","Status"]

const ProductTable = () => {
  const data=[{
    id:1,
    name:'Kit stem',
    price:20000,
    description:'Kit stem cho tre em',
    status:'Success'
  }]
  return (
    <div className="px-5 py-5 w-full h-full">
      <Table  title={title} data={data}/>
    </div>
  );
};

export default ProductTable;

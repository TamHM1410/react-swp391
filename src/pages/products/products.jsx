import ProductFilter from "./product-filter";
import ProductList from "./product-list";
const ProductView = () => {
  return (
    <div class="grid grid-cols-[20%_80%] gap-4 w-full h-[100vh] px-5 ">
      <div >
        <ProductFilter/>
      </div>
      <div >
        <ProductList/>
      </div>
    </div>
  );
};

export default ProductView

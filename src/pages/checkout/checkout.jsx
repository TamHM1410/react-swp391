import CartTable from "./cart-table";
import CheckoutSummary from "./checkout-summary";

const Checkout = () => {
  return (
    <div className="w-full h-[100vh] p-20  px-40 flex flex-col">
      <div className="font-bold text-[24px]">Thanh toán</div>
      <div className=" py-5">
        <ul className="steps">
          <li className="step  step-neutral">Kiểm tra giỏ hàng</li>
          <li className="step   ">Thanh toán</li>
        </ul>
      </div>
      <div className="grid grid-cols-12 gap-4 pt-10">
        <div className="col-span-8">

         < CartTable/>
        </div>
        <div className="col-span-4">
         <CheckoutSummary/>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

import CartTable from "./cart-table";
import CheckoutSummary from "./checkout-summary";
import { useSearchParams } from "react-router-dom";
import PaymentMethod from "./payment-method";
import CheckoutInformation from "./checkout-information";

const Checkout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const step = searchParams.get("step");

  return (
    <div className="w-full h-[100vh] p-20  px-40 flex flex-col">
      <div className="font-bold text-[24px]">Thanh toán</div>
      <div className=" py-5">
        <ul className="steps">
          <li className={`step  ${step === "0" && "step-neutral"} `}>
            Kiểm tra giỏ hàng
          </li>
          <li className={`step  ${step === "1" && "step-neutral"} `}>
            Thông tin nhận hàng
          </li>

          <li className={`step  ${step === "2" && "step-neutral"} `}>
            Thanh toán
          </li>
        </ul>
      </div>
      {step !== "1" && (
        <div className="grid grid-cols-12 gap-4 pt-10">
          <div className="col-span-8">
            {step === "0" && <CartTable />}
            {step === "1" && <CheckoutInformation />}

            {step === "2" && <PaymentMethod />}
          </div>
          <div className="col-span-4">
            <CheckoutSummary step={step} />
          </div>
        </div>
      )}

      {step === "1" && (
        <div className="grid grid-cols-12 gap-4 pt-10">
          <div className="col-span-12">
            <CheckoutInformation />
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;

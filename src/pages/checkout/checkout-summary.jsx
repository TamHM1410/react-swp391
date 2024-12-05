import { useNavigate } from "react-router-dom";
import useCart from "../../stores/cart-store";
import { checkOut } from "../../apis/cart";
import toast from "react-hot-toast";
const CheckoutSummary = ({ step }) => {
  let navigate = useNavigate();
  const { total, cart, current_infor, paymentMethod } = useCart();

  console.log(paymentMethod, "paument");
  const handleClick = async () => {
    if(step==='0'){
      navigate("/checkout?step=1");


    }else if(step==='1'){
      navigate("/checkout?step=2");

    }
    if(step==='2'){
      try {
        const payload = current_infor;
        payload["cart_product"] = cart?.cart_product.map((item) => {
          return {
            stem_id: item.stem_id._id,
            quantity: item.quantity,
          };
        });
        payload["payment_method"] = paymentMethod;
        const res = await checkOut(payload);
        if (res && paymentMethod === "VNPAY") {
          window.location.href = res.data;
        }
        toast.success(res.message)
        navigate('/')

      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl ">
        <div className="card-body pt-20">
          <h2 className="card-title">Chi tiết đơn hàng</h2>
          <div className="flex justify-between">
            <div> Tạm tính </div>
            <div> {total} </div>
          </div>
          <div className="flex justify-between">
            <div> Giảm giá </div>
            <div> 0 </div>
          </div>
          <div className="flex justify-between">
            <div> Tổng tiền </div>
            <div> {total}</div>
          </div>
        </div>
        <div className="w-full">
          <button
            className="btn btn-neutral w-full mt-10 "
            onClick={handleClick}
          >
            {step !== "2" ? "Tiếp tục" : "Thanh toán"}
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutSummary;

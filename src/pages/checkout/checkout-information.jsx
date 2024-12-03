import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; // Thư viện để tạo validation schema
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../stores/cart-store";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Định nghĩa schema validation với yup
const schema = yup
  .object({
    ship_address: yup.string().required("Địa chỉ giao hàng là bắt buộc"),
    description: yup.string().required("Mô tả là bắt buộc"),
    phone: yup
      .string()
      
      .required("Số điện thoại là bắt buộc"),
  })
  .required();

const CheckoutInformation = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const step = searchParams.get("step");
  const { total,updateInfor } = useCart();
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Hàm xử lý submit
  const onSubmit = (data) => {
    console.log(data,'data')
    updateInfor(data)
    navigate('/checkout?step=2')
    // Có thể thêm logic ở đây để xử lý thông tin gửi đi
    // Ví dụ: Gửi dữ liệu lên API hoặc chuyển hướng tới trang thanh toán
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">   <div className="grid grid-cols-12 gap-4 pt-10">
        <div className="col-span-8 card bg-base-100 shadow-xl">
          <div className="overflow-x-auto card-body">
            <div className="font-bold">Thông tin nhận hàng</div>

            {/* Địa chỉ giao hàng */}
            <div>
              <label htmlFor="ship_address" className="block">
                Địa chỉ giao hàng
              </label>
              <input
                id="ship_address"
                type="text"
                {...register("ship_address")}
                className="input input-bordered w-full"
              />
              {errors.ship_address && (
                <span className="text-red-500 text-sm">
                  {errors.ship_address.message}
                </span>
              )}
            </div>

            {/* Mô tả */}
            <div>
              <label htmlFor="description" className="block">
                Mô tả
              </label>
              <input
                id="description"
                type="text"
                {...register("description")}
                className="input input-bordered w-full"
              />
              {errors.description && (
                <span className="text-red-500 text-sm">
                  {errors.description.message}
                </span>
              )}
            </div>

            {/* Số điện thoại */}
            <div>
              <label htmlFor="phone" className="block">
                Số điện thoại
              </label>
              <input
                id="phone"
                type="text"
                {...register("phone")}
                className="input input-bordered w-full"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>
              <div className="py-5 cursor-pointer font-bold">
        <Link to={`/checkout?step=${step-1}`}>Trở về </Link>
         </div>

            {/* Nút Submit */}
          </div>
        </div>

        <div className="col-span-4">
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body pt-20">
              <h2 className="card-title">Chi tiết đơn hàng</h2>
              <div className="flex justify-between">
                <div>Tạm tính</div>
                <div>{total}</div>
              </div>
              <div className="flex justify-between">
                <div>Giảm giá</div>
                <div>0</div>
              </div>
              <div className="flex justify-between">
                <div>Tổng tiền</div>
                <div>{total}</div>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full">
                <button type="submit" className="btn btn-neutral w-full mt-10">
                  {step !== "2" ? "Tiếp tục" : "Thanh toán"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div></form>
   
    </div>
  );
};

export default CheckoutInformation;

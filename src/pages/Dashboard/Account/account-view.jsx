import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import { updateUserInfor } from "../../../apis/user";

import toast from "react-hot-toast";
const AccountView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const user = useAuth();

  const [isEdit, setIsEdit] = useState(false);

  const onSubmit = async(data) => {
    try{
      console.log("Form Data:", data);
    const res =await updateUserInfor(data)
    localStorage.setItem("user", JSON.stringify(res.data));
    toast.success(res.message)
    setIsEdit(!isEdit)

    }catch(error){
      toast.error(error.message)
    }

  };

  useEffect(() => {
    if (user) {
      setValue("username", user.username);
      setValue("email", user.email);
      setValue("phoneNumber", user.phoneNumber || ""); // Nếu có phoneNumber thì set giá trị, nếu không thì để trống
      setValue("address", user.address || ""); // Nếu có address thì set giá trị, nếu không thì để trống
    }
  }, [user, setValue]);

  return (
    <div className="w-full py-10 flex items-center justify-center">
      <div className="card bg-base-100 w-[500px] shadow-xl">
        <figure>
          <img
            src="https://vianimetwixtor.com/wp-content/uploads/2024/04/Killua.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="w-full flex justify-center relative bottom-16">
          <div className="avatar">
            <div className="w-36 rounded-full">
              <img src={user.avatar} />
            </div>
          </div>
        </div>
        <div className="card-body pb-10 px-10">
          <h2 className="card-title py-2">Chào, {user.name}</h2>

          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="py-5 pb-8">
              <label className="input input-bordered flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow py-2"
                    placeholder="Tên đăng nhập"
                    {...register("username", {
                      required: "Tên đăng nhập là bắt buộc.",
                    })}
                    disabled={!isEdit}
                  />
                </div>
                {errors.username && (
                  <span className="text-red-500 text-sm">
                    {errors.username.message}
                  </span>
                )}
              </label>
            </div>

            <div className="pb-10">
              <label className="input input-bordered flex flex-col gap-2 py-2 pt-2">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2a2 2 0 0 1 2 2v2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6V4a2 2 0 0 1 2-2zm-1 4V4a1 1 0 0 0-2 0v2h2zM4 8v12h16V8H4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    disabled={!isEdit}
                    type="text"
                    className="grow py-2"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email là bắt buộc.",
                      minLength: {
                        value: 8,
                        message: "Mật khẩu phải ít nhất 6 ký tự.",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="pb-10">
              <label className="input input-bordered flex flex-col gap-2 py-2 pt-2">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3h20v2H2zM2 7h20v2H2zM2 11h20v2H2zM2 15h20v2H2zM2 19h20v2H2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    disabled={!isEdit}
                    type="text"
                    className="grow py-2"
                    placeholder="Số điện thoại"
                    {...register("phoneNumber", {
                      required: "Số điện thoại là bắt buộc.",
                    })}
                  />
                </div>
                {errors.phoneNumber && (
                  <span className="text-red-500 text-sm">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </label>
            </div>

            <div className="pb-10">
              <label className="input input-bordered flex flex-col gap-2 py-2 pt-2">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4h16v16H4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    disabled={!isEdit}
                    type="text"
                    className="grow py-2"
                    placeholder="Địa chỉ"
                    {...register("address", {
                      required: "Địa chỉ là bắt buộc.",
                    })}
                  />
                </div>
                {errors.address && (
                  <span className="text-red-500 text-sm">
                    {errors.address.message}
                  </span>
                )}
              </label>
            </div>

            <div className="card-actions w-full pt-2">
              {!isEdit ? (
                <button
                  className="btn btn-primary w-full"
                  onClick={() => setIsEdit(!isEdit)}
                >
                  Chỉnh sửa
                </button>
              ) : (
                <>
                  <div className="flex gap-2 justify-between justify-center">
                    <button
                      onClick={() => setIsEdit(!isEdit)}
                      className="btn btn-primary w-full"
                    >
                      Hủy bỏ
                    </button>
                    <button type="submit" className="btn btn-primary w-full">
                      Cập nhật
                    </button>
                  </div>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountView;

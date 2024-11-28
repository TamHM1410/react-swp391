import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <div className="w-full h-[100vh] flex items-center item justify-center">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="h-[30vh]">
          <img src="https://ohstem.vn/wp-content/uploads/2024/09/robot-ORC-K2-tai-OhStem-5.jpg" alt="Shoes" />
        </figure>
        <div className="card-body p-10">
          <h2 className="card-title py-2">Đăng nhập ngay</h2>

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
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    className="grow py-2"
                    placeholder="Mật khẩu"
                    {...register("password", {
                      required: "Mật khẩu là bắt buộc.",
                      minLength: {
                        value: 6,
                        message: "Mật khẩu phải ít nhất 6 ký tự.",
                      },
                    })}
                  />
                </div>
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            <div className="card-actions w-full pt-2">
              <button type="submit" className="btn btn-primary w-full">
                Đăng nhập
              </button>
            </div>
          </form>

          <div className="w-full flex  justify-center">Hoặc</div>
          <div className=" flex flex-col justify-center w-full">
            <div className="w-full flex justify-center">
              Chưa có tài khoản ?
            </div>
            <div className="w-full flex justify-center font-bold cursor-pointer">
              <Link to="/auth/register">Đăng ký ngay</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;

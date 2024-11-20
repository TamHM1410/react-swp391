import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AccountView = () => {
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
              <img src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/464871103_2279771145721810_6509777599102787999_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=BvoLa97aEFMQ7kNvgGkWCuI&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=AzO5CWnGYGarTwhetFbVexk&oh=00_AYBzcOXDdFjlH-08FtE1MEQp4LcdlHWC3LVH81-oWZYRcw&oe=6743DA49" />
            </div>
          </div>
        </div>
        <div className="card-body pb-10 px-10">
          <h2 className="card-title py-2">Chào Tâm </h2>

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
                    value={"tam"}
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
                    type="text"
                    value={"hunhminhtam@gmail.com"}
                    className="grow py-2"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email  là bắt buộc.",
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

            <div className="card-actions w-full pt-2">
              <button type="submit" className="btn btn-primary w-full" disabled>
                Chỉnh sửa
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountView;

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

////
import { create_course, update_course } from "../../../../apis/course";
import { get_course_cate } from "../../../../apis/course";

// Định nghĩa schema validation bằng yup
const schema = yup.object().shape({
  title: yup
    .string()
    .required("Tên khóa học là bắt buộc")
    .min(3, "Tên khóa học phải có ít nhất 3 ký tự"),
  description: yup
    .string()
    .required("Mô tả ngắn là bắt buộc")
    .min(10, "Mô tả ngắn phải có ít nhất 10 ký tự"),
  stem_id: yup
    .string()
    .required("Vui lòng chọn sản phẩm tương ứng với  khóa học"),
});

const CreateCourseForm = ({ course, updateCourseForm }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["cate_product"],
    queryFn: () => get_course_cate(),
  });

  const navigate = useNavigate();

  console.log(course, "course");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    if (course._id === null) {
      const res = await create_course(data);
      if (res) {
        updateCourseForm(res);
        navigate("/dashboard/courses/create?step=1");
      }
    }
    const res = await update_course(data, course._id);
    if (res) {
      updateCourseForm(res);
      navigate("/dashboard/courses/create?step=1");
    }
  };

  useEffect(() => {
    if (course) {
      setValue("description", course.description || "");
      setValue("title", course.title || "");
      setValue("stem_id", course.stem_id || "");
    }
  }, [course, setValue]);
  return (
    <>
      <div className="w-full h-auto p-10 px-5 flex justify-center">
        <div className="px-10 card shadow-2xl py-5 w-[80%]">
          <div>
            <div className="text-lg font-bold">Thêm khóa học mới</div>
            <div className="text-[14px] font-light mb-5">
              Tiêu đề, mô tả ngắn, ....
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Tên khóa học */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Tên khóa học
              </label>
              <input
                type="text"
                className={`input input-bordered w-full ${
                  errors.title ? "input-error" : ""
                }`}
                placeholder="Nhập tên khóa học"
                {...register("title")}
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            {/* Mô tả ngắn */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Mô tả ngắn
              </label>
              <textarea
                className={`textarea textarea-bordered w-full ${
                  errors.description ? "textarea-error" : ""
                }`}
                placeholder="Mô tả ngắn về khóa học"
                {...register("description")}
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Loại khóa học (Select) */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Sản phẩm</label>
              <select
                className={`select select-secondary w-full max-w-xs ${
                  errors.category ? "select-error" : ""
                }`}
                {...register("stem_id")}
              >
                <option disabled selected>
                  Chọn sản phẩm cho khóa học
                </option>
                {Array.isArray(data) &&
                  data.length > 0 &&
                  data.map((item) => {
                    return <option value={item._id}>{item.stem_name}</option>;
                  })}
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* Nút hành động */}
            <div className="flex gap-2 mt-4 justify-end">
              <button type="submit" className="btn btn-primary">
               {course?._id  ? 'Tiếp' :' Tạo khóa học'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateCourseForm;

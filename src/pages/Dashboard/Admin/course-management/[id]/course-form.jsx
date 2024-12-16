import React from "react";
import { useEffect } from "react";

//  @hook
import { useForm, useFieldArray } from "react-hook-form";
import { update_course } from "../../../../../apis/course";
import { useNavigate } from "react-router-dom";


/// asset
import toast from "react-hot-toast";




const CourseForm = ({data=[]}) => {

  const navigate=useNavigate()


 
  
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      lesson_id: [
        {
          title: "",
          lesson_material: "",
          lesson_videoUrl: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "lesson_id",
  });


  const onSubmit = async (data) => {
    try{
        const res=await update_course(data,data?._id)
        if(res){
            toast.success('Cập nhật thành công')
            navigate('/dashboard/courses')

        }

    }catch(error){
        console.log(error)

    }
  };



 useEffect(()=>{
    setValue('title',data?.title)
    setValue('_id',data?._id)

    setValue('description',data?.description)
    setValue("lesson_id", data?.lesson_id)


 },[data,setValue])

 

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 bg-gray-100 shadow-lg rounded-xl space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <label className="block text-sm font-semibold text-gray-800">Tên khóa học</label>
        <input
          {...register("title", { required: "Tên khóa học là bắt buộc." })}
          placeholder="Nhập tên khóa học"
          className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.title && <p className="mt-2 text-sm text-red-600">{errors.title.message}</p>}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <label className="block text-sm font-semibold text-gray-800">Mô tả khóa học</label>
        <textarea
          {...register("description", { required: "Mô tả khóa học là bắt buộc." })}
          placeholder="Nhập mô tả khóa học"
          className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        ></textarea>
        {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description.message}</p>}
      </div>

      <h3 className="text-lg font-bold text-gray-900">Danh sách bài học</h3>
      {fields.map((item, index) => (
        <div key={item.id} className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-800">Tên bài học</label>
            <input
              {...register(`lesson_id.${index}.title`, {
                required: "Tên bài học là bắt buộc."
              })}
              placeholder="Nhập tên bài học"
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {errors.lesson_id?.[index]?.title && (
              <p className="mt-2 text-sm text-red-600">{errors.lesson_id[index].title.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800">Tài liệu bài học</label>
            <input
              {...register(`lesson_id.${index}.lesson_material`, {
                required: "URL tài liệu là bắt buộc.",
                pattern: {
                  value: /^https?:\/\/.+$/i,
                  message: "Định dạng URL không hợp lệ."
                }
              })}
              placeholder="Nhập URL tài liệu bài học"
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {errors.lesson_id?.[index]?.lesson_material && (
              <p className="mt-2 text-sm text-red-600">{errors.lesson_id[index].lesson_material.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800">URL video bài học</label>
            <input
              {...register(`lesson_id.${index}.lesson_videoUrl`, {
                required: "URL video là bắt buộc.",
                pattern: {
                  value: /^https?:\/\/.+$/i,
                  message: "Định dạng URL không hợp lệ."
                }
              })}
              placeholder="Nhập URL video bài học"
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {errors.lesson_id?.[index]?.lesson_videoUrl && (
              <p className="mt-2 text-sm text-red-600">{errors.lesson_id[index].lesson_videoUrl.message}</p>
            )}
          </div>

          <button
            type="button"
            onClick={() => remove(index)}
            className="mt-4 inline-flex items-center text-sm font-medium text-red-600 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Xóa bài học
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ title: "", lesson_material: "", lesson_videoUrl: "" })}
        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        Thêm bài học
      </button>

      <div className="flex gap-5">
      <button
          onClick={()=>navigate('/dashboard/courses')}
          type="button"
          className="mt-8 w-full inline-flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-md text-lg font-semibold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Trở về
        </button>
        <button
          type="submit"
          className="mt-8 w-full inline-flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-md text-lg font-semibold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Gửi
        </button>
        
      </div>
    </form>
  );
};

export default CourseForm;

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDropzone } from "react-dropzone";

// Định nghĩa schema validation bằng yup
const schema = yup.object().shape({
  title: yup
    .string()
    .required("Tên bài học là bắt buộc")
    .min(3, "Tên bài học phải có ít nhất 3 ký tự"),
  lesson_videoUrl: yup
    .string()
    .required("URL video là bắt buộc")
    .url("URL video không hợp lệ"),
  course_id: yup
    .string()
    .required("Khóa học ID là bắt buộc"),
});

const CreateLessonForm = () => {
  const [lessons, setLessons] = useState([
    { title: "", lesson_videoUrl: "", lesson_material: null, course_id: "" },
  ]);

  // Đảm bảo khai báo handleSubmit đúng cách
  const {
    register,
    handleSubmit, // Đảm bảo handleSubmit được khai báo từ useForm
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*,application/pdf,video/*", // Bạn có thể tùy chỉnh định dạng cho phép tải lên
    onDrop: (acceptedFiles) => {
      setLessonMaterial(acceptedFiles[0]);
    },
  });

  const handleAddLesson = () => {
    setLessons([
      ...lessons,
      { title: "", lesson_videoUrl: "", lesson_material: null, course_id: "" },
    ]);
  };

  const handleRemoveLesson = (index) => {
    const updatedLessons = lessons.filter((_, i) => i !== index);
    setLessons(updatedLessons);
  };

  const onSubmit = (data) => {
    console.log("Tất cả bài học: ", data);
    // Xử lý dữ liệu tất cả bài học (gửi API hoặc lưu trữ)
  };

  return (
    <div className="w-full h-auto p-10 px-5 flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="px-10 card shadow-2xl py-5 w-[80%]">
        {lessons.map((lesson, index) => (
          <div key={index} className="w-full h-auto p-10 px-5 flex justify-center">
            <div className="px-10 card shadow-2xl py-5 w-[80%]">
              <div>
                <div className="text-lg font-bold">Thêm bài học {index + 1}</div>
                <div className="text-[14px] font-light mb-5">
                  Tên bài học, video, tài liệu,...
                </div>
              </div>

              <div>
                {/* Tên bài học */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Tên bài học</label>
                  <input
                    type="text"
                    className={`input input-bordered w-full ${
                      errors?.title ? "input-error" : ""
                    }`}
                    placeholder="Nhập tên bài học"
                    {...register(`lessons[${index}].title`)}
                  />
                  {errors?.title && (
                    <p className="text-red-500 text-sm">{errors?.title?.message}</p>
                  )}
                </div>

                {/* URL Video */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">URL Video</label>
                  <input
                    type="text"
                    className={`input input-bordered w-full ${
                      errors?.lesson_videoUrl ? "input-error" : ""
                    }`}
                    placeholder="Nhập URL video"
                    {...register(`lessons[${index}].lesson_videoUrl`)}
                  />
                  {errors?.lesson_videoUrl && (
                    <p className="text-red-500 text-sm">{errors?.lesson_videoUrl?.message}</p>
                  )}
                </div>

                {/* Tài liệu bài học (Upload file) */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Tải tài liệu</label>
                  <div
                    {...getRootProps({
                      className: "border-dashed border-2 border-gray-300 p-4 text-center cursor-pointer",
                    })}
                  >
                    <input {...getInputProps()} />
                    <p>Kéo và thả tệp vào đây, hoặc nhấn để chọn tệp</p>
                  </div>
                  {lesson.lesson_material && (
                    <p className="mt-2 text-sm">Tệp đã chọn: {lesson.lesson_material.name}</p>
                  )}
                </div>

                {/* Course ID */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">ID Khóa học</label>
                  <input
                    type="text"
                    className={`input input-bordered w-full ${
                      errors?.course_id ? "input-error" : ""
                    }`}
                    placeholder="Nhập ID khóa học"
                    {...register(`lessons[${index}].course_id`)}
                  />
                  {errors?.course_id && (
                    <p className="text-red-500 text-sm">{errors?.course_id?.message}</p>
                  )}
                </div>

                {/* Nút hành động */}
                <div className="flex gap-2 mt-4 justify-end">
                  <button type="button" className="btn btn-danger" onClick={() => handleRemoveLesson(index)}>
                    Xóa bài học
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Nút thêm bài học */}
        <div className="flex gap-2 mt-4 justify-end">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleAddLesson}
          >
            Thêm bài học
          </button>
          <button type="submit" className="btn btn-primary" disabled={lessons.length >0 ? false :true}>
            Tạo  bài học
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateLessonForm;

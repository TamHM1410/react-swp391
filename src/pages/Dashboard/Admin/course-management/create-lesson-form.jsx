import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDropzone } from "react-dropzone";
import { create_new_lessoon } from "../../../../apis/lesson";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

// Schema validation
const schema = yup.object().shape({
  lessons: yup.array().of(
    yup.object().shape({
      title: yup
        .string()
        .required("Tên bài học là bắt buộc")
        .min(3, "Tên bài học phải có ít nhất 3 ký tự"),
      lesson_videoUrl: yup
        .string()
        .required("URL video là bắt buộc")
        .url("URL không hợp lệ"),
      lesson_material: yup.mixed().required("Tài liệu bài học là bắt buộc"),
    })
  ),
});

const CreateLessonForm = ({ course }) => {
  const navigate = useNavigate();

  const [lessons, setLessons] = useState([
    {
      title: "",
      lesson_videoUrl: "",
      lesson_material: null,
      lesson_material_preview: null,
    },
  ]);

  const [isLoading, setIsloading] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      lessons,
    },
  });

  const onSubmit = async (data) => {
    setIsloading(true);
    if (Array.isArray(data.lessons) && data.lessons.length > 0) {
      data.lessons.forEach(async (item) => {
        let form = new FormData();
        form.append("files[]", item?.lesson_material);
        form.append("lesson_videoUrl", item.lesson_videoUrl);
        form.append("course_id", course._id);
        form.append("title", item.title);

        let res = await create_new_lessoon(form);
      });
      toast.success("Tạo khóa học thành công");
      setIsloading(false);
      navigate("/dashboard/courses");
    }
  };

  const handleAddLesson = () => {
    setLessons([
      ...lessons,
      {
        title: "",
        lesson_videoUrl: "",
        lesson_material: null,
        lesson_material_preview: null,
      },
    ]);
  };

  const handleRemoveLesson = (index) => {
    const updatedLessons = lessons.filter((_, i) => i !== index);
    setLessons(updatedLessons);
  };

  useEffect(() => {
    if (course) {
      setValue("course_id", course._id || "");
    }
  }, [course, setValue]);

  return (
    <>
      <div className="w-full p-10 px-5 flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="py-5 w-[80%]">
          {lessons.map((lesson, index) => (
            <div key={index} className="px-10 card shadow-2xl py-5 w-full mb-6">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Tên bài học
                </label>
                <input
                  type="text"
                  {...register(`lessons.${index}.title`)}
                  className={`input input-bordered w-full ${
                    errors?.lessons?.[index]?.title ? "input-error" : ""
                  }`}
                  placeholder="Nhập tên bài học"
                />
                {errors?.lessons?.[index]?.title && (
                  <p className="text-red-500 text-sm">
                    {errors.lessons[index].title.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  URL Video
                </label>
                <input
                  type="text"
                  {...register(`lessons.${index}.lesson_videoUrl`)}
                  className={`input input-bordered w-full ${
                    errors?.lessons?.[index]?.lesson_videoUrl
                      ? "input-error"
                      : ""
                  }`}
                  placeholder="Nhập URL video"
                />
                {errors?.lessons?.[index]?.lesson_videoUrl && (
                  <p className="text-red-500 text-sm">
                    {errors.lessons[index].lesson_videoUrl.message}
                  </p>
                )}
              </div>

              <Controller
                name={`lessons.${index}.lesson_material`}
                control={control}
                render={({ field }) => {
                  const { getRootProps, getInputProps } = useDropzone({
                    accept: "image/*,application/pdf",
                    onDrop: (acceptedFiles) => {
                      const file = acceptedFiles[0];
                      field.onChange(file);
                      setLessons((prevLessons) => {
                        const updatedLessons = [...prevLessons];
                        updatedLessons[index].lesson_material = file;
                        updatedLessons[index].lesson_material_preview =
                          URL.createObjectURL(file);
                        return updatedLessons;
                      });
                    },
                  });

                  return (
                    <div className="mb-4 h-auto">
                      <label className="block text-sm font-medium mb-1">
                        Tải tài liệu
                      </label>
                      <div
                        {...getRootProps({
                          className:
                            "border-dashed border-2 p-4 text-center cursor-pointer",
                        })}
                      >
                        <input {...getInputProps()} />
                        <p>Kéo và thả tệp hoặc nhấn để chọn</p>
                      </div>
                      {errors?.lessons?.[index]?.lesson_material && (
                        <p className="text-red-500 text-sm">
                          {errors.lessons[index].lesson_material.message}
                        </p>
                      )}
                      {lesson.lesson_material && (
                        <div className="mt-2 text-sm">
                          <p>Tệp đã chọn: {lesson.lesson_material.name}</p>
                        </div>
                      )}
                      {lesson.lesson_material_preview && (
                        <div className="mt-2 h-auto">
                          <p>Xem trước:</p>
                          <iframe
                            src={lesson.lesson_material_preview}
                            width="100%"
                            height="auto"
                            title={`preview-${lesson.lesson_material.name}`}
                          />
                        </div>
                      )}
                    </div>
                  );
                }}
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleAddLesson}
                >
                  Thêm bài học
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleRemoveLesson(index)}
                >
                  Xóa bài học
                </button>
              </div>
            </div>
          ))}

          <div className="flex gap-2 mt-4 justify-end">
            <Link to={"/dashboard/courses/create?step=0"} className="btn"> Trở về</Link>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading === true ? (
                <span className="loading loading-bars loading-lg"></span>
              ) : (
                " Tạo bài học"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateLessonForm;

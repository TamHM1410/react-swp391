import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import Breadcrum from "../../../../components/Breadcrum";
import DashBoardLayout from "../../../../layouts/DashboardLayout";
import { uploadFile } from "../../../../apis/products";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../../../apis/categories";
import { create_product } from "../../../../apis/products";
import toast from "react-hot-toast";
const title = ["Dashboard", "Product", "Add New"];

const AddNewProduct = () => {
  const { register, handleSubmit, setValue, watch, reset } = useForm();

  const [files, setFiles] = useState([]);
  const [option, setOption] = useState("");
  const [thumbImage, setThumbImage] = useState(null);
  const [stemImage, setStemImage] = useState(null);
  const [isUploadImage, setLoadingImage] = useState(false);
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await getCategories();

      return res;
    },
  });

  // Gán files vào form data bằng useEffect
  // useEffect(() => {
  //   setValue("images", files);
  // }, [files, setValue]);

  const onDrop = async (acceptedFiles) => {
    // Tạo preview cho các file
    const updatedFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );

    setLoadingImage(true);

    // Tạo FormData để gửi đi
    const formData = new FormData();
    formData.append("stem_name", data.stem_name);

    // Append file vào FormData dưới dạng file (chứ không phải URL)
    updatedFiles.forEach((file) => {
      formData.append("files[]", file); // Đảm bảo là file Blob, không phải URL
    });

    // Gửi FormData qua API
    try {
      const res = await uploadFile(formData); // Gửi FormData chứa file Blob
      if (res.data && Array.isArray(res.data) && res.data.length > 0) {
        setThumbImage(res.data[0]?.thumb_url);
        const listImage = res.data.map((item) => {
          return item?.image_url;
        });
        setStemImage(listImage);
        // Cập nhật danh sách file vào state
        setFiles((prev) => [...prev, ...updatedFiles]);
        setLoadingImage(false);
      }
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  const handleRemoveFile = (file) => {
    setFiles((prev) => prev.filter((f) => f !== file));
  };

  const handleRemoveAll = () => {
    setFiles([]);
  };
  const handleClear = () => {
    reset();
    handleRemoveAll();
    setValue("");
    setThumbImage(null);
    setThumbImage(null);
  };

  const onSubmit = async (data) => {
    try {
      data["thumb_image"] = thumbImage;
      data["stem_image"] = stemImage;
      console.log("Form Data:", data); // Dữ liệu form bao gồm tên sản phẩm, giá cả, mô tả và danh sách files
      const res = await create_product(data);
      if (res) {
        toast.success("Tạo sản phẩm thành công");
        handleClear();
      }
    } catch (error) {
      console.log(error,'err')
      toast.error(error.message);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  return (
    <DashBoardLayout>
      <Breadcrum title={title} />
      <div className="w-full h-auto p-10 px-5 flex justify-center">
        <div className="px-10 card shadow-2xl py-5 w-[80%]">
          <div>
            <div className="text-lg font-bold">Thêm mới sản phẩm</div>
            <div className="text-[14px] font-light mb-5">
              Tiêu đề, mô tả ngắn, hình ảnh, ....
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Tên sản phẩm */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Tên sản phẩm
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("stem_name", { required: true })}
              />
            </div>

            {/* Giá cả */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Giá cả</label>
              <input
                type="number"
                className="input input-bordered w-full"
                {...register("stem_price", { required: true })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Số lượng</label>
              <input
                type="number"
                className="input input-bordered w-full"
                {...register("stock", { required: true, max: 9000, min: 0 })}
              />
            </div>

            {/* Mô tả ngắn */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Mô tả ngắn
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                {...register("stem_description", { required: true })}
              />
            </div>

            {/* Loại sản phẩm (Select) */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Sản phẩm</label>

              <select
                className="select select-secondary w-full max-w-xs"
                {...register("stem_category", { required: true })} // Đăng ký với react-hook-form
              >
                <option disabled selected>
                  Chọn sản phẩm tương ứng khóa học
                </option>
                {data &&
                  Array.isArray(data) &&
                  data.length > 0 &&
                  data.map((item, index) => {
                    return (
                      <option key={index} value={item?._id}>
                        {item?.category_name}
                      </option>
                    );
                  })}
              </select>
            </div>

            {/* Upload Images */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Images</label>
              <div
                {...getRootProps({
                  className:
                    "border-dashed border-2 border-gray-300 p-4 text-center cursor-pointer",
                })}
              >
                <input {...getInputProps()} />
                <p>Drag and drop files here, or click to select files</p>
              </div>
              {isUploadImage && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="loading loading-infinity loading-lg"></span>
                </div>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {files.map((file, index) => (
                  <div key={index} className="relative w-24 h-24">
                    <img
                      src={file.preview}
                      alt="preview"
                      className="w-full h-full object-cover rounded-md"
                    />
                    <button
                      onClick={() => handleRemoveFile(file)}
                      className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-sm"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Nút hành động */}
            <div className="flex gap-2 mt-4 justify-end">
              <button
                type="button"
                onClick={handleRemoveAll}
                className="btn btn-outline"
              >
                Xóa
              </button>
              <button type="submit" className="btn btn-primary">
                Tạo sản phẩm
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default AddNewProduct;

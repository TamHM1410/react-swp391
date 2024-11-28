import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import Breadcrum from "../../../../components/Breadcrum";
import DashBoardLayout from "../../../../layouts/DashboardLayout";
const title = ["Dashboard", "Product", "Add New"];

const AddNewProduct = () => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [files, setFiles] = useState([]);

  // Gán files vào form data bằng useEffect
  useEffect(() => {
    setValue("images", files);
  }, [files, setValue]);

  const onDrop = (acceptedFiles) => {
    const updatedFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setFiles((prev) => [...prev, ...updatedFiles]);
  };

  const handleRemoveFile = (file) => {
    setFiles((prev) => prev.filter((f) => f !== file));
  };

  const handleRemoveAll = () => {
    setFiles([]);
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data); // Dữ liệu form bao gồm tên sản phẩm, giá cả, mô tả và danh sách files
    console.log("Uploaded Files:", files);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  return (
    <DashBoardLayout>
      <Breadcrum title={title}/>
      <div className="w-full h-auto p-10 px-5 flex justify-center">
        <div className="px-10 card shadow-2xl py-5 w-[80%]">
          <div>
            <div className="text-lg font-bold">Details</div>
            <div className="text-[14px] font-light mb-5">
              Title, short description, image, etc.
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
                {...register("productName", { required: true })}
              />
            </div>

            {/* Giá cả */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Giá cả</label>
              <input
                type="number"
                className="input input-bordered w-full"
                {...register("price", { required: true })}
              />
            </div>

            {/* Mô tả ngắn */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Mô tả ngắn
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                {...register("description", { required: true })}
              />
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
                Remove all
              </button>
              <button type="submit" className="btn btn-primary">
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default AddNewProduct;

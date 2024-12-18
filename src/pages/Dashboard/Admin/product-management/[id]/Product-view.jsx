import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import useStoreProducts from "../../../../../stores/products-store";
import { useQuery, useQueries } from "@tanstack/react-query";
import { getCategories } from "../../../../../apis/categories";
import {
  get_stem_by_id,
  uploadFile,
  update_product_id,
} from "../../../../../apis/products";
import { Pencil } from "lucide-react";
import toast from "react-hot-toast";

const ProductViewDetail = () => {
  const { register, handleSubmit, setValue, watch } = useForm();

  ///
  const imageListRef = useRef([]);

  const [files, setFiles] = useState([]);
  const [listImg, setListImg] = useState([]);
  const [editImage, setEditImage] = useState(false);
  const [thumbImage, setThumbImage] = useState(null);
  const [stemImage, setStemImage] = useState(null);
  const [cateList, setCateList] = useState(null);

  const location = useLocation();
  const { id } = useParams();

  // Fetch data product detail từ API
  const { data, isLoading } = useQuery({
    queryKey: ["product_detail"],
    queryFn: async () => {
      const res = await get_stem_by_id(id);
      const cate = await getCategories();
      setCateList(cate);
      imageListRef.current = res.stem_image;
      setListImg(res.stem_image);
      return res;
    },
  });

  // Gán files vào form data bằng useEffect

  // Gán giá trị từ API vào form khi data thay đổi
  useEffect(() => {
    if (data) {
      setValue("stem_name", data.stem_name);
      setValue("stem_price", data.stem_price);
      setValue("stock", data.stock);
      setValue("stem_category", data.stem_category?._id);

      setValue("stem_description", data.stem_description);
    }
  }, [data, setValue]);

  // Xử lý drop files vào
  const onDrop = async (acceptedFiles) => {
    // Tạo preview cho các file
    const updatedFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );

    // Cập nhật danh sách file vào state
    setFiles((prev) => [...prev, ...updatedFiles]);

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
      console.log(res, "resccc");
      if (res && res.data) {
        const resLisImage = res.data.map((item) => item.image_url);
        if (Array.isArray(imageListRef.current)) {
          imageListRef.current.push(resLisImage);
        }
      }
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  // Xử lý loại bỏ file khỏi danh sách
  const handleRemoveFile = (file) => {
    setFiles((prev) => prev.filter((f) => f !== file));
  };

  // Xử lý xóa tất cả file
  const handleRemoveAll = () => {
    setFiles([]); // Xóa tất cả file đã chọn
  };

  // Xử lý gửi form
  const onSubmit = async (data) => {
    // console.log("Uploaded Files:", files); // Dữ liệu file đã được chọn

    data["stem_image"] = imageListRef.current;
    // console.log("Form Data:", data);

    try {
      const res = await update_product_id(id, data);
      toast.success(res.message);
      handleRemoveAll();
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Dropzone configuration
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*", // Chỉ chấp nhận ảnh
    multiple: true,
  });

  console.log("data", data);

  return (
    <div className="w-full h-auto p-10 px-5 flex justify-center">
      <div className="px-10 card shadow-2xl py-5 w-[80%]">
        <div>
          <div className="text-lg font-bold">Sản phẩm</div>
        </div>

        <form>
          {/* Tên sản phẩm */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Tên sản phẩm
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              {...register("stem_name", { required: true })}
              disabled
            />
          </div>

          {/* Giá cả */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Giá cả</label>
            <input
              type="number"
              className="input input-bordered w-full"
              {...register("stem_price", { required: true })}
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Số lượng</label>
            <input
              type="number"
              className="input input-bordered w-full"
              {...register("stock", { required: true, max: 9000, min: 0 })}
              disabled
            />
          </div>

          {/* Mô tả ngắn */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Mô tả ngắn</label>
            <textarea
              className="textarea textarea-bordered w-full"
              {...register("stem_description", { required: true })}
              disabled
            />
          </div>

          {/* Loại sản phẩm (Select) */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Loại</label>

            <select
              className="select select-secondary w-full max-w-xs"
              {...register("stem_category", { required: false })} // Đăng ký với react-hook-form
              disabled
            >
              <option disabled selected>
                Chọn loại
              </option>
              {data &&
                Array.isArray(cateList) &&
                cateList.length > 0 &&
                cateList.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item?.category_name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="mb-4 ">
            <label className="block text-sm font-medium mb-1">Hình ảnh</label>
            <div className="flex gap-2 ">
              {listImg &&
                listImg.length > 0 &&
                listImg.map((item, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={item}
                        alt="ho"
                        loading="blur"
                        className="w-[200px] h-[200px]"
                      />
                    </div>
                  );
                })}
              <div className=" flex flex-wrap gap-2">
                {files.map((file, index) => (
                  <div key={index} className="relative w-[200px] h-[200px]">
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductViewDetail;

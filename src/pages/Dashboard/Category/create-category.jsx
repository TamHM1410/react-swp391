//  @react
import React from "react";

//  @hook
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";


//  @layout
import DashBoardLayout from "../../../layouts/DashboardLayout";

//  @component
import Breadcrum from "../../../components/Breadcrum";
import toast from "react-hot-toast";


//  @api
import { create_new_categories } from "../../../apis/categories";

//  @config
const breadTitle=["Danh mục sản phẩm","Thêm mới"]

const CreateNewCategory = () => {

  const queryClient=useQueryClient()


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Submitted Data:", data);
    try{
        const res= await  create_new_categories(data)
        if(res){
            console.log('res')
            toast.success("Tạo thành công")
            queryClient.invalidateQueries(['categories'])
            reset()


        }

    }catch(error){
        toast.error(error.message)

    }
  };

  return (
    <DashBoardLayout>
        <Breadcrum title={breadTitle}/>
         <form onSubmit={handleSubmit(onSubmit)} style={{  margin: "auto" }} className="w-full  px-20"> 
      {/* Trường category_name */}
      <div style={{ marginBottom: "16px" }} className="">
        <label htmlFor="category_name">Tên:</label>
        <input
          id="category_name"
          {...register("category_name", {
            required: "Category name is required",
            maxLength: {
              value: 50,
              message: "Category name must not exceed 50 characters",
            },
          })}
          placeholder="Nhập tên"
          style={{ display: "block", width: "100%", padding: "8px" }}
        />
        {errors.category_name && (
          <span style={{ color: "red" }}>{errors.category_name.message}</span>
        )}
      </div>

      {/* Trường category_description */}
      <div style={{ marginBottom: "16px" }}>
        <label htmlFor="category_description">    Mô tả    :</label>
        <textarea
          id="category_description"
          {...register("category_description", {
            required: "Category description is required",
            maxLength: {
              value: 100,
              message: "Category description must not exceed 100 characters",
            },
          })}
          placeholder="Nhập mô tả"
          rows={3}
          style={{ display: "block", width: "100%", padding: "8px" }}
        />
        {errors.category_description && (
          <span style={{ color: "red" }}>{errors.category_description.message}</span>
        )}
      </div>

      {/* Nút Submit */}
      <button type="submit" className="btn" style={{ padding: "8px 16px" }}>
      Tạo mới
      </button>
    </form>
    </DashBoardLayout>
   
  );
};

export default CreateNewCategory;

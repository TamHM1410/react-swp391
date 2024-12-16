import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { update_user } from '../../../../../apis/user';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const UserForm = ({data}) => {
    const navigate=useNavigate()
  // Validation Schema với Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Tên không được để trống')
      .min(3, 'Tên phải có ít nhất 3 ký tự'),
    
    username: Yup.string()
      .required('Tên người dùng không được để trống')
      .min(3, 'Tên người dùng phải có ít nhất 3 ký tự')
      .max(20, 'Tên người dùng không quá 20 ký tự'),
    
    email: Yup.string()
      .required('Email không được để trống')
,    
    phoneNumber: Yup.string()
      .nullable() // Cho phép giá trị null
      .matches(/^[0-9]{10}$/, 'Số điện thoại phải có 10 chữ số')
      .nullable(), // Cho phép số điện thoại null

    role: Yup.string().required('Vai trò không được để trống'),
  });

  // Sử dụng useForm với yupResolver để validate
  const { register, handleSubmit,setValue, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Xử lý khi form được submit
  const onSubmit = async(value) => {
    try{
        const res=await update_user(data._id,value)
        console.log(res,'res')
        if(res){
            navigate('/dashboard/user')
            toast.success('Thanh cong')
            
        }

    }catch(error){
        console.log('err',error)
    }
    console.log('Form value:', data._id);
  };

  console.log('sho[e',data?.role)
  
  
  useEffect(()=>{
    if(data){
        setValue('name',data?.name)
        setValue('username',data?.username)
        setValue('email',data?.email)
        setValue('phoneNumber',data?.phoneNumber)
        setValue('role',data?.role)



    }

  },[data])

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <h2 className="text-xl font-bold mb-4"> Người Dùng</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block">Tên</label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            disabled

          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block">Tên người dùng</label>
          <input
            {...register('username')}
            type="text"
            id="username"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            disabled
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block">Email</label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            disabled

          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block">Số điện thoại</label>
          <input
            {...register('phoneNumber')}
            type="text"
            id="phoneNumber"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            disabled

          />
          {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="role" className="block">Vai trò</label>
          <select
            {...register('role')}
            id="role"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          >
            <option value="USER">USER</option>

            <option value="SHIPPER">SHIPPER</option>
          </select>
          {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Lưu
        </button>
      </form>
    </div>
  );
};

export default UserForm;

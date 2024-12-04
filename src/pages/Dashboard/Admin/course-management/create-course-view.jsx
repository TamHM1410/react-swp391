import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Breadcrum from "../../../../components/Breadcrum";
import DashBoardLayout from "../../../../layouts/DashboardLayout";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useCreateCourseForm from "../../../../stores/courses-store";
import CreateCourseForm from "./create-course-form";
import CreateMultipleLessonsForm from "./create-lesson-form";

// Định nghĩa schema validation bằng yup

const title = ["Quản lý", "Khóa học", "Thêm mới"];

const CreateNewCourse = () => {
  const navigate = useNavigate();
  const { course, updateCourseForm } = useCreateCourseForm();
  const [searchParams] = useSearchParams();
  const step = searchParams.get("step");

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: true,
  });

  useEffect(() => {
    if (Number(step) < 0 ||!step) {
      navigate("/dashboard/courses/create?step=0");
    }
  }, [step, navigate]);

  return (
    <DashBoardLayout>
      <Breadcrum title={title} />
      {step === "0" && (
        <CreateCourseForm course={course} updateCourseForm={updateCourseForm} />
      )}
     {
        step==='1' && (      <CreateMultipleLessonsForm/>
        )
     }
    </DashBoardLayout>
  );
};

export default CreateNewCourse;


//  component
import Breadcrum from "../../../../../components/Breadcrum";
import CourseForm from "./course-form";

//    @layout 

import DashBoardLayout from "../../../../../layouts/DashboardLayout";



//  @config
const breadTitle=["Quản lý","Khóa học"]


//  @cc
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

//  @api
import { update_course,get_course_by_id } from "../../../../../apis/course";



const CourseDetail=()=>{
    const {id}=useParams()

    const {data,isLoading}=useQuery({
        queryKey:['detailCourses'],
        queryFn:()=>get_course_by_id(id)
       })

       console.log('data',data)
    return (<>
    <DashBoardLayout>
        <Breadcrum title={breadTitle}/>
        <CourseForm data={data}/>
    </DashBoardLayout>
    
    </>)

}

export default CourseDetail

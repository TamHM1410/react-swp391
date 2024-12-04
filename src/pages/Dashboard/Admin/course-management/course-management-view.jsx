/// hooks
import { useQuery } from "@tanstack/react-query";

//@component

import DashBoardLayout from "../../../../layouts/DashboardLayout";
import Breadcrum from "../../../../components/Breadcrum";
import Table from "../../../../components/Table";
//@ react
import { Link } from "react-router-dom";


// @api
import { get_course } from "../../../../apis/course";

const breadTitle = ["Quản lý", "Khóa học"];
const tableTitle = ["Id","Tên của khóa học", "Mô tả", "Sản phẩm"];

const CourseManagementView = () => {
    const {data,isLoading}=useQuery({
        queryKey:['courses'],
        queryFn:()=>get_course()
    })
  return (
    <>
      <DashBoardLayout>
        <Breadcrum title={breadTitle} />
        <div className="btn">
          <Link to={'/dashboard/courses/create?step=0'}> Tạo khóa học mới</Link>
        </div>

        <div className="w-full py-5 text-[26px]">
          <div> Danh sách các khóa học</div>
          <div>
            <Table title={tableTitle} onlyView={true} data={data}/>
          </div>
        </div>
      </DashBoardLayout>
    </>
  );
};

export default CourseManagementView;

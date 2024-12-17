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
const tableTitle = ["Id", "Tên của khóa học", "Mô tả", "Sản phẩm"];

const CourseManagementView = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: () => get_course(),
  });
  return (
    <>
      <DashBoardLayout>
        <Breadcrum title={breadTitle} />

        <Link to={"/dashboard/courses/create?step=0"} className="btn">
          {" "}
          Tạo khóa học mới
        </Link>

        <div className="w-full py-5 text-[26px]">
          <div> Danh sách các khóa học</div>
          <div>
            <Table
              title={tableTitle}
              onlyView={false}
              data={data}
              paths="/dashboard/course"
              type="course"
            />
          </div>
        </div>
      </DashBoardLayout>
    </>
  );
};

export default CourseManagementView;

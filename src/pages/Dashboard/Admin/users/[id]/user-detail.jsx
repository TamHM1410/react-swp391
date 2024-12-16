/// 
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import DashBoardLayout from "../../../../../layouts/DashboardLayout";
import Breadcrum from "../../../../../components/Breadcrum";
import UserForm from "./user-form";

//  @api
import { get_user_by_id } from "../../../../../apis/user";

const tite=["Người dùng","Chi tiết"]



const UserDetail=()=>{
    const {id}=useParams()

    const {data,isLoading}=useQuery({
        queryKey:['userbyid'],
        queryFn:()=>get_user_by_id(id)
    })

    console.log(id,'id')
    return (<>
    <DashBoardLayout>
        <Breadcrum title={tite} />
        <UserForm data={data}/>
    </DashBoardLayout>
    
    
    </>)

}

export default UserDetail
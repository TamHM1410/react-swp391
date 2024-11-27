import DashBoardLayout from "../../../../layouts/DashboardLayout";
import BreadcrumbProduct from "./breadcumb";
import AddNewProdcuct from "./AddNewProduct";


const ProductManageMentview=()=>{
    return  (<>
    <DashBoardLayout>
        <div>
            <BreadcrumbProduct/>
            Product Management 
            <AddNewProdcuct/>


        </div>

    </DashBoardLayout>
    
    </>)
}

export default ProductManageMentview
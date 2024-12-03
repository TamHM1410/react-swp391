import { Coins,Landmark } from "lucide-react"
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom";

const PaymentMethod =()=>{
    const [searchParams, setSearchParams] = useSearchParams();
    const step = searchParams.get("step");
    return (<>
    <div className="w-full h-full ">
        <div  className="py-5 shadow-2xl flex card">
        <div className=" flex gap-2 p-5">
        <input type="radio" name="radio-1" className="radio" defaultChecked/>
         <div className="flex gap-5">
         Thanh toán qua cổng VNPay <img className="w-[40px] h-[40px] rounded	" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1v7T287-ikP1m7dEUbs2n1SbbLEqkMd1ZA&s"/>
         </div>
        </div>
        

        </div>
        <div  className="py-5 shadow-2xl flex card">
        <div className=" flex gap-2 p-5">
        <input type="radio" name="radio-1" className="radio" />
         <div className="flex gap-5">
         Thanh toán qua ngân hàng <Landmark size={36} />
         </div>
        </div>
        

        </div>
        <div  className="py-5 shadow-2xl flex card">
        <div className=" flex gap-2 p-5">
        <input type="radio" name="radio-1" className="radio"/>
         <div className="flex gap-5">
         Tiền mặt  <Coins size={36} />
         </div>
        </div>

        </div>
        <div className="py-5 cursor-pointer font-bold">
        <Link to={`/checkout?step=${step-1}`}>Trở về </Link>
         </div>

    </div>    
    </>)
}

export default PaymentMethod
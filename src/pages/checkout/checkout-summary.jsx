const CheckoutSummary = () => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl ">
        <div className="card-body pt-20">
          <h2 className="card-title">Chi tiết đơn hàng</h2>
          <div className="flex justify-between">
            <div> Tạm tính </div>
            <div> 3000 </div>
          </div>
          <div className="flex justify-between">
            <div> Giảm giá </div>
            <div> 10 </div>
          </div>
          <div className="flex justify-between">
            <div> Tổng tiền </div>
            <div> 10 </div>
          </div>
        </div>
        <div className="w-full">
        <button className="btn btn-neutral w-full mt-10 ">Thanh toán</button>
      </div>
      </div>
   
    </>
  );
};

export default CheckoutSummary;

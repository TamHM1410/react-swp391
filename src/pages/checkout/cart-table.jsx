const CartTable = () => {
  return (
    <div className=" card bg-base-100  w-full shadow-xl">
        <div className="overflow-x-auto  card-body">
        <div className="font-bold">Giỏ hàng</div>

      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="hover:bg-base-200">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>1000</td>
          </tr>
          {/* row 2 */}
          <tr className="hover:bg-base-200">
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop </td>
            <td>Purple</td>
            <td>1000</td>
          </tr>
          {/* row 3 */}
          <tr className="hover:bg-base-200">
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
            <td>1000</td>
          </tr>
        </tbody>
      </table>
      <div className="pt-5 flex justify-end">
        <div className="font-bold">Tổng: <span>3000</span></div>
        
      </div>
    </div>

    </div>
    
  );
};

export default CartTable;

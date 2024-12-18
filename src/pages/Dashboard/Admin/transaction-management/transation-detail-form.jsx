import Table from "../../../../components/Table";
const TransactionDetailForm = ({ data }) => {
  console.log(data, "data");
  return (
    <>
      <div className="px-5 gap-5 flex flex-col py-10">
        <label className="">Tên người nhận:</label>
        <input
          type="text"
          className="grow input input-bordered"
          placeholder="Daisy"
          value={data?.user_id?.name}
          readOnly
        />

        <label className="">Số điện thoại:</label>
        <input
          type="text"
          className="grow input input-bordered"
          placeholder="Daisy"
          value={data?.phone}
          readOnly
        />

        <label className="">Địa chỉ giao hàng:</label>
        <input
          type="text"
          className="grow input input-bordered"
          placeholder="Daisy"
          value={data?.ship_address}
          readOnly
        />

        <label className="">Mô tả:</label>
        <input
          type="text"
          className="grow input input-bordered"
          placeholder="Daisy"
          value={data?.description}
          readOnly
        />

        <label className="">Ngày mua:</label>
        <input
          type="text"
          className="grow input input-bordered"
          placeholder="Daisy"
          value={data?.createdAt}
          readOnly
        />

        <label className="">Đơn hàng:</label>
        <div className="join join-vertical w-full">
          {data?.order_detail &&
            Array.isArray(data?.order_detail) &&
            data?.order_detail.length > 0 &&
            data?.order_detail.map((item) => {
              return (
                <>
                  <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                      {item?.stem_id.stem_name}
                    </div>
                    <div className="collapse-content">
                      <div className="flex gap-2">
                        <div>Số lượng:</div>
                        <div>{item?.quantity}</div>
                      </div>
                      <div className="flex gap-2">
                        <div>Thành tiền:</div>
                        <div>
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(item?.total)}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>

        <div className="flex gap-5">
          <div className="flex flex-col">
            <label className="">Tổng tiền :</label>
            <input
              type="text"
              className="grow input input-bordered"
              placeholder="Daisy"
              value={new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(data?.total)}
              readOnly
            />
          </div>

          <div className="flex flex-col">
            <label className="">Tổng sản phẩm :</label>
            <input
              type="text"
              className="grow input input-bordered"
              placeholder="Daisy"
              value={data?.total_orders}
              readOnly
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionDetailForm;

const ProductList = ({ data = [] }) => {
  return (
    <div className="w-full h-full p-5 sm:p-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        {data.map((item, index) => {
          return (
            <>
              <div
                className="card bg-base-100 w-full sm:w-96 shadow-xl"
                key={index}
              >
                <figure>
                  <div className="carousel carousel-vertical rounded-box h-80 sm:h-96">
                    <div className="carousel-item h-full">
                      <img
                        src={item.thumb_image}
                        className="w-full h-full"
                        alt="not found"
                      />
                    </div>
                  </div>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.stem_name}</h2>
                  <p>{item.stem_description}</p>
                  <div className="card-actions justify-between py-2 font-medium	text-red-600">
                    <button className="text-[20px]">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.stem_price)}
                    </button>
                    <button className="btn btn-neutral">Xem ngay</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;

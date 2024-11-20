const ProductList = () => {
    return (
      <div className="w-full h-full p-5 sm:p-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => {
            return (
              <div className="card bg-base-100 w-full sm:w-96 shadow-xl">
                <figure>
                  <div className="carousel carousel-vertical rounded-box h-80 sm:h-96">
                    <div className="carousel-item h-full">
                      <img
                        src="https://i0.wp.com/cornpinkhouse.vn/wp-content/uploads/2024/07/hera-skirt-model.jpg?resize=510%2C680&ssl=1"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="carousel-item h-full">
                      <img
                        src="https://i0.wp.com/cornpinkhouse.vn/wp-content/uploads/2024/07/hera-vay-skirt-1.jpg?resize=510%2C680&ssl=1"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="carousel-item h-full">
                      <img
                        src="https://i0.wp.com/cornpinkhouse.vn/wp-content/uploads/2024/07/hera-vay-skirt.jpg?resize=450%2C800&ssl=1"
                        className="w-full"
                      />
                    </div>
                    <div className="carousel-item h-full">
                      <img
                        src="https://i0.wp.com/cornpinkhouse.vn/wp-content/uploads/2024/04/pumpkin-model-2.jpg?resize=510%2C680&ssl=1"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="carousel-item h-full">
                      <img
                        src="https://i0.wp.com/cornpinkhouse.vn/wp-content/uploads/2024/04/pumpkin-model-2.jpg?resize=510%2C680&ssl=1"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="carousel-item h-full">
                      <img
                        src="https://i0.wp.com/cornpinkhouse.vn/wp-content/uploads/2024/06/pumpkin-e1717780817401.jpeg?resize=510%2C641&ssl=1"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="carousel-item h-full">
                      <img
                        src="https://i0.wp.com/cornpinkhouse.vn/wp-content/uploads/2023/08/Sizechart.jpg?resize=510%2C510&ssl=1"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Váy Cover Brazil</h2>
                  <p>
                    Hera váy Cover Brazil – Chân váy cover up mặc ngoài bikini.
                    Phù hợp cho những buổi dạo biển hay tiệc hồ bơi. Thiết kế nhẹ
                    nhàng, dễ dàng phối cùng bikini!
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-neutral">Xem ngay</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
  
        <div className="flex justify-center py-5">
          <div className="join">
            <button className="join-item btn">1</button>
            <button className="join-item btn btn-active">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductList;
  
import React from "react";

export default function Services() {
  return (
    <section className="py-10 md:py-16 flex justify-center">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Chúng tôi làm gì?
          </h2>
          <p className="text-lg sm:text-2xl mb-6 md:mb-14">
            Cung cấp các bộ KIT STEM chất lượng cao dành cho trẻ em, đi kèm với
            các khóa học giúp phát triển tư duy và kỹ năng toàn diện.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className="bi bi-box-seam text-4xl"></i>
              <h2 className="card-title">KIT STEM đa dạng</h2>
              <p>
                Cung cấp các bộ KIT STEM phù hợp với nhiều độ tuổi, giúp trẻ
                phát triển khả năng sáng tạo và thực hành.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className="bi bi-book text-4xl"></i>
              <h2 className="card-title">Khóa học kèm theo</h2>
              <p>
                Tặng kèm các khóa học trực tuyến với giáo trình bài bản, giúp
                trẻ em học và thực hành hiệu quả hơn.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className="bi bi-lightbulb text-4xl"></i>
              <h2 className="card-title">Phát triển tư duy</h2>
              <p>
                Các hoạt động trong bộ KIT được thiết kế để kích thích tư duy
                logic và khả năng giải quyết vấn đề.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className="bi bi-people text-4xl"></i>
              <h2 className="card-title">Hỗ trợ cá nhân</h2>
              <p>
                Đội ngũ hỗ trợ luôn sẵn sàng tư vấn và giải đáp thắc mắc để mang
                lại trải nghiệm tốt nhất.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className="bi bi-wallet2 text-4xl"></i>
              <h2 className="card-title">Giá cả hợp lý</h2>
              <p>
                Các sản phẩm và khóa học được thiết kế với mức giá phù hợp để
                mọi gia đình đều có thể tiếp cận.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className="bi bi-stars text-4xl"></i>
              <h2 className="card-title">Đảm bảo chất lượng</h2>
              <p>
                Cam kết mang đến sản phẩm chất lượng cao, đáp ứng tiêu chuẩn
                giáo dục và an toàn cho trẻ em.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

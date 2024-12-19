import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Hero component
const Hero = () => {
  const text = "Khơi nguồn sáng tạo".split(" ");

  return (
    <div className="flex flex-col px-10 w-full h-[50vh] justify-center pt-24">
      {/* <div className="flex justify-center text-white  p-5">
      {text.map((el, i) => (
          <motion.span
            key={i}
            className="text-[40px] font-bold mr-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 1, 0],  // Lặp lại từ 0 đến 1 rồi về 0
              scale: [0.5, 1.2, 1], // Lặp lại hiệu ứng phóng to và thu nhỏ
            }}
            transition={{
              duration: 2,          // Mỗi lần vòng lặp mất 2 giây
              repeat: Infinity,     // Lặp lại vô tận
              repeatDelay: 0.5,     // Thêm một khoảng nghỉ giữa mỗi lần lặp
            }}
          >
            {el}
          </motion.span>
        ))}
      </div>
      <div className=" w-full h-full flex">
        <div className="w-1/2 h-full flex justify-center" >
            <img src="https://ohstem.vn/wp-content/uploads/2024/01/chuong-trinh-khuyen-mai-san-pham-ohstem-1024x503.png" style={{height:400}}/>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center flex-col " style={{backgroundColor:'rgb(255 238 221)'}}>
         <div>𝗦𝗜Ê𝗨 𝗦𝗔𝗟𝗘</div>
         <div className="text-5xl py-3">𝓢𝓪𝓵𝓮 𝓽𝓸à𝓷 𝓫ộ 𝓼ả𝓷 𝓹𝓱ẩ𝓶 30%</div>
         <div className="pt-2 btn btn-active btn-neutral"><Link to="products">kHÁM PHÁ NGAY</Link></div>


        </div>

      </div> */}
        <section className="flex justify-center">
      <div className='container'>
        <div className="hero h-96 md:h-[500px] rounded-box overflow-hidden" style={{ backgroundImage: `url("https://placeimg.com/1000/800/tech")` }}>
          <div className="hero-overlay bg-opacity-60 bg-secondary"></div>
          <div className="hero-content text-center text-secondary-content">
            <div className="max-w-lg">
              <h1 className="mb-5 sm:mb-7 text-4xl sm:text-5xl font-bold">
                FPT SWP391 STEM
              </h1>
              <p className="mb-5 sm:mb-7 sm:text-lg">
                Cung cấp các sản phẩm  toàn diện cho giáo dục Stem
              </p>
              <Link className="btn btn-warning sm:btn-wide" to={'/products'}>Khám phá ngay</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Hero;
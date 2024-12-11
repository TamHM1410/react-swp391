import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Hero component
const Hero = () => {
  const text = "Khơi nguồn sáng tạo".split(" ");

  return (
    <div className="flex flex-col px-10 w-full h-[50vh] justify-center pt-14">
      <div className="flex justify-center text-white  p-5">
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

      </div>
    </div>
  );
};

export default Hero;
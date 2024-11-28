import { motion } from "framer-motion";

function InternalPage() {
  const text = "404 - Page not found".split(" ");

  return (
    <div className="w-full h-[100vh] flex items-center justify-center flex-col">
      <div className="flex">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
            className="text-[40px] font-bold mr-2" // Thêm margin để tạo khoảng cách giữa các chữ
          >
            {el}
          </motion.span>
        ))}
      </div>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default InternalPage;

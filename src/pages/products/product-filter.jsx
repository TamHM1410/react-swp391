import "./product.css";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import Icon from "iconify";

export default function ProductFilter() {
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const items = ["Áo", "Quần", "Giày", "Dép"];

  // the stagger effect
  const staggerList = stagger(0.1, { startDelay: 0.25 });

  // create the animations that will be ProductFilterlied
  // whenever the open state is toggled

  useEffect(() => {
    animate(
      "ul",
      {
        width: open ? 150 : 0,
        height: open ? 200 : 0,
        opacity: open ? 1 : 0,
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.4,
      }
    );
    animate(
      "li",
      open
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.3, x: -50 },
      {
        duration: 0.2,
        delay: open ? staggerList : 0,
      }
    );
  }, [open]);

  return (
    <div className="w-full ] " ref={scope}>
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.95 }}
        className="rounded-xl"
        style={{ backgroundColor: open ? "#e5e5e575" : "" }}
      >
        <div className="dropdown max-sm:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="pt-2 w-full h-full ">
            <div className="drawer lg:drawer-open">
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
               
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-2"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu  text-base-content min-h-full  ">
                  <li className="w-full  rounded-md transition-all">
                    <a>Bộ Quần áo nữ</a>
                  </li>
                  <li className="w-full  rounded-md transition-all  rounded">
                    <a>Body suit</a>
                  </li>
                  <li className="w-full  rounded-md transition-all rounded">
                    <a>Bikini</a>
                  </li>
                  <li className="w-full  rounded-md transition-all rounded">
                    <a>Phụ kiện & thời trang</a>
                  </li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </motion.button>
    </div>
  );
}

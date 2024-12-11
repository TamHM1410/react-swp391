import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { get_user_course } from "../../apis/course";
import { useNavigate } from "react-router-dom";

const CourseView = () => {
  const [isLearn, setIsLearn] = useState(false);

  const navigate=useNavigate()

  const  {data,isLoading}=useQuery({
    queryKey:['courses'],
    queryFn:()=>get_user_course()
  })

  if(isLoading) return <>isloading ...</>
  return (
    <>
      <div className="w-full h-full p-10 flex flex-col	 justify-center gap-5">
        <div className="h-full w-full flex justify-center gap-5">
          <div>
            <div className="card bg-base-100 w-96 shadow-xl h-96">
              <figure>
                <img
                  src="https://cdn.shopify.com/s/files/1/0264/3207/7929/t/103/assets/courselist-hero.png?v=16620927999259581968"
                  alt="Shoes"
                  className="w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Các khóa học của bạn!</h2>
                <p>Bạn có {Array.isArray(data) ? data.length :0} khóa học</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => setIsLearn(!isLearn)}
                  >
                    Xem ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card bg-base-100 w-96 shadow-xl h-96">
              <figure>
                <img
                  src="https://cdn.shopify.com/s/files/1/0264/3207/7929/files/sbjct_mathematics.webp"
                  alt="Shoes"
                  className="w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Khóa học đã hoàn thành</h2>
                <p>Hiện tại bạn chưa hoàn thành khóa học nào</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        </div>

            
          <div className="h-full w-full flex justify-center gap-5 grid grid-cols-3 px-5 pt-10">
            {
              isLearn===true&&  Array.isArray(data)&& data.length>0 && data.map((item)=>{
                    return (
                        <div class="w-full flex justify-center">
                        <div className="card bg-base-100 w-96 h-96 shadow-xl">
                          <figure>
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppJKxBxJI-9UWLe2VVmzuBd24zsq4_ihxZw&s"
                              alt="Shoes"
                            />
                          </figure>
                          <div className="card-body">
                            <h2 className="card-title">{item?.course_id?.title}</h2>
                            <p>{item?.course_id?.description}</p>
                            <div className="card-actions justify-end">
                              <button className="btn btn-primary" onClick={()=> navigate(`/courses/${item?.course_id?._id}`)}>Học ngay</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                })
            }
           
          </div>
     
      </div>
    </>
  );
};

export default CourseView;

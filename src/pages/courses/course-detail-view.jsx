import CourseLayout from "../../layouts/CourseLayout";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery, useQueries } from "@tanstack/react-query";
import { get_course_by_id } from "../../apis/course";
import { get_lesson_by_id } from "../../apis/lesson";
import PDFViewer from "../../components/PDFviewer";


const LessonView = (data) => {
  return (
    <div>
              <div className="py-10">Video bai hoc</div>

      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>

        <iframe
          src={data?.data.lesson_videoUrl}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="py-10">
        Tai lieu hoc tap
      </div>
      <div className="pt-5" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
      <PDFViewer url={data?.data.lesson_material} />

        <iframe
          src={data?.data.lesson_material}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
const CourseDetailView = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const lesson_id = searchParams.get("lesson_id");
  console.log("id", lesson_id);

  const { data, isLoading } = useQuery({
    queryKey: ["courseDetail"],
    queryFn: () => get_course_by_id(id),
  });
  const result = useQueries({
    queries: [
      {
        queryKey: ["courseDetail"],

        queryFn: () => get_course_by_id(id),
      },
      {
        queryKey: ["lesson", lesson_id],
        queryFn: () => get_lesson_by_id(lesson_id),
      },
    ],
  });

  console.log(result[1].data, "result");

  return (
    <>
      <CourseLayout
        data={
          Array.isArray(result[0].data?.lesson_id) &&
          result[0].data?.lesson_id.length > 0 &&
          result[0].data.lesson_id
            ? result[0].data?.lesson_id
            : []
        }
      >
        {
           result[1].data && <LessonView  data={result[1].data}/>
        }
      </CourseLayout>
    </>
  );
};

export default CourseDetailView;

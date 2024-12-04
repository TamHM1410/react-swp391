import { create } from "zustand";

const defaultCourse={
    title:'',
    description:'',
    stem_id:''
}

const useCreateCourseForm = create((set) => ({
  course: defaultCourse,
  updateCourseForm: (payload) => set({ course:payload}),
//   current_infor:null,
//   updateInfor:(payload) => set({ current_infor: payload }),
}));

export default useCreateCourseForm;

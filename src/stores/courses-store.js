import { create } from "zustand";

const defaultCourse = {
  _id: null,
  title: "",
  description: "",
  stem_id: "",
};

const useCreateCourseForm = create((set) => ({
  course: defaultCourse,
  updateCourseForm: (payload) => set({ course: payload }),
}));

export default useCreateCourseForm;

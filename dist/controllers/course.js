import Course from "../models/course.model.js";
export const getAllcourses = async () => {
    return await Course.find();
};
export const getCourseBYId = async (parent, arg) => {
    const b = await Course.findById(arg.courseId);
    return b;
};

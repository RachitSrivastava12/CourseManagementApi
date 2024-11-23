import Lecture from "../models/lecture.model";
export const getAllLecture = async () => {
    return await Lecture.find();
};

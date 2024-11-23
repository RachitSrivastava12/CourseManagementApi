import Lecture from "../models/lecture.model.js"
export const getAllLecture = async()=> {
    return await Lecture.find()
}
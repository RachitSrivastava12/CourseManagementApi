import exp from "constants"
import Course from "../models/course.model.js"
export const getAllcourses = async()=> {
    return await Course.find()
}

export const getCourseBYId = async(parent:any, arg: {courseId: string}) => {
    const b =  await Course.findById(arg.courseId)
    
     
     return b
   
}

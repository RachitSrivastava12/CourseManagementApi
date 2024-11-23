import User from "../models/user.model.js"
import Course from "../models/course.model.js"
export const getAlluser = async()=> {
    return await User.find()
}

export const getUserBYId = async (userId: string) => {
  return await User.findById(userId);
};

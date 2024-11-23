import User from "../models/user.model.js";
export const getAlluser = async () => {
    return await User.find();
};
export const getUserBYId = async (userId) => {
    return await User.findById(userId);
};

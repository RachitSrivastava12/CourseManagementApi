import { getAllcourses, getCourseBYId } from '../../controllers/course.js';
import { getAlluser, getUserBYId } from '../../controllers/user.js';
import { getAllLecture } from '../../controllers/lecture.js';
import Course from '../../models/course.model.js';
const mySampleUsers = [];
export const resolvers = {
    Mutation: {
        newUser: (parent, { name, age, gender }) => {
            console.log(name, age, gender);
            mySampleUsers.push({
                name,
                age,
                gender,
            });
            return 'User added Successfully';
        },
    },
    Query: {
        courses: getAllcourses,
        course: getCourseBYId,
        users: getAlluser,
        user: async (_, args) => {
            return await getUserBYId(args.userId);
        },
        lecture: getAllLecture,
        SampleUsers: () => mySampleUsers,
    },
    Course: {
        instructor: async (course) => {
            return await getUserBYId(course.instructor);
        },
    },
    user: {
        courses: async (user) => {
            return await Course.find({ instructor: user._id });
        },
    },
    Lecture: {},
};

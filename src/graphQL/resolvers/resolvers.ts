import { getAllcourses, getCourseBYId } from '../../controllers/course.js';
import { getAlluser, getUserBYId } from '../../controllers/user.js';
import { getAllLecture } from '../../controllers/lecture.js';
import Course from '../../models/course.model.js';
type SampleUserType ={
  name: string;
  age: number;
  gender: string;
};
const mySampleUsers: {
  name: string;
  age: number;
  gender: string;
}[] = [];

export const resolvers = {
  Mutation: {
    newUser: (parent: any, { name, age, gender }:SampleUserType) => {
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
    user: async (_: any, args: any) => {
      return await getUserBYId(args.userId);
    },
    lecture: getAllLecture,
    SampleUsers: () => mySampleUsers,
  },
  Course: {
    instructor: async (course: any ) => {
      return await getUserBYId(course.instructor);
    },
  },
  user: {
    courses: async (user: any) => {
      return await Course.find({ instructor: user._id });
    },
  },
  Lecture: {},
};

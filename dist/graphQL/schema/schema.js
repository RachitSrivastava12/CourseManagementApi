// schema.ts
export const graphQLschema = `#graphql
  type user {
    _id: ID!
    name: String!
    Language: String!
    courses: [Course!]!
  }

  type Course {
    id: ID!
    title: String!
    description: String!
    whatYouWillLearn: [String!]!
    instructor: user!
    duration: Int!
    level: String!
    category: String!
    price: Float!
    rating: Float
    studentsEnrolled: [user!]!
    createdAt: String!
    updatedAt: String!
  }

  type Section {
    id: ID!
    title: String!
    description: String!
    course: Course!
    lectures: [Lecture!]!
    createdAt: String!
    updatedAt: String!
  }

  type Lecture {
    id: ID!
    title: String!
    content: String!
    duration: Int!
    resources: [String!]
    section: Section!
    createdAt: String!
    updatedAt: String!
  }
  type SampleUser {
    name: String!
    age: Int!
    gender: String!
  }
  type Query {
    courses: [Course]
    course(courseId: ID!): Course
    users: [user]
    section: [Section]
    lecture: [Lecture]
    user(userId: ID!): user
    SampleUsers: [SampleUser]
  }

  type Mutation{
    newUser(name:String!, age: Int! ,gender: String) : String
    
  }
`;

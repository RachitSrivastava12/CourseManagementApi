# CourseManagementApi

A complete GraphQL-powered API project for managing users, courses, and lectures. This project is built using TypeScript, Node.js, Express.js, and Apollo Server.

## Features

- **GraphQL API**: Fully-featured GraphQL schema for querying and mutating users, courses, and lectures.
- **Database**: MongoDB for managing users, courses, and lecture data.
- **Modular Structure**: Well-organized code with separation of concerns.
- **Middleware**: Utilizes Express.js middleware for enhanced functionality.
- **Environment Configurations**: Easily configurable using `.env` files.
- **Realtime Logging**: Integrated with Morgan for request logging.

## Project Structure

```plaintext
src/
├── controllers/
│   ├── course.ts         # Handlers for course-related queries
│   ├── lecture.ts        # Handlers for lecture-related queries
│   └── user.ts           # Handlers for user-related queries
├── models/
│   ├── course.model.ts   # MongoDB schema for Course
│   ├── lecture.model.ts  # MongoDB schema for Lecture
│   └── user.model.ts     # MongoDB schema for User
├── resolvers/
│   └── resolvers.ts      # GraphQL resolvers
├── schema/
│   └── schema.ts         # GraphQL schema definitions
├── graphQL/
│   └── graphql.ts        # Apollo Server setup
├── database.ts           # MongoDB connection setup
├── app.ts                # Main application entry point
└── .env                  # Environment configuration file

Prerequisites

    Node.js >= 16
    MongoDB
    npm or yarn

Installation

    Clone the repository:

git clone https://github.com/RachitSrivastava12/CourseManagementApi.git
cd server

Install dependencies:

npm install

Create a .env file:

PORT=3000
NODE_ENV=DEVELOPMENT
MONGOURI=mongodb://localhost:27017/your-database-name

Start MongoDB:

mongod

Run the server:

    npm run dev

GraphQL API

Access the GraphQL playground at: http://localhost:3000/graphql
Example Queries
Fetch All Courses

query {
  courses {
    id
    title
    description
    instructor {
      name
    }
  }
}

Create a New User

mutation {
  newUser(name: "John Doe", age: 25, gender: "male")
}

Fetch All Users

query {
  users {
    _id
    name
    email
  }
}



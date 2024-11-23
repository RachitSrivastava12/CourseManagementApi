import express, { NextFunction } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv';
import { startStandaloneServer } from '@apollo/server/standalone';
import connectDb from './database.js/database.js';
import { graphQLApolloServer } from './graphQL/graphql.js';
import {expressMiddleware}  from '@apollo/server/express4'

dotenv.config({ path: './.env' });

export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
const port = Number(process.env.PORT) || 3000;
const mongouri = process.env.mongouri!;
connectDb(mongouri);

const graServer = graphQLApolloServer();
await graServer.start();
// startStandaloneServer(graServer, { listen: { port } })
//   .then(() => {
//     console.log('Server is working on Port: ' + port + ' in ' + envMode + ' Mode.');
//   })
//   .catch((error) => {
//     console.error("Failed to start server:", error);
//   });

// // Uncomment and use these if you want to add additional Express middleware
 const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*', credentials: true }));
app.use(morgan('dev'));

const isAdmin = (req: Response , res: Response, next: NextFunction) =>{
  //check if user admin or not 
  const user = {role: 'admin'};
  if(user.role === 'admin') next();
  
}

app.use("/graphql" , expressMiddleware(graServer ))

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// // Your other routes here

// app.get("*", (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: 'Page not found'
//   });
// });

app.listen(port, () => console.log('Server is working on Port:' + port + ' in ' + envMode + ' Mode.'));

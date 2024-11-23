import mongoose from 'mongoose';
const connectDb = (uri) => {
    mongoose.connect(uri, { dbName: "Graphql-6pack" })
        .then(() => {
        console.log("Connected to the DB");
        console.log("Connection host:", mongoose.connection.host);
        console.log("Database name:", mongoose.connection.name);
    })
        .catch((error) => {
        console.error("Failed to connect to the DB:", error);
    });
};
export default connectDb;

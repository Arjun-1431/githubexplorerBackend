import mongoose from "mongoose";

export default async function connectMongoDB() {
	try {
		await mongoose.connect("mongodb://localhost:27017/github_clone");
		console.log("MONGODB connected");
	} catch (error) {
		console.log("Error connecting to MongoDB: ", error.message);
	}
}

import { connectDB } from "@/lib/connectorDB";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const existedUser = await userCollection.findOne({ email: newUser.email });
    if (existedUser) {
      return Response.json({ status: 400, message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    const resp = await userCollection.insertOne({
      ...newUser,
      password: hashedPassword,
    });
    return Response.json({ message: "User Created", status: 200 });
  } catch (error) {}
};

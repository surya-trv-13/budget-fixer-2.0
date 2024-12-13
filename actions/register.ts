"use server"
import { connectToMongoDB } from "@/lib/db";
import User, { UserDocument } from "@/models/User";
import bcrypt from "bcryptjs";


export const register = async (values: Omit<UserDocument, '_id'>) => {
    const { email, password, name } = values;

    try {
        await connectToMongoDB();
        const userFound = await User.findOne({ email });
        if(userFound){
            return {
                error: 'Email already exists!'
            }
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
          name,
          email,
          password: hashedPassword,
        });
        
        await user.save();

    }catch(e){
        console.log(e);
    }
}
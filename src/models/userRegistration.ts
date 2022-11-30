import mongoose, { Schema, Document } from 'mongoose';


const date = new Date();

interface IUser extends Document {
    _id: string;
    name: string;
    email: string;
    password: string;
    createdAt: string
    access_token: string;
}

const User: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    access_token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String, 
        default: date.toDateString(),
    }
});

export default mongoose.model<IUser>('User', User, 'users');
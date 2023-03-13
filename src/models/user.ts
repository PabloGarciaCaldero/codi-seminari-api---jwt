import {Schema, Types, model, Model} from "mongoose";
import {User} from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
    {
        name:{
            required:true,
            type:String,
        },
        password:{
            required:true,
            type:String,
        },
        email:{
            required:true,
            type:String,
            unique:true,
        },
        description:{
            type:String,
            default:"Soy la descripción",
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
    
);

const UserModel = model("items", UserSchema);
export default UserModel;
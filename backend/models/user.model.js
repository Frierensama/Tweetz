import mongoose from "mongoose";

const newUserSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required:true,
            unique:true,
        },
        fullName:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
            minLenght:8,
        },
        email:{
         type:String,
         required:true,
         unique:true,
        },
        followers:[
            {
                type: mongoose.Schema.ObjectId,
                ref:"User",
                default:[],
            }
        ],
        following:[
            {
                type: mongoose.Schema.ObjectId,
                ref:"User",
                default:[],
            }
        ],
        profileImg:
        {
            type:String,
            default:"",
        },
        coverImg:{
            type:String,
            default:"",
        },
        bio:{
            type:String,
            default:"",
        },
        link:{
            type:String,
            default:"",
        }
    },
    {timestamps:true}
)


const User = mongoose.model("User",newUserSchema);

export default User;
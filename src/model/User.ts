import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry:Date;
  isVerified: boolean;
  isAcceptableMessage: boolean;
  messages: Message[];
}


const UserSchema: Schema<User> = new Schema({
    username: { 
      type: String, 
      required: [true, 'Username is required'], 
      unique: true, 
      trim:true,
      minlength: [3, 'Username must be at least 3 characters long'],
      maxlength: [30, 'Username must be at most 30 characters long'],
      match: [/^[a-zA-Z0-9]+$/, 'Username must contain only alphanumeric characters']
    },
    email: { 
      type: String, 
      required: [true, 'Email is required'], 
      unique: true, 
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'] 
    },
    password: { 
      type: String, 
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long'],
      select: false // Do not return password by default when querying the user
    },
    verifyCode: { 
      type: String, 
      required: [true, 'Verification code is required'],
      minlength: [6, 'Verification code must be at least 6 characters long'],
      maxlength: [6, 'Verification code must be at most 6 characters long']
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, 'Verification code expiry is required'],
        validate: {
          validator: function(value: Date) {
            return value > new Date();
          },
          message: 'Verification code expiry must be a future date'
        }
      },
      isVerified: {
        type: Boolean,
        required: [true, 'isVerified is required'],
        default: false
      },
    isAcceptableMessage: { 
      type: Boolean, 
      required: [true, 'isAcceptableMessage is required'], 
      default: false 
    },
    messages: [MessageSchema]
  }, { 
    timestamps: true // Automatically add createdAt and updatedAt fields
  });

  const UserModel =(mongoose.models.User as mongoose.Model<User>)||
  (mongoose.model<User>("User",UserSchema));

  export default UserModel;

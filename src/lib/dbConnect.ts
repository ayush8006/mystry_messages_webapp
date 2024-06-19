import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?:number
}

const connection:ConnectionObject={

}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
      console.log('Already connected to MongoDB');//due to performance choking
      return;
    }

    try{
        const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/your_database'; // Replace with your MongoDB URI
        const db=await mongoose.connect(mongoURI,{})

        connection.isConnected=db.connections[0].readyState

        console.log("DB Connected Successfully");
    }catch(error){
        console.log("Database connection failed ",error);

        process.exit(1);
    }
}

export default dbConnect;
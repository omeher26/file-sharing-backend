
import mongoose from "mongoose"

const DBconnection = async () => {
    const MONGODB_URI = `mongodb+srv://onkarmeher265:Lvx6QFzOqdVsOydz@share.sseyjzo.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(MONGODB_URI,{ useNewUrlParser: true})
        console.log('Database connected successfully')
    } catch (error) {
        console.error('Error while connecting with the database', error.message)
    }
}


export default DBconnection;


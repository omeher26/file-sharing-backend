
import mongoose from "mongoose"

const DBconnection = async () => {

    const MONGODB_URI = process.env.DATA_URL 
    try{
        await mongoose.connect(MONGODB_URI,{ useNewUrlParser: true})
        console.log('Database connected successfully')
    } catch (error) {
        console.error('Error while connecting with the database', error.message)
    }
}


export default DBconnection;


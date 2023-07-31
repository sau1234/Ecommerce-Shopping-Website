
import mongoose from "mongoose";

const Connection = async (URL) =>{
    try {
      await mongoose.connect(URL, {useUnifiedTopology : true, useNewUrlParser: true});
      console.log("database connect successfully"); 
    } catch (error) {
        console.log('error coming while connecting database', error.message);
    }
}

export default Connection;

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// URL: mongodb+srv://ar3009076:<password>@cone-whatsapp.ejpbyqr.mongodb.net/?retryWrites=true&w=majority

const URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cone-whatsapp.ejpbyqr.mongodb.net/?retryWrites=true&w=majority`;
const Connection = async () => {
    try {
        mongoose.connect(URI, { useUnifiedTopology: true }).then(() => {
            console.log("Database Connected Successfully");
        })
    }
    catch(error) {
        console.log("Error while connecting with database", error.message);
    }
}

export default Connection;
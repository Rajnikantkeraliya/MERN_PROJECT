import 'dotenv/config'
import mongoose from 'mongoose'
import express from "express"
import cors from "cors"
import Bookrouter from "./Router/Bookrouter.js"
const app = express()

app.use(cors())

//port
const port = process.env.PORT || 4000
//Mongodb Uri
const mongoURI = process.env.MONGODB_URI;

try {
    await mongoose.connect(mongoURI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    console.log('Connected to MongoDB');
} catch (err) {
    console.error('Error connecting to MongoDB:', err);
}

//Book Router Use

app.use("/book", Bookrouter)


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

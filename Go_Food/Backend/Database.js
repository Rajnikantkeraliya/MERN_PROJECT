const mongoose = require('mongoose');
const Mongourl = "mongodb://localhost:27017/Food_Management";

// Define global variables to store the fetched data
global.food_items = [];
global.categoryData = [];

const getdbconnection = async () => {
    try {
        await mongoose.connect(Mongourl);
        console.log("Database connection successfully");

        // Fetch data from "Food_Items" collection
        const foodData = await mongoose.connection.db.collection("Food_Items").find({}).toArray();

        // Fetch data from "Food_Category" collection
        const categoryData = await mongoose.connection.db.collection("Food_Category").find({}).toArray();

        // Store fetched data in global variables
        global.food_items = foodData;
        global.categoryData = categoryData;

        // console.log("Food Items:", global.food_items);
        // console.log("Food Category:", global.categoryData);
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

module.exports = getdbconnection;

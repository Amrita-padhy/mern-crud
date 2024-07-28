const express = require("express")
const mongoose = require("mongoose")
// const cors = require('cors')
const { Card } = require('./model/foodCardModel');




const app = express()
// app.use(cors())


app.use(express.json())

app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("request sent successfully1234.")
})



app.post('/card', async (request, response) => {
    try {
        if (!request.body.title) {
            return response.status(400).json({
                message: "Please provide all required fields: title"
            });
        }
        
        const newCardData = {
            title: request.body.title,
            // Add other fields here if needed
        };

        const foodCard = await Card.create(newCardData);
        return response.status(201).json(foodCard);
    } catch (error) {
        console.log(error);
        return response.status(500).json({ message: "Internal server error" });
    }
});



app.listen(3000, function () {
    console.log("server is running");
    console.log("hello");
})

const mongoDbUrl = "mongodb+srv://priyaamrita5:minu123@swiggiapi.wcbycrr.mongodb.net/?retryWrites=true&w=majority&appName=swiggiApi"

mongoose.connect(mongoDbUrl).then(() => {
    console.log("app is connected to database");
    


}).catch((error) => {
    console.log(error);
})

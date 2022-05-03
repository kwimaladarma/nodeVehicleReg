const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.use(bodyParser.json());
app.use(cors());
const regRoutes = require("./routes/Registration")
app.use(regRoutes);

const PORT = 8080;
const URL = "mongodb+srv://gayantha:gaya123@cluster0.b4pdk.mongodb.net/beGoodDB?retryWrites=true&w=majority"
mongoose.connect(URL)
    .then(() => {
        console.log("Connected")
    })
    .catch((err) => console.log('DB error',err))
app.listen(PORT, () => {
    console.log("app is runninsdfg on ")
});
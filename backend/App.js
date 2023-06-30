const dotenv = require('dotenv');
var mongoose = require('mongoose');
const express = require('express');
const app = express();
const Avatar = require('./model/avatar');


// const jwt = require("jsonwebtoken");


// const createToken = async () => {
//     const token = await jwt.sign({ _id: "636a45e5dadaf9567cc4473b" }, "MYNAMEISRAGHU", { expiresIn: "2 seconds" });
//     console.log(token);
//     const userVer = await jwt.verify(token, "MYNAMEISRAGHU")
//     console.log(userVer);
// }
// createToken();
//HI

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration


const User = require('./model/UserSchema')
dotenv.config({ path: './config.env' });


app.use(express.json());

app.use(require('./router/auth'));


const DB = process.env.DATABASE;

const PORT = process.env.PORT;





// 
// mongoose.connect(
//     "mongodb://localhost:27017/",
//     {
//       dbName: "yourDB-name",
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     },);


mongoose.connect(DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
).then(() => {
    console.log("db connected..");

}).catch((err) => console.log(err));



app.get('/', (req, res) => {
    res.send("hello from server");
});




app.listen(PORT, () => {
    console.log(`server is on port no ${PORT}`)


    // const resetDB = async () => {
    //     console.log("reseting db");

    //     await Avatar.deleteMany({})
    //         .then(() => console.log("removed all BUFFER  avatars."))
    //         .catch((err) => console.error("error: could not remove avatars"));
    // };

    // resetDB();
})


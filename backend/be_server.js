const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router')
const path = require('path');

//DBConfig
const mongoose = require("mongoose");
const dbConfig = "mongodb://localhost:27017/jeep_me";

mongoose.Promise = global.Promise;
console.log("Connecting to the Server..,");
mongoose.connect(dbConfig, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }
).then(() => {
    console.log("Successfully connected to the database..,");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//db_config
// require('./system/db_config')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: "20mb" }));
app.use(bodyParser.json({ limit: "20mb" }));

//importing model
// const route_model = require('../backend/model/route')
// app.post("/route", (req, res) => {
    // console.log(req.body);
    // let route = new route_model(req.body);
    // route.save((err, data) => {
    //     if (err) {
    //         return res.send(err)
    //     }
    //     else {
    //         return res.send(data)
    //     }
    // })

// })

//import routes in route
// const router = require('./post')
// app.use("/jeep-me",router)

// app.get("/route/:id", (req, res) => {
//     console.log(req.body.id);
    
//     route_model.find({}, (err, data) => {
//         if (err) {
//             return res.send(err)
//         }
//         else {
//             return res.send(data)
//         }
//     })
// })



app.all('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'view/index.html'));
});


app.use("/jeepme", router)

app.listen(300, () => {
    console.log("Server is running in PORT..," + 3001)
})
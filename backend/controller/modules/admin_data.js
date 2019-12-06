const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
let response = null
let errorResponse = require("../helper/setErrorResponse");
let successResponse = require("../helper/setSuccessResponse");

const Admin_Model = require('../../model/adminschema')

let retrieve_admin = (req,reqPassword, res) => {
    console.log(req)
    console.log("naa na dri");
    Admin_Model.findOne({"username": req}, (err, returns) => {
        console.log("hapit na");
        if (err) {
            console.log("dri nasangit");
            throw err
            
        }
        console.log("hapit na dyud");
        if (returns !== null) {
            console.log("naka hapit");
            bcrypt
                .compare(reqPassword, returns.password)
                .then(match => {
                    console.log("match");
                    if (match) {
                        console.log("nawala");
                        response = successResponse(200, {
                            accessToken: jwt.sign({ username: returns.username, password: returns.password }, "Jeepme", { expiresIn: '12h' }),
                            auth: true
                            
                        }, "Login Successful!")
                    } else {
                        response = errorResponse(404, null, "Password is incorrect!")
                    }
                    res.send(response);
                })
                .catch(err => {
                    console.log("error dyud bay");
                    response = errorResponse(404, err, "Username not Found!")
                    // res.status(response.status).send(response);
                })
        }else {
            console.log("not found diay");
            response = errorResponse(404, err, "Account is not Found!")
            res.send(response);
        }
    })
}

module.exports = { retrieve_admin }
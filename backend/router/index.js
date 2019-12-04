const express = require("express");
const routes = express.Router();

//importing modules
const create = require('../controller/modules/create')
const dlt = require('../controller/modules/delete')
const retrieve = require('../controller/modules/retrieve')
const update = require('../controller/modules/update')
const adm = require('../controller/modules/admin')
const  admin_account = require('../controller/create_default_account')
const admin_info = require('../controller/modules/admin_data')
const login = require('../controller/modules/admin_data')
//creating routes
routes.route("/createroute").post((req, res) => {
    create.create_route(req,res);
})

// routes.route("/createplaces").post((req,res) => {
//     create.create_places(req,res);
// })


//creating admin default account

routes.route("/install").all((req,res) => {    
    admin_account.create_default_account(req,res);
})

routes.route("/admindata").get((req,res) => {
    admin_info.retrieve_admin(req,res);
})

//deleting routes
routes.route("/deleteroute/:id").delete((req,res) => {
    dlt.delete_route(req,res);
})

routes.route("/deleteplaces/:id").delete((req,res) => {
    dlt.delete_places(req,res);
})

//retrieving routes
routes.route("/retrieveAll").get((req,res) => {
    retrieve.retrieveAll_route(req,res);
})

//updating routes
routes.route("/updateroute/:id").post((req,res) => {
    update.update_route(req,res);
})

routes.route("/updateplaces/:id").post((req,res) => {
    update.update_places(req,res);
})

//getting data from admin
routes.route("/admin").get((req,res) => {
    adm.retrieve_admin(req,res);
})

routes.route('/login/admin/:username/:password').get((req, res) => {
    login(req.params.username, req.params.password, res);
})

// routes.post('/admin', (req, res) => {
//     // console.log(req.body)
//     var user = req.body.username
//     var pass = req.body.password
//     Admin.findOne({ username: user }, function(err, data){
//         if (err){
//             res.send(err)
//         }
//         if(data != null){
//             var match = bcrypt.compareSync(pass, data.password)
//                 if(match){
//                     var acc_token = jwt.sign({ data },"token1234", {expiresIn: "12h"})
//                     res.send({
//                         status: true,
//                         auth: true,
//                         user: data,
//                         token: acc_token
//                     })
//                 }else{
//                     res.send({
//                         status: false,
//                         auth: false,
//                         sms: "Incorrect Password!!"
//                     })
//                 }
//             }
//                 res.send({
//                     status: false,
//                     auth: false,
//                     sms: "Username not found!!"
//                 })
//     })
// });


//exporting routes
module.exports = routes
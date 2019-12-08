const express = require("express");
const routes = express.Router();

//importing modules
const create = require('../controller/modules/create')
const dlt = require('../controller/modules/delete')
const retrieve = require('../controller/modules/retrieve')
const update = require('../controller/modules/update')
const  admin_account = require('../controller/create_default_account')
const admin_info = require('../controller/modules/admin_data')

//creating routes
routes.route("/createroute").post((req, res) => {
    create.create_route(req.body,res);
})

routes.route("/createplaces").post((req,res) => {
    create.create_places(req,res);
})


//creating admin default account

routes.route("/install").all((req,res) => {    
    admin_account.create_default_account(req,res);
})

// routes.route("/admindata").get((req,res) => {
//     // console.log(req.body);
//     admin_info.retrieve_admin(req,res);
//     console.log("req.body")
// })
routes.route('/admindata/:username/:password').get((req, res) => {
    admin_info.retrieve_admin(req.params.username, req.params.password, res);
})
//deleting routes
routes.route("/deleteroute/:route").delete((req,res) => {
    dlt.delete_route(req.params.route,res);
})

routes.route("/deleteplaces/:places").delete((req,res) => {
    dlt.delete_places(req.params.places,res);
})

//retrieving routess
routes.route("/retrieveAll").get((req,res) => {
    retrieve.retrieveAll_route(req,res);
})

//updating routes
routes.route("/updateroute").post((req,res) => {
    update.update_route(req.body,res);
})

// updating places
routes.route("/updateplaces").post((req,res) => {
    update.update_places(req.body,res);
})

//getting data from admin

//exporting routes
module.exports = routes
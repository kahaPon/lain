const route_model = require('../../model/route')
const place_model = require('../../model/newplace')

let create_route =  (req, res) => {
    let route = new route_model(req);
    route.save((err, data) => {
        if (err) {
            return res.send(err)
        }
        
        else {
            console.log("hy");
            return res.send(data)
            
        }
    })
}

let create_places =  (req, res) => {
    let places = new place_model(req.body);
    places.save().then(response=> {
        return res.send(response)
    })
}

module.exports = { create_route, create_places} 
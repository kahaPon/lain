const route_model = require('../../model/route')

let create_route =  (req, res) => {
    // console.log("hey there");
    let route = new route_model(req);
    // console.log("hey there");
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

module.exports = { create_route } 
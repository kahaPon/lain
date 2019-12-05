const route_model = require('../../model/route')

let delete_route = (req, res) => {
    console.log(req)
    route_model.findOneAndDelete(
        {"route": req}, //condition
        (err, data) => {
            if(err) {
                return res.send(err)
            }else{
                return res.send(data)
            }
        }
    )
}

let delete_places = (req,res) => {
    route_model.findOneAndDelete(
        {"places": req},
        (err,data) => {
            if(err) {
                return res.send(err)
            }else{
                return res.send(data)
            }
        }
    )

}
module.exports = { delete_route, delete_places }
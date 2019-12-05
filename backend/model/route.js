var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var routeSchema = new Schema({
      route: String,
      places: Array

  })

  module.exports = mongoose.model('Jeep', routeSchema);
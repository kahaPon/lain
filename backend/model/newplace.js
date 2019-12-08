var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var placeSchem = new Schema({
      routePlace: String,
      routes: String
  }, {collection: "place"})

  module.exports = mongoose.model('Place', placeSchem);
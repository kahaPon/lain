var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");


  var AdminSchema = new Schema({
      username: {type: String},
      password: {type: String}
      

  })

  AdminSchema.pre("save", function (next) {
	if (!this.isModified("password")) {
		return next();
	}
	this.password = bcrypt.hashSync(this.password, 10);
	next();
});


  module.exports = mongoose.model('Admin', AdminSchema);
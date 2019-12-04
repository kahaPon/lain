const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

let Account = new Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true }
})

Account.pre("save", function (next) {
	if (!this.isModified("password")) {
		return next();
	}
	this.password = bcrypt.hashSync(this.password, 10);
	next();
});

  module.exports = {Account};
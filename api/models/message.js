"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MessageSchema = mongoose.Schema({
  text: String,
  created_at: String,
  emmiter: { type: Schema.ObjectId, ref: "User" },
  receover: { type: Schema.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Message", MessageSchema);

const mongoose = require('mongoose');

const avatarschema = new mongoose.Schema({
    UserPhoneNumber: Number,
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    buffer: Buffer,
    size: Number
});

module.exports = mongoose.model("Avatar", avatarschema);
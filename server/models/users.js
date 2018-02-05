const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let bcrypt = require('bcrypt')

const userSchema = new Schema({
    name: String,
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    bio: String,
    image: String,
    organizingEvents: [],
    attendingEvents: []
})


userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userSchema)

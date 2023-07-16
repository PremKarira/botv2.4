const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const sc = mongoose.Schema({
    discordId: { type: String, required: true },
    scUsername: { type: String, required: true },
})

module.exports = mongoose.model('sc', sc)
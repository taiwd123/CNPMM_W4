const {myGroup} = require('../models/FriendsModel');

function getAllRequest (req, res) {
    console.log(`get all: ${myGroup}`);
    res.status(200).json(myGroup)
}

module.exports = {
    getAllRequest
}
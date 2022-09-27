const {myGroup, idMyGroup} = require('../models/FriendsModel');

function messageAll (req, res) {
    res.status(200).json(myGroup)
}
function messageById (req, res) {
    const ID = req.params.id;
    const friend = myGroup.filter(data => data.id === ID)
    if (friend.length > 0) {
        res.set('Content-Type', 'text/html');
        res.status(200).send(Buffer.from(
            ` <html><body><ul><li>${friend[0].name}</li></ul></body></html>`
        ))
    } else {
        res.status(400).json({error:'No vaild'});
    }
}
module.exports = {
    messageAll,
    messageById
}
const {myGroup, idMyGroup} = require('../models/FriendsModel')

function addFriend(req, res) {
    const friend = req.body
    const id = idMyGroup.filter(data => data === friend.id)
    const isCorrect = isExist(friend.id, myGroup)
    console.log(
        `body: ${typeof req.body.id}, isCorrect: ${isCorrect}`
    );

    if(id.length > 0 && !isCorrect) {
        myGroup.push(friend)
        res.status(200).json(myGroup)
    } else {
        res.status(400).json("Not vaild")
    }
}

function getById(req, res) {
    const ID = req.params.id
    const friend = myGroup.filter(data => data.id === ID)
    if (friend.length > 0) {
        res.status(200).json(friend[0])
    } else {
        res.status(400).json("Not vaild")
    }
}

const isExist = (id, myGroup) => {
    const friends = myGroup.filter(data => data.id === id)
    const ids = idMyGroup.filter(data => data === id)
    return friends.length > 0 && ids.length > 0 ? true : false
}

module.exports = {
    addFriend,
    getById
}
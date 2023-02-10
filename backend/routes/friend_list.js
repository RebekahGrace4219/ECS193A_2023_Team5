const router = require("express").Router();
let Friend_lists = require("../models/friend_list.model");
const Friend_requests = require("../models/friend_request.model");


router.route("/").get((req, res) => {
    Friend_lists.find()
      .then(function (data) {
        res.send({ data });
      })
      .catch(function (err) {
        res.status(400).json("Error from the router" + err);
      });

});


router.route('/friend_list').get(async (req, res) => {
    const user_email = req.body.email;

    const friendList = await Friend_lists.findOne({
        userEmail: user_email }, 'friendsEmails');


    return res.json(friendList)
});

router.route('/friend_request_list').get(async (req, res) => {
    const user_email = req.body.email;

    const requestList = await Friend_requests.find({
        toEmail: user_email}, 'fromEmail');


    return res.json(requestList)
});

router.route('/remove_friend').get(async (req, res) => {
    const user_email = req.body.userEmail;
    const friend_email = req.body.friendEmail;

    // add error checking
    const removeFriendFromUser = await Friend_lists.findOneAndUpdate({
        userEmail: user_email, $pull: {friendsEmails: friend_email}});
    const removeUserFromFriend = await Friend_lists.findOneAndUpdate({
        userEmail: friend_email, $pull: {friendsEmails: user_email}});


    return res.sendStatus(200)
});


router.route('/add_friend/:myEmail/:theirEmail').get(async (req, res) => {
    const user_email = req["params"]["myEmail"];
    const friend_email = req["params"]["theirEmail"];

    const friendExists = await Users.findOne({ email: friend_email});

    if (friendExists === null){
        return res.sendStatus(404);
    }

    const alreadyFriends = await Friend_lists.findOne({
        userEmail: user_email,
        friendsEmails: friend_email
        })

    if (alreadyFriends !== null) {
        // idk if we want to tell user if already added or just make them check
        // discord makes them check
        return res.sendStatus(404)
    }

    const friendSentRequest = await Friend_requests.findOneAndDelete({
        toEmail : user_email,
        fromEmail : friend_email
        })

    if (friendSentRequest !== null) {
        await Friend_lists.findOneAndUpdate(
            {userEmail: user_email},
            {$addToSet: { friendsEmails: friend_email}})
        return res.sendStatus(200)
    }

    Friend_requests.create({toEmail : friend_email, fromEmail : friend_email},
        function (err) {
            if (err) return handleError(err);
            return res.sendStatus(200)
          });

});



module.exports = router;
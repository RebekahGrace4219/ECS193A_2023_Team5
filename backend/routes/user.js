const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then(function (data) {
      res.send({ data });
    })
    .catch(function (err) {
      res.status(400).json("Error from the router" + err);
    });
});

router.route("/create_user").post((req, res) => {
  const req_name = req.body.name;
  const req_email = req.body.email;
  const req_username = req.body.username;

  // console.log(req.body)

  const newUser = new User({
    name: req_name,
    email: req_email,
    username: req_username
  });

  newUser
    .save()
    .then(() => res.json("new User added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route('/check_exist_username/:id').get(async (req, res) => {

  const userExist = await User.findOne({ username: req["params"]["id"] });
  let valid = true;
  if (userExist === null){
    valid = false;
  }
  return res.json(valid);
});

router.route('/check_exist/:id').get(async (req, res) => {

  const userExist = await User.findOne({ email: req["params"]["id"] });

  // Early return should be added here
  let valid = true;
  if (userExist === null){
    valid = false;
  }
  return res.json(valid);
});

router.route('/getEmail/:id').get(async (req, res) => {
  const userExist = await User.findOne({ username: req["params"]["id"] }, {name:0});

  return res.json(userExist);
});


router.route('/friend_request_list').post(async (req, res) => {
    const user_email = req.body.email;

    const userInfo = await User.findOne({
      email: user_email });

    return res.json(userInfo);
});
/*
router.route('/friend_request_list').post(async (req, res) => {
    const user_email = req.body.email;

    const requestList = await User.find({
        email: user_email}, 'recieved_requests');

    return res.json(requestList)
});*/
/*
router.route('/remove_friend').post(async (req, res) => {
    const user_email = req.body.userEmail;
    const friend_email = req.body.friendEmail;

    // add error checking
    const removeFriendFromUser = await User.findOneAndUpdate({
        userEmail: user_email, $pull: {friendsEmails: friend_email}});
    const removeUserFromFriend = await Friend_lists.findOneAndUpdate({
        userEmail: friend_email, $pull: {friendsEmails: user_email}});


    return res.sendStatus(200)
});
*/
function makeFriendPairing(source_email, dest_email){
    User.findOneAndUpdate(
        {email : source_email},
        {$pull: {
            sent_requests: {source: source_email, dest: dest_email}
        }},
        function (err) {
            if (err) return handleError(err);
            //return res.sendStatus(200)
          });
    User.findOneAndUpdate(
        {email : dest_email},
        {$pull: {
            recieved_requests: {source: source_email, dest: dest_email}
        }},
        function (err) {
            if (err) return handleError(err);
            //return res.sendStatus(200)
          });

    User.findOneAndUpdate(
        {email: source_email},
        {$addToSet: { friends: dest_email}},
        function (err) {
            if (err) return handleError(err);
            //return res.sendStatus(200)
          });


    User.findOneAndUpdate(
        {email: dest_email},
        {$addToSet: { friends: source_email}},
        function (err) {
            if (err) return handleError(err);
            //return res.sendStatus(200)
          });
}

router.route('/accept_friend').post(async(req, res) => {
  const user_email = req.body.myEmail;
  const friend_email = req.body.theirEmail;

  makeFriendPairing(friend_email, user_email);

  return res.status(200);
});
router.route('/add_friend/').post(async (req, res) => {
    const user_email = req.body.myEmail;
    const friend_email = req.body.theirEmail;

    /* Check if the desired person exists */
    const friendExists = await User.findOne({ email: friend_email});

    if (friendExists === null){
        return res.json("Friend does nto exist");
    }

    /* Check if the users are already friends */
    const userInfo = await User.findOne({
      email: user_email });

    const friends = userInfo["friends"];

    let alreadyFriends = false;
    if (friends.includes(friend_email)){
      alreadyFriends = true;
    }

    if (alreadyFriends) {
        // idk if we want to tell user if already added or just make them check
        // discord makes them check
        return res.json("Already friends");
    }

    /* I have already sent them a friend request */
    sentRequests = userInfo["sent_requests"];
    let already_sent = false;
    for (let i = 0; i < sentRequests.length; i++){
      if (sentRequests[i]["dest"] === friend_email){
        already_sent = true;
        break;
      }
    }

    if (already_sent){
      return res.json("Already sent friend request");
    }

    /* They may have already sent me a friend request */
    let recievedRequests = userInfo["recieved_requests"];

    let sent_first = false;
    for (let i = 0; i < recievedRequests.length; i++){
      if (recievedRequests[i]["source"] === friend_email){
        sent_first = true;
        break;
      }
    }

    if (sent_first) {
      /* remove the request from sent party */
      /* make the connection */
      makeFriendPairing(friend_email, user_email);
      return res.status(200);
    }

    /* Sent the friend request, place in my source to dest and their dest to source*/
    let request = {"source": user_email, "dest": friend_email};
    await User.findOneAndUpdate({email: user_email}, {$push: {sent_requests: request}}, { returnNewDocument: true });
    await User.findOneAndUpdate({email: friend_email}, {$push: {recieved_requests: request}}, { returnNewDocument: true });
    return res.sendStatus(200);

});

module.exports = router;

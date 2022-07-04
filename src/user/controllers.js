const User = require("./model");

exports.signUp = async (req, res) => {
try {
    const newUser = await User.create(req.body); // req.body is an object that contains k/v pairs that match my user model.
    res.send({user: newUser});
} catch (error) {
    console.log(error)
    res.send({error});
}
}
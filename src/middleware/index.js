const bcrypt = require("bcryptjs");


exports.hashPass = async (req, res, next) => {
try {
    req.body.pass = await bcrypt.hash(req.body.password, 8);
    next(); //moves onto next middleware/controller in endpoint
} catch (error) {
    console.log(error);
    res.send({ error });
}
};
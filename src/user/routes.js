const { Router } = require("express"); // import router method only from express
const { signUp } = require("./controllers"); // import only signUp from controllers file
const { hashPass } = require("../middleware"); 
const userRouter = Router(); // create a router that can have endpoints added to it

userRouter.post("/user", hashPass, signUp); //defining a post request on /user path, that calls the sign up controller
userRouter.post("login", login); //defining a post request on /login path, that calls the login controller

module.exports = userRouter;
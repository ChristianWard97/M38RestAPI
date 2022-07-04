const { Router } = require("express"); // import router method only from express
const { signUp } = require("./controllers"); // import only signUp from controllers file
const userRouter = Router(); // create a router that can have endpoints added to it

userRouter.post("/user", signUp); //defining a post request on /user path, that calls the sign up controller

module.exports = userRouter;
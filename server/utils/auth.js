const jwt = require("jsonwebtoken"); //

const secret = "mysecretssshhhhhhh";
const expiration = "2h";

module.exports = {
  // we are getting the req object
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization; // we getting it wether it is saved in the body,query or headers and setting it to token
    // console.log(token); // this gets logged in vscode terminal // this logs the token for ths user if they are logged in, it also gets logged everytime the user does something like endorisng a new skill
    // console.log("-------------------------");
    // console.log(req); // this gets logged in vscode terminal // this logs the req object, it gets logged everytime

    // We split the token string into an array and return actual token
    // if the token was part of the headers we split it out
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }
    // if token false return req object, so i think it means if no token is found return the req so it cancels out and goes to catch to log "Invalid Token"
    if (!token) {
      return req;
    }

    // if token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
    // if is found it passes it into the lines below and runs the verify function that come from jwt package
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      // console.log(data); // logs the username and id of the current user using the app
      req.user = data; // we set equal the req.profile to the data
      // console.log(req.profile); // also logs the username and id of the current user using the app
    } catch {
      console.log("Invalid token");
    }

    // return the request object so it can be passed to the resolver as `context`
    return req; // this returned to the resolvers.js in the context parameter
  },
  signToken: function ({ username, _id }) {
    const payload = { username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401); 

  jwt.verify(token, process.env.USERFRONT_PUBLIC_KEY, (err, auth) => {
    if (err) return res.sendStatus(403); 
    req.auth = auth;
    next();
  });
}

console.log(req.auth);


// {
//   mode: 'test',
//   tenantId: 'demo1234',
//   userId: 5,
//   userUuid: 'ab53dbdc-bb1a-4d4d-9edf-683a6ca3f609',
//   isConfirmed: false,
//   authorization: {
//     demo1234: {
//       tenantId: 'demo1234',
//       name: 'Demo project',
//       roles: ["admin"],
//       permissions: []
//     },
//   },
//   sessionId: '35d0bf4a-912c-4429-9886-cd65a4844a4f',
//   iat: 1614114057,
//   exp: 1616706057
// }
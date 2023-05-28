// index.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const _ = require("lodash");
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();
const port = 4000;

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(
  jsonServer.rewriter({
    "/users/me": "/me",
    "/looks/categories": "/tags",
  })
);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
// server.use((req, res, next) => {
//   if (req.method === "POST") {
//     req.body.createdAt = Date.now();
//   }
//   // Continue to JSON Server router
//   next();
// });

// endpoints

// login endpoint
server.post("/auth/facebook", (req, res) => {
  const db = router.db; // Assign the lowdb instance

  if (Array.isArray(req.body)) {
    req.body.forEach((element) => {
      insert(db, "facebookAuth", element); // Add a post
    });
  } else {
    insert(db, "facebookAuth", req.body); // Add a post
  }
  res.status(200).send({
    token: req.body,
  });

  /**
   * Checks whether the id of the new data already exists in the DB
   * @param {*} db - DB object
   * @param {String} collection - Name of the array / collection in the DB / JSON file
   * @param {*} data - New record
   */
  function insert(db, collection, data) {
    const table = db.get(collection);
    if (_.isEmpty(table.find(data).value())) {
      table.push(data).write();
    }
  }
});


server.post("/search/", (req, res) => {
  const db = router.db; // Assign the lowdb instance

  res.status(200);

});

// the logout endpoint
server.get("/logout", function (req, res) {
  const db = router.db; // Assign the lowdb instance
  remove(db, "facebookAuth", req.body); // Add a post
  res.status(200).send("logged out");

  /**
   * Checks whether the id of the new data already exists in the DB
   * @param {*} db - DB object
   * @param {String} collection - Name of the array / collection in the DB / JSON file
   * @param {*} data - New record
   */
  function remove(db, collection, data) {
    const table = db.get(collection);
    if (!_.isEmpty(table.find(data).value())) {
      table.pop(data).write();
    }
  }
});

// the looks endpoint
server.get("/looks/?offset=0&count=2&shuffle=true", function (req, res) {
  const db = router.db; // Assign the lowdb instance
  res.status(200).send(get(db, "looks"));

  /**
   * Checks whether the id of the new data already exists in the DB
   * @param {*} db - DB object
   * @param {String} collection - Name of the array / collection in the DB / JSON file
   * @param {*} data - New record
   */
  function get(db, collection) {
    return db.get(collection);
  }
});

server.get("/looks/?search=Look", function (req, res) {
  const db = router.db; // Assign the lowdb instance
  res.status(200).send(get(db, "looks"));

  
  /**
   * Checks whether the id of the new data already exists in the DB
   * @param {*} db - DB object
   * @param {String} collection - Name of the array / collection in the DB / JSON file
   * @param {*} data - New record
   */
  function get(db, collection) {
    return db.get(collection);
  }
});

server.use(router);
server.listen(port, () => {
  console.log("JSON Server is running");
});

const requestRoutes = require("./request_routes");

module.exports = function (app, db) {
  requestRoutes(app, db);
};

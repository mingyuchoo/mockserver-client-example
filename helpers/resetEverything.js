var mockServerClient = require("mockserver-client").mockServerClient;
var environment = require("./environment.json");

module.exports = function() {
  mockServerClient(environment.host, environment.port)
    .reset()
    .then(
      function() {
        console.log("reset all state");
      },
      function(error) {
        console.log(error);
      }
    );
};

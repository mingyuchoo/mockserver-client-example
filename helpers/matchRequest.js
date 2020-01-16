var mockServerClient = require("mockserver-client").mockServerClient;
var environment = require("./environment.json");

module.exports = function(data) {
  mockServerClient(environment.host, environment.port)
    .mockAnyResponse(data)
    .then(
      function() {
        console.log("expectation created");
      },
      function(error) {
        console.log(error);
      }
    );
};

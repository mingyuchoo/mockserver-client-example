var mockServerClient = require("mockserver-client").mockServerClient;
var environment = require("./environment.json");

module.exports = function() {
  mockServerClient(environment.host, environment.port)
    .retrieveRecordedRequests({})
    .then(
      function(recordedRequests) {
        console.log(JSON.stringify(recordedRequests));
      },
      function(error) {
        console.log(error);
      }
    );
};

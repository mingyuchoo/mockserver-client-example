var mockServerClient = require("mockserver-client").mockServerClient;
var environment = require("./environment.json");

module.exports = function() {
  mockServerClient(environment.host, environment.port)
    .retrieveRecordedRequestsAndResponses({})
    .then(
      function(recordedRequestsAndResponses) {
        console.log(JSON.stringify(recordedRequestsAndResponses));
      },
      function(error) {
        console.log(error);
      }
    );
};

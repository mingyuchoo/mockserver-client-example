var mockServerClient = require("mockserver-client").mockServerClient;

module.exports = function(data) {
  mockServerClient("localhost", 1080)
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

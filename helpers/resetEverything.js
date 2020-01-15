var mockServerClient = require("mockserver-client").mockServerClient;

module.exports = function() {
  mockServerClient("localhost", 1080)
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

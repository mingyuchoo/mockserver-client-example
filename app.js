var resetEverything = require("./helpers/resetEverything");
var matchRequest = require("./helpers/matchRequest");

var service1 = require("./specs/service1");

resetEverything();

// service1 spec
service1.map(function(spec) {
  matchRequest(spec);
});

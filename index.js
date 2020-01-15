var resetEverything = require("./helpers/resetEverything");
var createExpectation = require("./helpers/createExpectation");

var specs = require("./specs");

resetEverything();
createExpectation(specs.spec01);
createExpectation(specs.spec02);

// specs.map(function(spec) {
//   createExpectation(spec);
// });

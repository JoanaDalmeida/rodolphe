var fs = require('fs');
var path = require('path');
module.exports = function(object, fileName) {
  var pth = path.resolve(__dirname + '/../' + fileName);
  fs.writeFile(pth, JSON.stringify(object, null, 4), function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + fileName);
    }
  });
};

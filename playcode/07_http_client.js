var http = require('http');
var url = process.argv[2];
http.get(url, function(data){
  var string = '';
  response.on('data', function(data){
    string = string + data.toString();
  })

})

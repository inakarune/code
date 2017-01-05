var http = require('http');
var args = process.argv.slice(2);
var results = [];
var counter = 0;


for(let i = 0; i < args.length; ++i){
  
http.get(args[0], function(response){
  let string = '';
  response.on('data', function(data){
    string = string + data.toString();
  });
  response.on('end', function(){
    results.push(string);
    ++counter;
    if(counter === 3){
      results.forEach(function(str){
        console.log(str);
      });
    }

  });
});
}

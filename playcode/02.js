//var fs = require("fs");
//console.log(process.argv);
var arr = process.argv.slice(2);
var sum = 0;
for(var i = 0; i < arr.length; i++){
  var a = +arr[i];
  sum += a;
}

// arr.forEach(function(str){
//   var num = +str;
//   sum += num;
// })
console.log(sum);

var http = require('http');// Object를 가져온다.

http.get(process.argv[2], function(response){
  var datas = [];
  response.on('data', function(data){
    var str = data.toString();
    datas.push(str);
  })
  response.on('end', function(data){
    var answer = datas.join('');
    console.log(answer.length);
    console.log(answer)
  })
})
// iot 사물 인터넷

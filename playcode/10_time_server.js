var net = require('net');
var port = process.argv[2];

function onConnect(socket){
  let date = new Date();
  let year = date.getFullYear();
  let month = padding(date.getMonth() + 1);
  let day = padding(date.getDate());
  let hour = padding(date.getHours());
  let minute = padding(date.getMinutes());
  let format = `${year}-${month}-${day} ${hour}:${minute}\n`;
  socket.write(format);
  sorket.end();
}
var server = net.createServer(onConnect); // 서버에 누군가 들어올 때마다 onConnect를 통한다.

server.listen(port); // 서버를 어디다 둘 지 정하는 listen

function padding(num){
  if(num < 10){
    return '0' + num;
  } else {
    return '' + num;
  }
}
// 8000은 포트넘버
// 요청이 올때마다 8000으로 넘긴다.
// 모든 요청에는 포트가 잇다. 주소 끝에 포트가 잇다. www.google.com:80 예.
// 80이란 서버가 잇기 때문에 돌아감
// 보통 개발할 때 8080 포트를 주로 쓴다. 1000 이상 2만 이하 포트 존재

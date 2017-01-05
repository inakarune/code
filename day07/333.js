
var name = "selly";
var age = "28";
var gender = "woman";

var is_member = prompt("웹사이트 멤버세요?");
var ageask = prompt('나이를 알려주세요');


if ( is_member === "아니요" || ageask < 21){
  alert('사모님, 싸장님 안녕히가세요.')
} else {
  var name = prompt('이름이 뭐에요')
  alert('미스 아니면 미스터' + name + '웹사이트에 온걸 환영해요.')
  var thirsty = prompt('목말라요?');
  if (thirsty === '네'){
    var drink_of_choice = prompt('무슨 음료를 원해요?');
    if(drink_of_choice === "우유"){
      alert('나가죠')
    } else {
      alert('네,' + name + drink_of_choice + '드리겟습니다.')
    }
  }
}

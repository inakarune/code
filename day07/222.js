if (3 < 4){
  console.log('실행이 되는 조건문이다')
}

if (3 > 4){
  console.log('실행이안되는조건이다.')
}

/* if (4 < 5){
  prompt('당신의 기분은 어떤가요?')
} */

/*
if (prompt('당신의 기분은 어떤가요?') === '기분이 좋지 않다'){
  console.log("힘내세요")
}

if (prompt('3을 꼭 써주세요') !== "3"){
  alert('3이라고 쓰랫지!')
} */


/*
if (prompt('비밀번호를 입력해주세요') === "123"){
  alert('환영해요. 잘 쳣다.')
} else {
  window.location = "http://www.google.com"
}

*/


if (person === '괜찮은 사람') {
  console.log('시간되요, 일요일에 뵈요!')
} else if (dates_this_week < 3 || !weekend_plans){
  console.log('뭐, 안될거야 없죠')
} else {
  console.log('생각해 주셔서 감사해요, 근데 이번에 미국에서 제 친구가 와서요...')
}

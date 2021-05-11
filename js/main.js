'use strict';

let name = true;

while (name) {
  const answer = prompt("日本の首都は？")
  if (answer === null){
    break;
  } else if(answer !== "東京"){
    alert("不正解です！");
  } else {
    alert("正解です！");
  }
}
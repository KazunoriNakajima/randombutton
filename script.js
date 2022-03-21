'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', randomStart)

let flag = 0;

function randomStart(){
  console.log('Button clicked!'); 
  if (flag === 0){
      flag = 1;
      const id = setInterval(changeColor,500);
      function changeColor() {
        if (flag === 0){
          clearInterval(id);
        }
        const target =  document.getElementsByTagName("body");
        const randomNumber = Math.floor(Math.random() * (16**6));
        const randomColor = "#" + randomNumber.toString(16);
        target[0].style.backgroundColor = randomColor;

        randomPositionButton();
      }
  } else {
    flag = 0;
    return;
  }
}

function randomPositionButton(){
  const button =  document.getElementById("color-button");
  button.style.position = "absolute";
  button.style.left =Math.floor(Math.random() * (1000)) + "px";
  button.style.top = Math.floor(Math.random() * (800)) + "px";
}
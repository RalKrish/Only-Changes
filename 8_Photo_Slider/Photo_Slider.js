const TheContainer=document.querySelector('.mainCont')
const leftBtn=document.querySelector('.left')
const rightBtn=document.querySelector('.right')
const imgList=['1','2','3','4'];
let index=0


function function1(){
  index--
  if(index<0){
    index=imgList.length-1
  }
  TheContainer.style.background = `url("Img/${imgList[index]}.jpg") center/cover no-repeat`;

}

function function2(){
  index++
  if(index>imgList.length-1){
    index=0
  }
    TheContainer.style.background = `url("Img/${imgList[index]}.jpg") center/cover no-repeat`;

}

// Event listeners
leftBtn.addEventListener('click', function1);
rightBtn.addEventListener('click', function2);



//this is also working code
// function function1() {
//   if (index > 0 && index <= imgList.length) {
//     index--;
//     TheContainer.style.background = `url("Img/${imgList[index]}.jpg") center/cover no-repeat`;
//   } else {
//     index = imgList.length - 1; // Set index to the last position
//     TheContainer.style.background = `url("Img/${imgList[index]}.jpg") center/cover no-repeat`;
//   }
// }

// function function2() {
//   if (index >= 0 && index < imgList.length) {
//     index++;
//     TheContainer.style.background = `url("Img/${imgList[index]}.jpg") center/cover no-repeat`;
//   } else {
//     index = 0; // Set index to the initial position
//     TheContainer.style.background = `url("Img/${imgList[index]}.jpg") center/cover no-repeat`;
//   }
// }

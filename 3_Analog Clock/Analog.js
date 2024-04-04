const secHand=document.querySelector(".Seconds_hand")
const minHand=document.querySelector(".Minute_hand")
const hrHand=document.querySelector(".Hour_hand")

const ClockTick=()=>{
  const dates=new Date();
  const sec=dates.getSeconds()/60;
  const mins=(sec+dates.getMinutes())/60;
  const hrs=(mins+dates.getHours())/12;

  rotateHand(secHand,sec)
  rotateHand(minHand,mins)
  rotateHand(hrHand,hrs)

}

function rotateHand(hand,degree){
  hand.style.setProperty('--rotate',degree*360)
}
setInterval(ClockTick,1000)
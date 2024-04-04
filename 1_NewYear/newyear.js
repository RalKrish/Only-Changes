const theDay=document.querySelector(".days")
const theHour=document.querySelector(".hours")
const theMin=document.querySelector(".minutes")
const theSec=document.querySelector(".seconds")

function updater() {

  const thisYear=new Date().getFullYear()
  console.log(thisYear)

  const FromToday=new Date();
  console.log(FromToday)

  const nextYearTimer=new Date(`January 1 ${thisYear+1} 00:00:00`);
  console.log(nextYearTimer)

  const Differ = nextYearTimer-FromToday
  console.log(Differ)

  const days = Math.floor(Differ / (1000 * 60 * 60 * 24));
console.log(days);

const hrs = Math.floor((Differ / (1000 * 60 * 60)) % 24);//we use % so as to get remaining no.of days
console.log(hrs);

const minu = Math.floor((Differ / (1000 * 60)) % 60);
console.log(minu);

const sec = Math.floor((Differ / 1000) % 60);
console.log(sec); //we always use differ as reference as it will give the remaining.



  theDay.innerHTML=days;
  theHour.innerHTML=hrs;
  theMin.innerHTML=minu;
  theSec.innerHTML=sec;
}

updater()
// setInterval(updater,1000)
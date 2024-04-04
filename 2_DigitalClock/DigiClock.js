const myHrs = document.querySelector(".Hours");
const myMin = document.querySelector(".Minutes");
const mySec = document.querySelector(".Seconds");

const twenty4 = document.querySelector(".twenty4");
const twenty4_Checked=twenty4.querySelector('input[type="radio"]')
const twelve = document.querySelector(".twelve");

const am = document.querySelector("#AM");
const pm = document.querySelector("#PM");
// const myDays=document.querySelector(".days ul ") previously this was used as this needs extra step to be written at line 36

const myDays=document.querySelectorAll(".days ul li")


let theHrs = new Date().getHours();
const theDay=new Date().getDay()
  console.log(theDay)

const function1 = () => {
  twenty4_Checked.checked = true;// to make sure 24 index is checked always by default

  myHrs.innerHTML = theHrs;
  am.checked = false;
  pm.checked = false;
};

const function2 = () => {
    theHrs = new Date().getHours();
    am.checked = theHrs < 12;
    pm.checked = theHrs >= 12;
    myHrs.innerHTML = theHrs > 12 ? theHrs - 12 : theHrs;
  };

  const function3 = () => {
    // const daysList = myDays.querySelectorAll('li');
    for (let i = 0; i < myDays.length; i++) {
      const day = myDays[i];
      if (i === theDay) {
        day.classList.add('highli');
      } else {
        day.classList.remove('highli');
      }
    }
  };

twenty4.addEventListener("click", function1);
twelve.addEventListener("click", function2);
// myDays.addEventListener("click",function3) no button

const timer = () => {
  const newTime = new Date().getTime();
  console.log(newTime);

  const hours = Math.floor((newTime / (1000 * 60 * 60)) % 24);
  console.log(hours);

  theHrs = new Date().getHours();
  console.log(theHrs);

  const theMin = new Date().getMinutes();
  console.log(theMin);

  const theSec = new Date().getSeconds();

  console.log(theSec);



  // myHrs.innerHTML=theHrs
  myMin.innerHTML = theMin;
  mySec.innerHTML = theSec;
  // myDays.innerHTML="rah"
};
setInterval(timer, 1000);
function1();
function3();

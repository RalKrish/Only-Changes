
  const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        //  [intially 10:00:00 - 0 = starttime ie 10:00:00] ,
        // [(10:00:10 - 10ms)=(10:00:00) after update fn is called] ,
        // [(10:00:25 - 25ms) = 10:00:00]

        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update(){

    const currentTime = Date.now(); //10:00:00 , 10:00:10 , 10:00:25
    elapsedTime = currentTime - startTime;
    // intial  10:00:00- 10:00:00 ie = 0,
    // [(10:00:10 - 10:00:00)=10ms],
    //  [(10:00:25- 10:00:00) = 25ms]

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

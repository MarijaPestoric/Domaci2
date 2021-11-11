const buttonElements = document.querySelector('.button');
const pomodoro = document.querySelector('.pomodoro');
const shortBreak = document.querySelector('.short-break');
const longBreak = document.querySelector('.long-break');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');
const time = document.querySelector('.time');
var countDown;
let timeSecond= 25*60;
let timeShort = 5*60;
let timeLong = 10*60;
let stoppedTime;

pomodoro.addEventListener('click', ()=>{
    clearInterval(countDown);
    startTimer(stoppedTime);
    buttonElements.classList.remove('hide');
});
shortBreak.addEventListener('click', ()=>{
    stopTimer();
    startTimer(timeShort);
    buttonElements.classList.add('hide');
});
longBreak.addEventListener('click', ()=>{
    stopTimer();
    startTimer(timeLong);
    buttonElements.classList.add('hide');
})
startBtn.addEventListener('click', ()=>{
    startTimer(timeSecond);
});
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', ()=>{
    timeSecond = 25*60;
    displayTime(timeSecond);
    startBtn.classList.remove('hide');
});
function stopTimer(){
    clearInterval(countDown);
    let stoppedTimeMin = parseInt(time.innerHTML[0]+time.innerHTML[1]);
    let stoppedTimeSec = parseInt(time.innerHTML[3]+time.innerHTML[4]);
    stoppedTime = stoppedTimeMin*60 + stoppedTimeSec;
    startBtn.classList.remove('hide')
}

function startTimer(second){
    startBtn.classList.add('hide')
    countDown = setInterval(()=>{
        second--;
        displayTime(second)
        if(second<=0 || second < 1){
            endTime();
            clearInterval(countDown);
            startBtn.classList.remove('hide')
        }
    },1000)
};

function displayTime(second){
    const min = Math.floor(second/60);
    const sec = Math.floor(second % 60);
    time.innerHTML = `${min<10 ? '0': ''}${min}:${sec<10? '0': ''}${sec}`;
}


function endTime(){
    var audio = new Audio('sound/alarm.wav');
    audio.play();
}

let timer;
let seconds = 0, minutes = 0, hours = 0;
let isRunning = false;

function updateTime() {
    seconds++;
    if (seconds == 60) { seconds = 0; minutes++; }
    if (minutes == 60) { minutes = 0; hours++; }
    
    document.querySelector('.time').innerText =
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}

document.querySelector('.start').addEventListener('click', function() {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        isRunning = true;
    }
});

document.querySelector('.stop').addEventListener('click', function() {
    clearInterval(timer);
    isRunning = false;
});

document.querySelector('.reset').addEventListener('click', function() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0; minutes = 0; hours = 0;
    document.querySelector('.time').innerText = "00:00:00";
});

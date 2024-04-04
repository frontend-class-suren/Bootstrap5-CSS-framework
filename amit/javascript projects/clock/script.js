function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedHours = formatTime(hours);
    const formattedMinutes = formatTime(minutes);
    const formattedSeconds = formatTime(seconds);

    const timeString = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
    document.getElementById('clock').textContent = timeString;
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
setInterval(updateClock, 1000);
updateClock();

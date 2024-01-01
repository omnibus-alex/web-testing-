function startCountdown() {
    let seconds = 10;
    const countdownElement = document.getElementById('countdown');

    const countdownInterval = setInterval(function () {
        countdownElement.textContent = `Countdown: ${seconds} seconds`;

        if (seconds <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = 'Countdown completed!';
        } else {
            seconds--;
        }
    }, 1000);
}

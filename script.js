// Birthday Countdown (11 July)
const countdown = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date();
    let birthday = new Date(now.getFullYear(), 6, 11); // July = 6

    if (now > birthday) {
        birthday.setFullYear(now.getFullYear() + 1);
    }

    const diff = birthday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (
        now.getDate() === 11 &&
        now.getMonth() === 6
    ) {
        countdown.innerHTML =
        "🎉🎂 Happy Birthday My Love! Today is YOUR special day! 💖";
    } else {
        countdown.innerHTML =
        `🎈 ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds left until your birthday!`;
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);
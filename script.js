function updateCountdown() {
    const currentDate = new Date();
    const endDate = new Date("2023-09-12T00:00:00Z"); // Your end date

    const timeDiff = endDate - currentDate;

    if (timeDiff <= 0) {
        document.getElementById("countdown").innerHTML = "Time is up!";
        return;
    }

    const seconds = Math.floor((timeDiff / 1000) % 60);
    const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const days = Math.floor((timeDiff / (1000 * 60 * 60 * 24)) % 30);
    const months = Math.floor((timeDiff / (1000 * 60 * 60 * 24 * 30)) % 12);

    const countdown = `${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

    document.getElementById("countdown").innerHTML = countdown;
}

// Call updateCountdown every second
setInterval(updateCountdown, 1000);

// Initial call to set the countdown
updateCountdown();

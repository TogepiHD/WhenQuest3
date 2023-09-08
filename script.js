function updateCountdown() {
    const currentDate = new Date();
    let endDate = new Date("2023-09-27T16:00:00Z"); // Your end date

    let timeDiff = endDate - currentDate;

    if (timeDiff <= 0) {
        document.getElementById("countdownone").innerHTML = "Meta connect is here!";
        return;
    }

    let seconds = Math.floor((timeDiff / 1000) % 60);
    let minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    let hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    let days = Math.floor((timeDiff / (1000 * 60 * 60 * 24)) % 30);
    let months = Math.floor((timeDiff / (1000 * 60 * 60 * 24 * 30)) % 12);

    let countdown_parts = "";

    let lastDeleted = false;
    if (months !== 0) {
        lastDeleted = false;
        countdown_parts += months + (months === 1 ? " month " : " months ");
    } else {
        lastDeleted = true;
    }

    if (days !== 0 || !lastDeleted) {
        lastDeleted = false;
        countdown_parts += days + (days === 1 ? " day " : " days ");
    }

    if (hours !== 0 || !lastDeleted) {
        lastDeleted = false;
        countdown_parts += hours + (hours === 1 ? " hour " : " hours ");
    }

    if (minutes !== 0 || !lastDeleted) {
        lastDeleted = false;
        countdown_parts += minutes + (minutes === 1 ? " minute " : " minutes ");
    }

    if (seconds !== 0 || !lastDeleted) {
        lastDeleted = false;
        countdown_parts += seconds + (seconds === 1 ? " second" : " seconds");
    }

    document.getElementById("countdownone").innerHTML = countdown_parts;

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    endDate = new Date("2023-10-10T00:00:00Z"); // Your end date

    timeDiff = endDate - currentDate;

    if (timeDiff <= 0) {
        document.getElementById("countdowntwo").innerHTML = "The quest has now released!!";
        return;
    }

    seconds = Math.floor((timeDiff / 1000) % 60);
    minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    days = Math.floor((timeDiff / (1000 * 60 * 60 * 24)) % 30);
    months = Math.floor((timeDiff / (1000 * 60 * 60 * 24 * 30)) % 12);

    countdown_parts = "";

    lastDeleted = false;
    if (months !== 0) {
        lastDeleted = false;
        countdown_parts += months + (months === 1 ? " month " : " months ");
    } else {
        lastDeleted = true;
    }

    if (days !== 0 || !lastDeleted) {
        lastDeleted = false;
        countdown_parts += days + (days === 1 ? " day " : " days ");
    }

    if (hours !== 0 || !lastDeleted) {
        lastDeleted = false;
        countdown_parts += hours + (hours === 1 ? " hour " : " hours ");
    }

    if (minutes !== 0 || !lastDeleted) {
        lastDeleted = false;
        countdown_parts += minutes + (minutes === 1 ? " minute " : " minutes ");
    }

    if (seconds !== 0 || !lastDeleted) {
        lastDeleted = false;
        countdown_parts += seconds + (seconds === 1 ? " second" : " seconds");
    }

    document.getElementById("countdowntwo").innerHTML = countdown_parts;
}

// Call updateCountdown every second
setInterval(updateCountdown, 1000);

// Initial call to set the countdown
updateCountdown();

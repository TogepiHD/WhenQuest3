function updateCountdown() {
    const currentDate = new Date();
    const endDate = new Date("2023-09-12T00:00:00Z"); // Your end date

    timeDiff = endDate - currentDate;

    if (timeDiff <= 0) {
        document.getElementById("countdownone").innerHTML = "Meta connect is here!";
        return;
    }

    seconds = Math.floor((timeDiff / 1000) % 60);
    minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    days = Math.floor((timeDiff / (1000 * 60 * 60 * 24)) % 30);
    months = Math.floor((timeDiff / (1000 * 60 * 60 * 24 * 30)) % 12);

    countdown_parts = ""
    
    lastDelted = False
    if (months != 0) {
        lastDelted = False
        if (months == 1) {countdown_parts += months+"month"+" "}
        else {countdown_parts += months+"months"+" "}
    } else { lastDelted = True }


    if (days == 0 && lastDelted == True) {lastDelted = True}
    else {
        lastDelted = False
        if (days == 1) {countdown_parts += days+"day"+" "}
        else {countdown_parts += days+"days"+" "}
    }

    if (hours == 0 && lastDelted == True) {lastDelted = True}
    else {
        lastDelted = False
        if (hours == 1) {countdown_parts += hours+"hour"+" "}
        else {countdown_parts += hours+"hours"+" "}
    }

    if (minutes == 0 && lastDelted == True) {lastDelted = True}
    else {
        lastDelted = False
        if (minutes == 1) {countdown_parts += minutes+"minute"+" "}
        else {countdown_parts += minutes+"minutes"+" "}
    }

    if (seconds == 0 && lastDelted == True) {lastDelted = True}
    else {
        lastDelted = False
        if (seconds == 1) {countdown_parts += seconds+"second"}
        else {countdown_parts += seconds+"seconds"}
    }

    document.getElementById("countdownone").innerHTML = countdown_parts;

    /////////////////////////////////////////////////////////////////////////////////////////////////////

    endDate = new Date("2023-10-12T00:00:00Z"); // Your end date

    const timeDiff = endDate - currentDate;

    if (timeDiff <= 0) {
        document.getElementById("countdowntwo").innerHTML = "The quest has now released!!";
        return;
    }

    seconds = Math.floor((timeDiff / 1000) % 60);
    minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    days = Math.floor((timeDiff / (1000 * 60 * 60 * 24)) % 30);
    months = Math.floor((timeDiff / (1000 * 60 * 60 * 24 * 30)) % 12);

    countdown_parts = ""

    lastDelted = False
    if (months != 0) {
        lastDelted = False
        if (months == 1) {countdown_parts += months+"month"+" "}
        else {countdown_parts += months+"months"+" "}
    } else { lastDelted = True }


    if (days == 0 && lastDelted == True) {lastDelted = True}
    else {
        lastDelted = False
        if (days == 1) {countdown_parts += days+"day"+" "}
        else {countdown_parts += days+"days"+" "}
    }

    if (hours == 0 && lastDelted == True) {lastDelted = True}
    else {
        lastDelted = False
        if (hours == 1) {countdown_parts += hours+"hour"+" "}
        else {countdown_parts += hours+"hours"+" "}
    }

    if (minutes == 0 && lastDelted == True) {lastDelted = True}
    else {
        lastDelted = False
        if (minutes == 1) {countdown_parts += minutes+"minute"+" "}
        else {countdown_parts += minutes+"minutes"+" "}
    }

    if (seconds == 0 && lastDelted == True) {lastDelted = True}
    else {
        lastDelted = False
        if (seconds == 1) {countdown_parts += seconds+"second"}
        else {countdown_parts += seconds+"seconds"}
    }

    document.getElementById("countdowntwo").innerHTML = countdown_parts;
}

// Call updateCountdown every second
setInterval(updateCountdown, 1000);

// Initial call to set the countdown
updateCountdown();

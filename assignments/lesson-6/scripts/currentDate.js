    var d1 = new Date();
    var day = d1.getDate();
    var month = d1.getMonth();
    var year = d1.getFullYear();
    var wd = d1.getDay();
    // This array is how you return the weekday
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // Output the date in a readable format.
    var dateString = weekday[wd] + ", " + day + " " + monthname[month] + ", " + year;
    document.getElementById("current").innerHTML = dateString;
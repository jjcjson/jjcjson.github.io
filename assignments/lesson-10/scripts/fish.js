// My APPID: 1334d472ef8c568551e0f1d6698a48dd. Fish ID: 5585010

// Hero Weather Summary
var weatherObject = new XMLHttpRequest
weatherObject.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5585010&APPID=1334d472ef8c568551e0f1d6698a48dd&units=imperial', true);
weatherObject.send();
weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    // THIS SECTION NEEDS TO BE FILLED: CURRENT CONDITION, HIGH TEMP, HUMIDITY, WIND SPEED, WIND CHILL (ALL LIVE)
    var conditions = weatherInfo.weather[0].description;
    var temp = weatherInfo.main.temp;
    var humid = weatherInfo.main.humidity;
    var windsp = weatherInfo.wind.speed;
    document.getElementById('cond').innerHTML = 'Conditions: ' + conditions;
    document.getElementById('temp').innerHTML = 'Temperature: ' + temp + '&deg;F';
    document.getElementById('humid').innerHTML = 'Humidity: ' + humid + '%';
    document.getElementById('wind').innerHTML = 'Wind Speed: ' + windsp + 'mph';

    // Wind Chill calculation
    var f = Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(windsp, 0.16)) + (0.4275 * temp * Math.pow(windsp, 0.16)));
    document.getElementById('chill').innerHTML = 'Wind Chill: ' + f + '&deg;F';
}

// 5 Day Forecast
var weatherRequest = new XMLHttpRequest
weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&APPID=1334d472ef8c568551e0f1d6698a48dd&units=imperial', true);
weatherRequest.send();
weatherRequest.onload = function () {

    var weatherInfo = JSON.parse(weatherRequest.responseText);
    console.log(weatherInfo);

    var date = [];
    var temp = [];
    var iconCode = [];

    for (i = 0; i < weatherInfo.list.length; ++i) {
        //i is the device for finding correct JSON data groups; k is for populating date, temp, and iconCode arrays
        if (weatherInfo.list[i].dt_txt.includes("15:00:00")) {
            var dateK = new Date(weatherInfo.list[i].dt * 1000);
            var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            date.push(weekDay[dateK.getDay()] + '<br>' + month[dateK.getMonth()] + ' ' + dateK.getDate());
            //document.getElementById('day' + n).innerHTML = date[k];
            //                       ^ This should display 'day1' for the first id. Hopefully it works!

            temp.push(Math.round(weatherInfo.list[i].main.temp));
            //document.getElementById(n + 't').innerHTML = temp[k] + '&deg;F';

            iconCode.push("https://openweathermap.org/img/w/" + weatherInfo.list[i].weather["0"].icon + ".png");
            //document.getElementById(n + 'i').innerHTML = iconCode[k];
        }
        continue;
    }
    // Display Data: document.getElementById('id').innerHTML = fffff;
    document.getElementById('day1').innerHTML = date[0];
    document.getElementById('day2').innerHTML = date[1];
    document.getElementById('day3').innerHTML = date[2];
    document.getElementById('day4').innerHTML = date[3];
    document.getElementById('day5').innerHTML = date[4];

    document.getElementById('1t').innerHTML = temp[0] + '&deg;F';
    document.getElementById('2t').innerHTML = temp[1] + '&deg;F';
    document.getElementById('3t').innerHTML = temp[2] + '&deg;F';
    document.getElementById('4t').innerHTML = temp[3] + '&deg;F';
    document.getElementById('5t').innerHTML = temp[4] + '&deg;F';

    document.getElementById('1i').src = iconCode[0];
    document.getElementById('2i').src = iconCode[1];
    document.getElementById('3i').src = iconCode[2];
    document.getElementById('4i').src = iconCode[3];
    document.getElementById('5i').src = iconCode[4];
}
// PRESTON EVENT
var article = document.querySelector('article');
var request = new XMLHttpRequest();
request.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json', true);
request.send();
request.onload = function () {
    var townData = JSON.parse(request.responseText);
    console.log(townData);
    showData(townData);
}

function showData(jsonObj) {
    var data = jsonObj['towns'];
        
    for (var i = 0; i < data.length; i++) {
        if (data[i].name == 'Fish Haven') {
            //Display Event data
            myArticle = document.createElement('div');
            myH3 = document.createElement('h3');
            myP = document.createElement('p');
            myP1 = document.createElement('p');
            myP2 = document.createElement('p');
            myH3.textContent = "Events of this year";
            myP.textContent = data[i].events[0];
            myP1.textContent = data[i].events[1];            
            myP2.textContent = data[i].events[2];

            myArticle.appendChild(myH3);
            myArticle.appendChild(myP);
            myArticle.appendChild(myP1);
            myArticle.appendChild(myP2);
            article.appendChild(myArticle);
        }
    }
}
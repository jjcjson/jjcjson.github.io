// TEMPLE PAGE
var requestURL = 'json/temples.json';
var article = document.querySelector('main');
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function tD() {
    var templeInfo = request.response;
    showData(templeInfo);
}
var atl = 0;
var aba = 0;
var bern = 0;
var newp = 0;
var br = document.createElement('br');


function showData(jsonObj) {
    var data = jsonObj['temples'];
        
    for (var i = 0; i < data.length; i++) {
        var myArticle = document.createElement('div');
        var myH2 = document.createElement('h2');
        var myh4 = document.createElement('h4');
        var myh42 = document.createElement('h4');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');

        myH2.textContent = data[i].name;
        myh4.textContent = data[i].phone;
        myh42.textContent = data[i].email;
        myPara1.textContent = data[i].address;
        myPara2.textContent = services(data[i].services);
        myPara3.textContent = schedule(data[i].schedule);
        myPara4.textContent = "Dedicated in " + data[i].dedicated;

        myArticle.appendChild(myH2);
        myArticle.appendChild(myh4);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);

        if (data[i].name == 'Atlanta') {
            atl = atl + data[i].id;
        myArticle.setAttribute('class', 'templeInfo');
        myArticle.setAttribute('id', 'atl');
        }
        if (data[i].name == 'Aba Nigeria') {
            aba += data[i].id;
            myArticle.setAttribute('class', 'templeInfo');
            myArticle.setAttribute('id', 'aba');
        }
        if (data[i].name == 'Bern Switzerland') {
            bern += data[i].id;
            myArticle.setAttribute('class', 'templeInfo');
            myArticle.setAttribute('id', 'bern');
        }
        if (data[i].name == 'Newport Beach') {
            newp += data[i].id;
            myArticle.setAttribute('class', 'templeInfo');
            myArticle.setAttribute('id', 'newp');
        }

        article.appendChild(myArticle);
        
    }
}
// Populate schedule and services
function services(array) {
    var output = "";
    if (array[0] == false && array[1] == false && array[2] == false && array[3] == false) {
        output = "No services.";
        return output;
    }
    else {
        if (array[0] == true) {
            output += "Clothing rental available, ";
        }
        if (array[1] == true) {
            output += "Cafeteria available, ";
        }
        if (array[2] == true) {
            output += "Patron Housing Available, ";
        }
        if (array[3] == true && array[2] == true) {
            output += "and ";
        }
        if (array[3] == true) {
            output += "Distribution Center Nearby";
        }
        return output;
    }
}
function schedule(array) {
    var output = "Hosts ";
    output += array.length + " sessions at ";
    for (i = 0; i < array.length; i++) {
        if (i == (array.length - 1)) {
            output += "and " + array[i] + ".";
        }
        else {
            output += array[i] + ", ";
        }
    }
    return output;
}
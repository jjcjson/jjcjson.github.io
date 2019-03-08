var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var article = document.querySelector('article');
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function tD() {
    var townData = request.response;
    showData(townData);
}


function showData(jsonObj) {
    var data = jsonObj['towns'];
        
    for (var i = 0; i < data.length; i++) {
        if (data[i].name == 'Preston' || data[i].name == 'Soda Springs' || data[i].name == 'Fish Haven') {
            var myArticle = document.createElement('div');
            var myH5 = document.createElement('h5');
            var myH6 = document.createElement('h6');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myImage = document.createElement('img');

            myH5.textContent = data[i].name;
            myH6.textContent = data[i].motto;
            myPara1.textContent = 'Year Founded: ' + data[i].yearFounded;
            myPara2.textContent = 'Current Population: ' + data[i].currentPopulation;
            myPara3.textContent = 'Average Rainfall: ' + data[i].averageRainfall;

            myArticle.appendChild(myH5);
            myArticle.appendChild(myH6);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myImage);

            if (data[i].name == 'Preston') {
                myImage.src = 'images/hpreston.jpg';
            myImage.setAttribute('class', 'homephoto');
            myImage.setAttribute('alt', 'Preston Photo');
            }
            if (data[i].name == 'Soda Springs') {
                myImage.src = 'images/hsoda.jpg';
            myImage.setAttribute('class', 'homephoto');
            myImage.setAttribute('alt', 'Soda Springs Photo');
            }
            if (data[i].name == 'Fish Haven') {
                myImage.src = 'images/hfish.jpg';
            myImage.setAttribute('class', 'homephoto');
            myImage.setAttribute('alt', 'Fish Haven Photo');
            }

            article.appendChild(myArticle);
        }
        
    }
}
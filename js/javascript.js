/*
 * Programa: Codigo exemplo de JavaScript
 * Autor: Jesimar da Silva Arantes
 * Data: 07/01/2017
 */

//Funcao que retorna a minha geolocalizacao.
function geoFindMe() {
    var output = document.getElementById("googleMaps");

    if (!navigator.geolocation) {
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    }

    function success(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        output.innerHTML = '<p>Latitude: ' + lat.toFixed(10) + '° <br>Longitude: ' + lon.toFixed(10) + '°</p>';
        var img = new Image();
        img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," +
                lon + "&zoom=14&size=400x400&sensor=false";
        output.appendChild(img);
    }

    function error() {
        output.innerHTML = "Unable to retrieve your location";
    }
    output.innerHTML = "<p>Locating…</p>";

    navigator.geolocation.getCurrentPosition(success, error);
}

function swapFormiga() {
    var myLatLng = {lat: -20.463889, lng: -45.425833};
    var map = new google.maps.Map(document.getElementById('googleMaps'), {
        center: myLatLng,
        scrollwheel: true,
        zoom: 13
    });
    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        title: 'Formiga-MG',
        map: map,
        position: myLatLng
    });
}

function swapLavras() {
    var myLatLng = {lat: -21.25, lng: -45.00};
    var map = new google.maps.Map(document.getElementById('googleMaps'), {
        center: myLatLng,
        scrollwheel: true,
        zoom: 13
    });
    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        title: 'Lavras-MG',
        map: map,
        position: myLatLng
    });
}

function swapSaoCarlos() {
    var myLatLng = {lat: -22.017778, lng: -47.890833};
    var map = new google.maps.Map(document.getElementById('googleMaps'), {
        center: myLatLng,
        scrollwheel: true,
        zoom: 13
    });
    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        title: 'São Carlos-SP',
        map: map,
        position: myLatLng
    });
}

//Funcao que converte texto para maiusculo
function convertToUpperCase(id) {
    var text = document.getElementById(id).value;
    return document.getElementById(id).value = text.toUpperCase();
}

//Funcao que converte texto para minusculo
function convertToLowerCase(id) {
    var text = document.getElementById(id).value;
    return document.getElementById(id).value = text.toLowerCase();
}

//Funcao que converte texto para maiusculo e minusculo
function convertToCapitalizeCase(id) {
    var input = document.getElementById(id);
    var capitalizedWords = input.value.split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
    return input.value = capitalizedWords;
}


var click = 1;
var index = 1;
function swapImage() {
    if (click % 2 == 1) {
        document.getElementById("imageReadMind").src = "../img/readmind/solution" + index + ".jpg";
        document.getElementById("btAdivinhar").innerHTML = "Próximo";
        index++;
        index = index % 12;
        if (index == 0) {
            index = 1;
        }
    } else {
        document.getElementById("imageReadMind").src = "../img/readmind/simbolos" + index + ".jpg";
        document.getElementById("btAdivinhar").innerHTML = "Adivinhar";
    }
    click++;
}

//Funcao que retorna a data e hora atual.
function myDate() {
    var date = Date();
    return document.getElementById('date').innerHTML = date;
}

//Funcao que calcula a soma de dois numeros.
function sum(x, y) {
    var s = x + y;
    return document.getElementById("idsoma").innerHTML = s;
}

//Funcao que calcula se um numero eh par.
function par(x) {
    var isPar;
    if (x % 2 == 0) {
        isPar = 1;
    } else {
        isPar = -1;
    }
    return document.getElementById("ispar").innerHTML = isPar;
}

function reg_student() {
    var student = {
        name: "jesimar",
        year: "1988",
        old: "28",
        login: function () {
            return this.name + "-" + this.year + "-" + this.old;
        }
    };
    return document.getElementById("regstudent").innerHTML =
            student.name + "<br>" + student.year + "<br>" + student["old"] +
            "<br>" + student.login();
}

function toCelsius(f) {
    return (5 / 9) * (f - 32);
}

function fatorial() {
    var n = document.getElementById("nfat").value;
    var fat = 1;
    while (n > 1) {
        fat = fat * n;
        n--;
    }
    return document.getElementById("resultfat").value = fat;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('hh:mm:ss').innerHTML =
            h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    ;  // add zero in front of numbers < 10
    return i;
}

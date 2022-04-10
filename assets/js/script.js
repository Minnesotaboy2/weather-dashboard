var APIKey = 'f70f9a3b061e9d0c6c64a09bf5d796d8';
var city
var searchBtn = document.getElementById('search-btn');
var city = 'Minneapolis' //
var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;
var temp
var wind
var humidity
var uvIndex

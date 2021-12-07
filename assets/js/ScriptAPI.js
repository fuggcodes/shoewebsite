// Variables to select the Id for the correct shoe number
var shoeImage3 = document.querySelector("#shoeImage3");
var shoeImage4 = document.querySelector("#shoeImage4");
var shoeImage5 = document.querySelector("#shoeImage5");
var shoeImage6 = document.querySelector("#shoeImage6");
var shoeImage7 = document.querySelector("#shoeImage7");
var shoeImage8 = document.querySelector("#shoeImage8");
var shoeImage9 = document.querySelector("#shoeImage9");
var shoeImage10 = document.querySelector("#shoeImage10");

var hoverShoeImage3 = document.querySelector("#hoverShoeImage3");
var hoverShoeImage4 = document.querySelector("#hoverShoeImage4");
var hoverShoeImage5 = document.querySelector("#hoverShoeImage5");
var hoverShoeImage6 = document.querySelector("#hoverShoeImage6");
var hoverShoeImage7 = document.querySelector("#hoverShoeImage7");
var hoverShoeImage8 = document.querySelector("#hoverShoeImage8");
var hoverShoeImage9 = document.querySelector("#hoverShoeImage9");
var hoverShoeImage10 = document.querySelector("#hoverShoeImage10");

// Function to retrieve API data
var getShoeData = function () {
  fetch("https://run.mocky.io/v3/5055ace0-da03-411c-8690-dfa88734e25e")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.results[0].retailPrice);
      console.log(data);
      shoeInfoAppend(data);
    });
};

// Function to populate the parsed API data to the item-page
function shoeInfoAppend(data) {
  document.getElementById("shoe1").innerHTML = data.results[0].name;
  document.getElementById("shoe2").innerHTML = data.results[1].name;
  document.getElementById("shoe3").innerHTML = data.results[2].name;
  document.getElementById("shoe4").innerHTML = data.results[3].name;
  document.getElementById("shoe5").innerHTML = data.results[4].name;
  document.getElementById("shoe6").innerHTML = data.results[5].name;
  document.getElementById("shoe7").innerHTML = data.results[6].name;
  document.getElementById("shoe8").innerHTML = data.results[7].name;
  document.getElementById("shoe9").innerHTML = data.results[8].name;
  document.getElementById("shoe10").innerHTML = data.results[9].name;

  document.getElementById("value1").innerHTML = data.results[0].retailPrice;
  document.getElementById("value2").innerHTML = data.results[1].retailPrice;
  document.getElementById("value3").innerHTML = data.results[2].retailPrice;
  document.getElementById("value4").innerHTML = data.results[3].retailPrice;
  document.getElementById("value5").innerHTML = data.results[4].retailPrice;
  document.getElementById("value6").innerHTML = data.results[5].retailPrice;
  document.getElementById("value7").innerHTML = data.results[6].retailPrice;
  document.getElementById("value8").innerHTML = data.results[7].retailPrice;
  document.getElementById("value9").innerHTML = data.results[8].retailPrice;
  document.getElementById("value10").innerHTML = data.results[9].retailPrice;

  shoeImage3.src = data.results[2].image.original;
  shoeImage4.src = data.results[3].image.original;
  shoeImage5.src = data.results[4].image.original;
  shoeImage6.src = data.results[5].image.original;
  shoeImage7.src = data.results[6].image.original;
  shoeImage8.src = data.results[7].image.original;
  shoeImage9.src = data.results[8].image.original;
  shoeImage10.src = data.results[9].image.original;

  hoverShoeImage3.src = data.results[2].image.small;
  hoverShoeImage4.src = data.results[3].image.small;
  hoverShoeImage5.src = data.results[4].image.small;
  hoverShoeImage6.src = data.results[5].image.small;
  hoverShoeImage7.src = data.results[6].image.small;
  hoverShoeImage8.src = data.results[7].image.small;
  hoverShoeImage9.src = data.results[8].image.small;
  hoverShoeImage10.src = data.results[9].image.small;
}

// call function to get the API data
getShoeData();

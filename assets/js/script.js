let nameContainer = document.getElementById("name");
//var imageContainer = document.querySelector("#");
//var priceContainer = document.querySelector("#");
//var infoContainer = document.querySelector("#");

var shoeCollection = [];

fetch("https://run.mocky.io/v3/5055ace0-da03-411c-8690-dfa88734e25e")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var results = data.results;
    //console.log("api results", results);

    for (var i = 0; i < results.length; i++) {
      shoeCollection.push({
        name: results[i].name,
        image: results[i].image.thumbnail,
        price: results[i].retailPrice,
        info: results[i].story,
      });
    }
  });

console.log(shoeCollection);

shoeCollection.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  nameContainer.appendChild(li);
});

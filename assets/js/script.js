var shoeCollection = [];

fetch("https://run.mocky.io/v3/5055ace0-da03-411c-8690-dfa88734e25e")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var results = data.results;
    // console.log('api results', results);

    for (var i = 0; i < results.length; i++) {
      shoeCollection.push({
        name: results[i].name,
        image: results[i].image.thumbnail,
      });
    }

    console.log(shoeCollection);
  });

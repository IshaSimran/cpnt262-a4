'use strict';

// const endpoint = '//localhost:3000/api/v0/gallery';     
const endpoint = 'https://cpnt262-a4-isha.herokuapp.com/api/v0/gallery';

fetch(endpoint)

  .then(function (response) {
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })

  .then(function (gallery) {
    let figure = document.querySelector('figure');
    gallery.forEach(insert_img);
    function insert_img(item, index) {
      figure.innerHTML = figure.innerHTML + `<img src="${gallery[index].pathURL}" alt="${gallery[index].description}"></img><figcaption>${gallery[index].description}</figcaption>`;
    };
  })

  .catch(function (error) {
    console.log(error);
  });
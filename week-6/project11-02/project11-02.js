"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Joseph Sarno
      Date: 07/07/24

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
  // Declare codeValue and countryValue variables
  let codeValue = postalCode.value;
  let countryValue = country.value;

  // Set the value of the place and region elements to an empty text string
  place.value = "";
  region.value = "";

  // Use Fetch to access the API
  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
    .then(response => response.json())
    .then(json => {
      // Set the value of the place and region elements
      place.value = json.places[0]['place name'];
      region.value = json.places[0]['state abbreviation'];
    })
    .catch(error => {
      console.error('Error fetching postal code data:', error);
    });
}

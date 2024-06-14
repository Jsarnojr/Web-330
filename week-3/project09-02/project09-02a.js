"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Joseph Sarno
      Date: 06/14/24

      Filename: project09-02a.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

// Define the showData function
function showData() {
    // Store field values in session storage
    sessionStorage.setItem("riderName", riderName.value);
    sessionStorage.setItem("ageGroup", ageGroup.value);
    sessionStorage.setItem("bikeOption", bikeOption.value);
    sessionStorage.setItem("routeOption", routeOption.value);
    sessionStorage.setItem("accOption", accOption.value);
    sessionStorage.setItem("region", region.value);
    sessionStorage.setItem("miles", miles.value);
    sessionStorage.setItem("comments", comments.value);

    // Log field values to the console
    console.log("Rider Name: " + riderName.value);
    console.log("Age Group: " + ageGroup.value);
    console.log("Bike Option: " + bikeOption.value);
    console.log("Route Option: " + routeOption.value);
    console.log("Accommodation Option: " + accOption.value);
    console.log("Region: " + region.value);
    console.log("Miles per Day: " + miles.value);
    console.log("Comments: " + comments.value);

    // Change the value of the location.href object to the project09-02b.html file
    location.href = "project09-02b.html";
}

// Add event listener to the Submit button
let submitButton = document.getElementById("submitButton");
submitButton.onclick = showData;

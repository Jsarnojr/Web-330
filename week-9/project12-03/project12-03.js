"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Joseph Sarno
      Date: 07/23/24

      Filename: project12-03.js
*/

// Apply the click() method to the article > h2 selector
$("article > h2").click(function() {
   // Step 4a: Declare the heading variable referencing the target of the click event
   let heading = $(this);

   // Step 4b: Declare the list variable referencing the next sibling element of the heading variable
   let list = heading.next();

   // Step 4c: Declare the headingImage variable referencing the children of the heading variable whose tag name is "img"
   let headingImage = heading.children("img");

   // Step 5: Alternate between hiding and showing the content of the lists
   list.slideToggle(500);

   // Step 6: Change the symbol displayed in the headings
   if (headingImage.attr("src") === "plus.png") {
      headingImage.attr("src", "minus.png");
   } else {
      headingImage.attr("src", "plus.png");
   }
});

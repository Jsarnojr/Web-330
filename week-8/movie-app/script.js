/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author:Joseph Sarno
  Date:7/19/24
  Filename:movie-app
*/

"use strict";

"use strict";

const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
  },
  {
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    releaseYear: 1999,
    synopsis: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
  },
  // Add more movie objects here
];

function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find(movie => movie.title.toLowerCase() === title.toLowerCase());
      if (movie) {
        resolve(movie);
      } else {
        reject("Movie not found");
      }
    }, 1000); // Simulating network delay
  });
}

async function displayMovie(event) {
  event.preventDefault();
  const titleInput = document.getElementById("title-input").value;
  const movieTitle = document.getElementById("movie-title");
  const movieDirector = document.getElementById("movie-director");
  const movieYear = document.getElementById("movie-year");
  const movieSynopsis = document.getElementById("movie-synopsis");
  const errorMessage = document.getElementById("error-message");

  try {
    const movie = await fetchMovie(titleInput);
    movieTitle.textContent = `Title: ${movie.title}`;
    movieDirector.textContent = `Director: ${movie.director}`;
    movieYear.textContent = `Release Year: ${movie.releaseYear}`;
    movieSynopsis.textContent = `Synopsis: ${movie.synopsis}`;
    document.getElementById("movie-info").style.display = "block";
    errorMessage.style.display = "none";
  } catch (error) {
    errorMessage.textContent = error;
    errorMessage.style.display = "block";
    document.getElementById("movie-info").style.display = "none";
  }
}

document.getElementById("movie-form").addEventListener("submit", displayMovie);

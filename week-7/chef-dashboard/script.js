/* Pragmatic JavaScript
   Chapter 3
   Programming Assignment

   Author: Joseph Sarno
   Date: 07/11/2024
   Filename: chef-dashboard
*/

document.addEventListener("DOMContentLoaded", () => {
  const chefs = [
    {
      id: "chef1",
      name: "Chef Gordon Ramsay",
      specialty: "British cuisine",
      weakness: "Short temper",
      location: "London",
    },
    {
      id: "chef2",
      name: "Chef Jamie Oliver",
      specialty: "Italian cuisine",
      weakness: "Health craze",
      location: "Essex",
    },
    {
      id: "chef3",
      name: "Chef Thomas Keller",
      specialty: "French cuisine",
      weakness: "Perfectionism",
      location: "California",
    },
  ];

  const getChefData = (chef) => {
    return new Promise((resolve, reject) => {
      const delay = chef.id === "chef1" ? 2000 : chef.id === "chef2" ? 3000 : 4000;
      setTimeout(() => {
        if (Math.random() > 0.1) { // 90% chance of success
          resolve(chef);
        } else {
          reject(`Failed to retrieve data for ${chef.name}`);
        }
      }, delay);
    });
  };

  const displayChefInfo = (chef) => {
    const chefDiv = document.getElementById(chef.id);
    if (chefDiv) {
      chefDiv.innerHTML = `
        <h2>${chef.name}</h2>
        <p><strong>Specialty:</strong> ${chef.specialty}</p>
        <p><strong>Weakness:</strong> ${chef.weakness}</p>
        <p><strong>Location:</strong> ${chef.location}</p>
      `;
    }
  };

  const displayError = (chefId, errorMessage) => {
    const chefDiv = document.getElementById(chefId);
    if (chefDiv) {
      chefDiv.innerHTML = `<p style="color: red;">${errorMessage}</p>`;
    }
  };

  const chefPromises = chefs.map(chef => getChefData(chef));

  Promise.allSettled(chefPromises)
    .then(results => {
      results.forEach((result, index) => {
        if (result.status === "fulfilled") {
          displayChefInfo(result.value);
        } else {
          displayError(chefs[index].id, result.reason);
        }
      });
    });
});

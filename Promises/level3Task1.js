// Read the cats api and find the average weight of cat in metric unit.
console.log(
  `*********************Read the cats api and find the average weight of cat in metric unit.*********************`
);
// Define the URL for The Cat API
const url = "https://api.thecatapi.com/v1/breeds";

// Function to fetch data from the API and calculate the average weight
function fetchAverageCatWeight() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((breeds) => {
      let totalWeight = 0;
      let count = 0;

      breeds.forEach((breed) => {
        if (breed.weight && breed.weight.metric) {
          const [minWeight, maxWeight] = breed.weight.metric
            .split(" - ")
            .map(Number);
          const averageWeight = (minWeight + maxWeight) / 2;
          totalWeight += averageWeight;
          count++;
        }
      });

      const averageWeightOverall = totalWeight / count;
      console.log(
        `The average weight of a cat in metric units is: ${averageWeightOverall.toFixed(
          2
        )} kg`
      );
    })
    .catch((error) => {
      console.error("Error fetching cat breeds:", error);
    });
}

// Call the function to fetch and calculate the average weight
fetchAverageCatWeight();

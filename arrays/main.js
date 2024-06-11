let countries = require("./countries.js");
let web_techs = require("./web_techs.js");

console.log("*****************first array*****************");
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`length of the array is: ${arr1.length}`);
console.log(`first item of the array: ${arr1[0]}`);
console.log(`middle item of the array: ${arr1[Math.floor(arr1.length / 2)]}`);
console.log(`last item of the array: ${arr1[arr1.length - 1]}`);

// mixed array
console.log("*****************mixed array data type*****************");
let mixedDataTypes = [
  42,
  "hello",
  true,
  null,
  { name: "John" },
  [1, 2, 3],
  undefined,
  3.14,
  "world",
  false,
];
console.log(`mixedDataTypes`, mixedDataTypes);
console.log(
  `The length of the mixedDataTypes array is: ${mixedDataTypes.length}`
);

// it company array
console.log("*****************it company array*****************");
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(`Number of companies in the array: ${itCompanies.length}`);
console.log(`First company: ${itCompanies[0]}`);
console.log(
  `Middle company: ${itCompanies[Math.floor(itCompanies.length / 2)]}`
);
console.log(`Last company: ${itCompanies[itCompanies.length - 1]}`);
console.log("Each company in itCompanies array");
itCompanies.forEach((element, idx) => {
  console.log(`${idx}: ${element}`);
});

console.log("Each company in itCompanies array to uppercase");
itCompanies.forEach((element, idx) => {
  console.log(`${idx}: ${element.toUpperCase()}`);
});

console.log("Printing itCompanies array like a sentence");
console.log(`${itCompanies.join(", ")} are big it companies`);

console.log("checking if a company exist in the array");

console.log(checkCompany("Microsoft"));
function checkCompany(company) {
  if (itCompanies.includes(company)) {
    return `${company} exists in the array itCompanies`;
  } else {
    return `${company} company not found`;
  }
}
console.log(
  `Filtering out companies which have more than one 'o' without the filter method`
);

let filteredOCompanies = [];
let filteredOCompanies1 = [];
itCompanies.forEach((element) => {
  let oCount = 0;
  for (let i = 0; i < element.length; i++) {
    if (element[i].toLowerCase() === "o") {
      oCount++;
    }
  }
  if (oCount <= 1) {
    filteredOCompanies.push(element);
  } else {
    filteredOCompanies1.push(element);
  }
});
console.log(
  "filtered companies with only one or less than one o",
  filteredOCompanies
);
console.log("filtered companies with more than one o", filteredOCompanies1);
console.log(`sorted array: `, itCompanies.sort());
console.log(`reversed array: `, itCompanies.reverse());
itCompanies.reverse();
console.log(
  `Slicing out the first 3 companies from the array`,
  itCompanies.slice(0, 3)
);
console.log(
  `Slicing out the last 3 companies from the array`,
  itCompanies.slice(-3)
);

let newItComapnyArray = [];
for (let i = 1; i < itCompanies.length; i++) {
  newItComapnyArray.push(itCompanies[i]);
}
console.log(
  `After removing the first company from the array`,
  newItComapnyArray
);

let newItComapnyArray2 = [];
let middleIndex = Math.floor(itCompanies.length / 2);
for (let i = 0; i < itCompanies.length; i++) {
  if (i !== middleIndex) {
    newItComapnyArray2.push(itCompanies[i]);
  }
}
console.log(
  `After removing the middle company from the array`,
  newItComapnyArray2
);

let newItComapnyArray3 = [];
for (let i = 0; i < itCompanies.length - 1; i++) {
  newItComapnyArray3.push(itCompanies[i]);
}
console.log(
  `After removing the last company from the array`,
  newItComapnyArray3
);

itCompanies.length = 0;
console.log(`After removing all companies from the array`, itCompanies);

console.log("web techs array: ", web_techs);
console.log("countries array: ", countries);

checkCountryExists("Ethiopia");
function checkCountryExists(country) {
  if (countries.includes(country)) {
    console.log(country.toUpperCase());
  } else {
    let newCountry =
      country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
    countries.push(newCountry);
  }
}
console.log(countries);

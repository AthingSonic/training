const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
//   Find the person who has many skills in the users object.
console.log(`Find the person who has many skills in the users object.`);
let maxSkills = 0;
let skillfulPerson = '';

for (const person in users) {
    if (users.hasOwnProperty(person)) {
        const skillsCount = users[person].skills.length;
        if (skillsCount > maxSkills) {
            maxSkills = skillsCount;
            skillfulPerson = person;
        }
    }
}

console.log(skillfulPerson + " has the most skills with " + maxSkills + " skills.");


// Count logged in users, count users having greater than equal to 50 points from the following object.
console.log(`Count logged in users, count users having greater than equal to 50 points from the following object.`);

let loggedInCount = 0;
let highPointsCount = 0;

for (const person in users) {
    if (users.hasOwnProperty(person)) {
        if (users[person].isLoggedIn) {
            loggedInCount++;
        }
        if (users[person].points >= 50) {
            highPointsCount++;
        }
    }
}

console.log("Logged-in users: " + loggedInCount);
console.log("Users with 50 or more points: " + highPointsCount);


// Find people who are MERN stack developer from the users object
console.log(`Find people who are MERN stack developer from the users object`);
const mernStackDevelopers = [];

for (const person in users) {
    if (users.hasOwnProperty(person)) {
        const skills = users[person].skills;
        // Check if the person has skills in MongoDB, Express, React, and Node.js
        if (
            skills.includes('MongoDB') &&
            skills.includes('Express') &&
            skills.includes('React') &&
            skills.includes('Node')
        ) {
            mernStackDevelopers.push(person);
        }
    }
}

console.log("MERN stack developers: ", mernStackDevelopers);


// Set your name in the users object without modifying the original users object
console.log(`Set your name in the users object without modifying the original users object`);
// Create a copy of the original users object
const updatedUsers = { ...users };

// Add my information to the copied object
updatedUsers.Wungthing = {
    email: 'wungthing@wungthing.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: true,
    points: 100
};

// Now, the updatedUsers object contains your name without modifying the original users object
console.log(updatedUsers);

// Get all keys or properties of users object
console.log(`Get all keys or properties of users object`);
const keys = Object.keys(users);
console.log(keys);


// Get all the values of users object
console.log(`Get all the values of users object`);
const values = Object.values(users);
console.log(values);


// Use the countries object to print a country name, capital, populations and languages.
console.log(`Use the countries object to print a country name, capital, populations and languages.
`);
const countries = {
    Afghanistan: {
      capital: 'Kabul',
      population: 27657145,
      languages: ['Pashto', 'Uzbek', 'Turkmen']
    },
    Albania: {
      capital: 'Tirana',
      population: 2886026,
      languages: ['Albanian']
    },
    Algeria: {
      capital: 'Algiers',
      population: 40400000,
      languages: ['Arabic', 'Berber']
    },
    Andorra: {
      capital: 'Andorra la Vella',
      population: 78014,
      languages: ['Catalan']
    },
    Angola: {
      capital: 'Luanda',
      population: 25868000,
      languages: ['Portuguese']
    }
  };
  
  for (const country in countries) {
      if (countries.hasOwnProperty(country)) {
          console.log("Country: " + country);
          console.log("Capital: " + countries[country].capital);
          console.log("Population: " + countries[country].population);
          console.log("Languages: " + countries[country].languages.join(", "));
          console.log("\n");
      }
  }
  


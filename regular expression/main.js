// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
console.log('task 1');
const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

// Regular expressions to extract income values
const salaryMatch = text.match(/(\d+)\s*euro\s*from\s*salary\s*per\s*month/i);
const bonusMatch = text.match(/(\d+)\s*euro\s*annual\s*bonus/i);
const coursesMatch = text.match(/(\d+)\s*euro\s*online\s*courses\s*per\s*month/i);

// Extract values and convert to integers
const salary = salaryMatch ? parseInt(salaryMatch[1], 10) : 0;
const bonus = bonusMatch ? parseInt(bonusMatch[1], 10) : 0;
const courses = coursesMatch ? parseInt(coursesMatch[1], 10) : 0;

// Calculate annual income
const annualSalary = salary * 12;
const annualCourses = courses * 12;
const totalAnnualIncome = annualSalary + bonus + annualCourses;

console.log(totalAnnualIncome);


// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
console.log('task 2');
const text2 = '-12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.';

const numberPattern = /-?\d+/g;
const matches = text2.match(numberPattern);

const positions = matches.map(Number);

const minPosition = Math.min(...positions);
const maxPosition = Math.max(...positions);

const distance = maxPosition - minPosition;

console.log(distance);

// Write a pattern which identify if a string is a valid JavaScript variable
console.log(`Write a pattern which identify if a string is a valid JavaScript variable
`);
console.log(`task 3`);
function is_valid_variable(variable) {
    return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(variable);
  }
  
  console.log(is_valid_variable('first_name')); // true
  console.log(is_valid_variable('first-name')); // false
  console.log(is_valid_variable('1first_name')); // false
  console.log(is_valid_variable('firstname')); // true
  

/*
function tenMostFrequentWords(paragraph) {
  // Step 1: Tokenize the paragraph into words
  const words = paragraph.toLowerCase().match(/\b\w+\b/g);

  // Step 2: Count the frequency of each word
  const wordFrequency = {};
  words.forEach(word => {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
  });

  // Step 3: Sort the words by their frequencies in descending order
  const sortedWords = Object.keys(wordFrequency).sort((a, b) => wordFrequency[b] - wordFrequency[a]);

  // Step 4: Return the top ten most frequent words
  return sortedWords.slice(0, 10);
}

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

console.log(tenMostFrequentWords(paragraph));

*/
console.log('task 4');   
function tenMostFrequentWords(paragraph) {
    // Step 1: Tokenize the paragraph into words
    const words = paragraph.toLowerCase().match(/\b\w+\b/g);
  
    // Step 2: Count the frequency of each word
    const wordFrequency = {};
    words.forEach(word => {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });
  
    // Step 3: Sort the words by their frequencies in descending order
    const sortedWords = Object.keys(wordFrequency).sort((a, b) => wordFrequency[b] - wordFrequency[a]);
  
    // Step 4: Construct the array of objects in the desired format
    const result = sortedWords.slice(0, 10).map(word => ({ word, count: wordFrequency[word] }));
  
    return result;
  }
  
  const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
  
  console.log(tenMostFrequentWords(paragraph));
  
  
/*Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.*/   
console.log(`task 5`);
function cleanText(text) {
    // Remove special characters and convert to lowercase
    const cleanedText = text.replace(/[^\w\s]/gi, '').toLowerCase();
    return cleanedText;
}

function countWords(text) {
    // Split text into words
    const words = text.split(/\s+/);
    
    // Create a map to store word counts
    const wordCountMap = new Map();
    
    // Count the occurrences of each word
    words.forEach(word => {
        if (wordCountMap.has(word)) {
            wordCountMap.set(word, wordCountMap.get(word) + 1);
        } else {
            wordCountMap.set(word, 1);
        }
    });
    
    // Sort the map by value (word count) in descending order
    const sortedWordCount = new Map([...wordCountMap.entries()].sort((a, b) => b[1] - a[1]));
    
    // Get the three most frequent words
    const frequentWords = Array.from(sortedWordCount.keys()).slice(0, 3);
    
    return frequentWords;
}

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
const cleanedSentence = cleanText(sentence);
const frequentWords = countWords(cleanedSentence);
console.log(frequentWords);


/*
Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

 console.log(mostFrequentWords(cleanedText))
 [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]

*/ 
console.log('task 6');
console.log(`Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.`);
function cleanText2(text) {
    // Remove special characters and convert to lowercase
    return text.replace(/[^\w\s]/gi, '').toLowerCase();
}

function mostFrequentWords(text) {
    // Split text into words
    const words = text.split(/\s+/);
    
    // Create a map to store word counts
    const wordCountMap = new Map();
    
    // Count the occurrences of each word
    words.forEach(word => {
        if (wordCountMap.has(word)) {
            wordCountMap.set(word, wordCountMap.get(word) + 1);
        } else {
            wordCountMap.set(word, 1);
        }
    });
    
    // Sort the map by value (word count) in descending order
    const sortedWordCount = new Map([...wordCountMap.entries()].sort((a, b) => b[1] - a[1]));
    
    // Get the three most frequent words with counts
    const frequentWords = Array.from(sortedWordCount.keys()).slice(0, 3).map(word => {
        return { word: word, count: wordCountMap.get(word) };
    });
    
    return frequentWords;
}

const sentence2 = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
const cleanedSentence2 = cleanText(sentence2);
console.log(mostFrequentWords(cleanedSentence2));

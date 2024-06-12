/*
Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
*/
console.log(
  `Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.`
);
class Statistics {
  constructor(data) {
    this.data = data;
  }

  count() {
    return this.data.length;
  }

  sum() {
    return this.data.reduce((acc, val) => acc + val, 0);
  }

  min() {
    return Math.min(...this.data);
  }

  max() {
    return Math.max(...this.data);
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return this.sum() / this.count();
  }

  median() {
    const sorted = [...this.data].sort((a, b) => a - b);
    const middle = Math.floor(this.count() / 2);
    if (this.count() % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    } else {
      return sorted[middle];
    }
  }

  mode() {
    const frequency = {};
    let maxFreq = 0;
    let mode = null;

    for (const num of this.data) {
      frequency[num] = (frequency[num] || 0) + 1;
      if (frequency[num] > maxFreq) {
        maxFreq = frequency[num];
        mode = num;
      }
    }

    return { mode, count: maxFreq };
  }

  var() {
    const mean = this.mean();
    const squaredDiffs = this.data.map((num) => Math.pow(num - mean, 2));
    return squaredDiffs.reduce((acc, val) => acc + val, 0) / this.count();
  }

  std() {
    return Math.sqrt(this.var());
  }

  freqDist() {
    const frequency = {};
    for (const num of this.data) {
      frequency[num] = (frequency[num] || 0) + 1;
    }

    const sortedFreq = Object.entries(frequency).map(([num, count]) => [
      (count * 100) / this.count(),
      Number(num),
    ]);
    sortedFreq.sort((a, b) => b[0] - a[0]);

    return sortedFreq;
  }

  describe() {
    return `
        Count: ${this.count()}
        Sum: ${this.sum()}
        Min: ${this.min()}
        Max: ${this.max()}
        Range: ${this.range()}
        Mean: ${this.mean()}
        Median: ${this.median()}
        Mode: (${this.mode().mode}, ${this.mode().count})
        Variance: ${this.var()}
        Standard Deviation: ${this.std()}
        Frequency Distribution: ${JSON.stringify(this.freqDist())}
      `;
  }
}

// Example usage
const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];
const statistics = new Statistics(ages);

console.log("Count:", statistics.count()); // 25
console.log("Sum:", statistics.sum()); // 744
console.log("Min:", statistics.min()); // 24
console.log("Max:", statistics.max()); // 38
console.log("Range:", statistics.range()); // 14
console.log("Mean:", statistics.mean()); // 29.76
console.log("Median:", statistics.median()); // 27
console.log("Mode:", statistics.mode()); // { mode: 26, count: 5 }
console.log("Variance:", statistics.var()); // 17.52
console.log("Standard Deviation:", statistics.std()); // 4.19
console.log("Frequency Distribution:", statistics.freqDist());
// [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

console.log(statistics.describe());

/*
Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
*/
console.log(
  `Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.`
);

class PersonAccount {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = [];
    this.expenses = [];
  }

  addIncome(amount, description) {
    this.incomes.push({ amount, description });
  }

  addExpense(amount, description) {
    this.expenses.push({ amount, description });
  }

  totalIncome() {
    return this.incomes.reduce((acc, income) => acc + income.amount, 0);
  }

  totalExpense() {
    return this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
  }

  accountInfo() {
    return `
        Name: ${this.firstname} ${this.lastname}
        Total Income: ${this.totalIncome()}
        Total Expense: ${this.totalExpense()}
        Account Balance: ${this.accountBalance()}
      `;
  }

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
}

// Example usage
const person = new PersonAccount("John", "Doe");

person.addIncome(5000, "Salary");
person.addIncome(200, "Freelance");
person.addExpense(1500, "Rent");
person.addExpense(200, "Groceries");
person.addExpense(100, "Utilities");

console.log("Total Income:", person.totalIncome()); // 5200
console.log("Total Expense:", person.totalExpense()); // 1800
console.log("Account Balance:", person.accountBalance()); // 3400
console.log("Account Info:", person.accountInfo());
/*
    Name: John Doe
    Total Income: 5200
    Total Expense: 1800
    Account Balance: 3400
  */

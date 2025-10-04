// Questions 1 String

const fullName = "Mbunabo John";
const email = "mbunabojohn@gmail.com";
const occupation = "Full stack dev";

// print
console.log(
  `My name is ${fullName}, I work as a ${occupation}, and you can reach me at ${email}.`
);

console.log(
  "My name is " +
    fullName +
    ", I work as a " +
    occupation +
    ", and you can reach me at " +
    email +
    "."
);

// Question 2
const lapTop = 450000;

// Calculation
console.log(lapTop * 3);

// Question 3 Boolean
const isLoggedIn = true;
if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in to continue.");
}

// Question 4 Arrays
const tasks = [
  "Check emails",
  "Team meeting",
  "Pay electricity bill",
  "Review report",
  "Pick up groceries",
];

console.log("First task:", tasks[0]);
console.log("Last task:", tasks[tasks.length - 1]);

tasks.push("Call the bank");
console.log("Added tasks:", tasks);

// testing
// tasks.push("Don't call me back");
// console.log("New tasks:", tasks);

// Question 5 Objects(structured data)
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  isInsured: true,
};

// Print
console.log(
  `Your ${car.brand} ${car.model} (${car.year}) is insured: ${car.isInsured}`
);

// Question 6 Mixed practice
// I defined the hourly rate and hours worked
const hourlyRate = 20000; // ₦20,000 per hour
const hoursWorked = 7;

// total earnings
const totalEarnings = hourlyRate * hoursWorked;

// Print
console.log(`This week's earnings: ₦${totalEarnings}.`);

// Question 7 Real life Application
const subscription = {
  plan: "Premium",
  price: 19.99,
  isActive: true,
};

// Print
console.log(
  `You are subscribed to the ${subscription.plan} plan. Active: ${subscription.isActive}`
);

// let sum = true + 2;
// console.log(sum);

// Modulus
// 20: dividend
// 3: divisor
20 % 3;

console.log(20 % 3);

console.log(20 / 3);

// Concatination of strings
const myConcatination = "I am" + " " + "full";
console.log(myConcatination);

// Objects
const books = {
  title: "Javascript fundamentals",
  yearOfPublication: "1998",
  yearOfRealease: "2911",   
};

console.log(books.yearOfPublication);

books.yearOfPublication = 1993;
books.isNew = 2001;
console.log(books.isNew);

books.type = "fictional";
console.log(books.type);

console.log(books);

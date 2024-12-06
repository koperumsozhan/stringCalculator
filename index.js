const StringCalculator = require('./controller/stringCalculator.contoller');

const stringCalculator = new StringCalculator();

console.log(stringCalculator.add(""));
console.log(stringCalculator.add("1"));
console.log(stringCalculator.add("1,2"));
console.log(stringCalculator.add("1,2,3"));
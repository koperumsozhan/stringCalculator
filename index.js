const StringCalculator = require("./controller/stringCalculator.contoller"); //importing

const stringCalculator = new StringCalculator(); //creating objcet

console.log(stringCalculator.add("")); //calling using empty string
console.log(stringCalculator.add("1")); //calling using single number
console.log(stringCalculator.add("1,2")); //calling with two digits
console.log(stringCalculator.add("1,2,3")); //calling with two or many
console.log(stringCalculator.add("1\n2,3")); //calling new line
console.log(stringCalculator.add("//;\n1;2")); //calling with semi-colon delimeter
console.log(stringCalculator.add("//@\n4@5@6")); //calling with At(@) delimeter
console.log(stringCalculator.add("//@\n-4@5@-6")); //calling negative values
console.log(stringCalculator.add("-1")); //calling negative values
console.log(stringCalculator.add("1,2000")); //calling more than 1000
console.log(stringCalculator.add("1,2,1000")); //calling more than 1000
console.log(stringCalculator.add("1,2,1001")); //calling more than 1000
console.log(
  stringCalculator.add(
    "//@@@@@@@@@@@@@@@@@@@\n45@@@@@@@@@@@@@@@@@@@5@@@@@@@@@@@@@@@@@@@6"
  )
); //calling with anysize At(@) delimeter

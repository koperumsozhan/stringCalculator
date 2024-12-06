const StringCalculator = require("./../controller/stringCalculator.contoller");

test("validation: empty string; input: ;output: The string is empty!", () => {
  //empty string validation
  const stringCalculator = new StringCalculator(); //creating object

  expect(stringCalculator.add("")).toBe("The string is empty!"); //comparing results
});

test("validation: single number string; input: 1;output: 1", () => {
  //single number validation
  const stringCalculator = new StringCalculator(); //creating object

  expect(stringCalculator.add("1")).toBe(1); //comparing results
});

test("validation: two number string; input: 1,2;output: 3", () => {
  //two number validation
  const stringCalculator = new StringCalculator(); //creating object

  expect(stringCalculator.add("1,2")).toBe(3); //comparing results
});

test("validation: tow or more number string; input: 1,2,3;output: 6", () => {
  //tow or more number validation
  const stringCalculator = new StringCalculator(); //creating object

  expect(stringCalculator.add("1,2,3")).toBe(6); //comparing results
});

test("validation: new line string; input: 1\n2,3;output: 6", () => {
  //new line validation
  const stringCalculator = new StringCalculator(); //creating object

  expect(stringCalculator.add("1\n2,3")).toBe(6); //comparing results
});

test("validation: semi-colon delimiter string; input: //;\n1;2;output: 3", () => {
  //semi-colon delimiter string
  const stringCalculator = new StringCalculator(); //creating object

  expect(stringCalculator.add("//;\n1;2")).toBe(3); //comparing results
});

test("validation: At(@) delimiter string; input: //@\n4@5@6;output: 15", () => {
  //At(@) delimiter string
  const stringCalculator = new StringCalculator(); //creating object

  expect(stringCalculator.add("//@\n4@5@6")).toBe(15); //comparing results
});

test("validation: negative string; input: //@\n4@5@-6;output: negatives not allowed", () => {
  //negative string
  const stringCalculator = new StringCalculator(); //creating object

  expect(stringCalculator.add("//@\n4@5@-6")).toBe("negatives not allowed"); //comparing results
});

test("validation: negative string; input: -1;output: negatives not allowed", () => {
  //negative string
  const stringCalculator = new StringCalculator(); //creating object

  expect(stringCalculator.add("-1")).toBe("negatives not allowed"); //comparing results
});

test("validation: more than 1000 string; input: 1,2000;output: 1", () => {
  //more than 1000 string
  const stringCalculator = new StringCalculator(); //creating object

  expect(stringCalculator.add("1,2000")).toBe(1); //comparing results
});

test("validation: more than 1000 string; input: 1,2,1000;output: 1003", () => {
  //more than 1000 string
  const stringCalculator = new StringCalculator(); //creating object

  expect(stringCalculator.add("1,2,1000")).toBe(1003); //comparing results
});

test("validation: more than 1000 string; input: 1,2,1001;output: 3", () => {
  //more than 1000 string
  const stringCalculator = new StringCalculator(); //creating object

  expect(stringCalculator.add("1,2,1001")).toBe(3); //comparing results
});

test("validation: any sized delimiter string; input: //@@@@@@@@@@@@@@@@@@@\n45@@@@@@@@@@@@@@@@@@@5@@@@@@@@@@@@@@@@@@@6;output: 56", () => {
  //any sized delimiter string
  const stringCalculator = new StringCalculator(); //creating object

  expect(
    stringCalculator.add(
      "//@@@@@@@@@@@@@@@@@@@\n45@@@@@@@@@@@@@@@@@@@5@@@@@@@@@@@@@@@@@@@6"
    )
  ).toBe(56); //comparing results
});

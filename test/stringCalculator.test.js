const StringCalculator = require("./../controller/stringCalculator.contoller");

test("validation: empty string", () => {
  //empty string validation
  const stringCalculator = new StringCalculator(); //creating object

  expect(stringCalculator.add("")).toBe("The string is empty!"); //comparing results
});

test("validation: single number string", () => {
  //single number validation
  const stringCalculator = new StringCalculator(); //creating object

  expect(stringCalculator.add("1")).toBe(1); //comparing results
});

test("validation: two number string", () => {
  //two number validation
  const stringCalculator = new StringCalculator(); //creating object

  expect(stringCalculator.add("1,2")).toBe(3); //comparing results
});

test("validation: tow or more number string", () => {
  //tow or more number validation
  const stringCalculator = new StringCalculator(); //creating object

  expect(stringCalculator.add("1,2,3")).toBe(6); //comparing results
});

test("validation: new line string", () => {
  //new line validation
  const stringCalculator = new StringCalculator(); //creating object

  expect(stringCalculator.add("1\n2,3")).toBe(6); //comparing results
});

test("validation: semi-colon delimiter string", () => {
  //semi-colon delimiter string
  const stringCalculator = new StringCalculator();

  expect(stringCalculator.add("//;\n1;2")).toBe(3);
});

test("validation: At(@) delimiter string", () => {
  //At(@) delimiter string
  const stringCalculator = new StringCalculator();

  expect(stringCalculator.add("//@\n4@5@6")).toBe(15);
});

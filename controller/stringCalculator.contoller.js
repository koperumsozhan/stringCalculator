class StringCalculator {
  //class declaration
  add(str) {
    //function declaration
    if (!str) {
      //empty string checking
      return "The string is empty!";
    }

    str = str.replace(/\n/g, ","); //replacing the new line with comma

    const num = str.split(",").map(Number); //collecting numbres array
    return num.reduce((a, b) => a + b, 0); //adding numbers
  }
}

module.exports = StringCalculator; //exports

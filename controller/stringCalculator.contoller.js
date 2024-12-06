class StringCalculator {
  //class declaration
  add(str) {
    //function declaration
    if (!str) {
      //empty string checking
      return "The string is empty!";
    }

    let delimiter = /,|\n/; // Default delimiters: comma or newline
    let numberString = str;

    // Check for custom delimiter
    if (str.startsWith("//")) {
      const delimiterLineEnd = str.indexOf("\n");
      delimiter = new RegExp(str.substring(2, delimiterLineEnd));
      numberString = str.substring(delimiterLineEnd + 1);
    }

    const num = numberString.split(delimiter).map(Number); //collecting numbres array
    return num.reduce((a, b) => {
      if (b < 0) return "negatives not allowed";
      if (b > 1000) b = 0;
      return a + b;
    }, 0); //adding numbers
  }
}

module.exports = StringCalculator; //exports

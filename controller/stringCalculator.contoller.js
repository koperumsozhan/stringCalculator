class StringCalculator {
  //class declaration
  add(str) {
    //function declaration
    if (!str) {
      //empty string checking
      return "The string is empty!";
    }

    let delimiters = [",", "\n"]; //default delimiters: comma or newline
    let numberString = str;

    if (str.startsWith("//")) {
      //check for custom delimiter
      const delimiterLineEnd = str.indexOf("\n");
      const delimiterSection = str.substring(2, delimiterLineEnd);

      // handle multiple delimiters
      if (delimiterSection.startsWith("[")) {
        const matches = delimiterSection.match(/\[([^\]]+)\]/g);
        if (matches) {
          delimiters = matches.map((match) => match.slice(1, -1)); //extract delimiters without brackets
        }
      } else {
        delimiters = [delimiterSection]; //single custom delimiter
      }

      numberString = str.substring(delimiterLineEnd + 1);
    }

    //create a regex to split by all delimiters
    const delimiterRegex = new RegExp(
      delimiters.map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")
    );

    const num = numberString.split(delimiterRegex).map(Number); //collecting numbres array
    return num.reduce((a, b) => {
      if (b < 0) return "negatives not allowed";
      if (b > 1000) b = 0;
      return a + b;
    }, 0); //adding numbers
  }
}

module.exports = StringCalculator; //exports

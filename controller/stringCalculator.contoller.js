class StringCalculator {
    add(str){
        if(!str) {
            return "The string is empty!"
        }

        const num = str.split(",").map(Number);
        return num.reduce((a, b) => a+b,0)
    }
}

module.exports = StringCalculator;
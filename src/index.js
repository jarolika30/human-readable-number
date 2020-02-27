module.exports = function toReadable (number) {
    const numberNames = {
        "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
        "20": "twenty",
        "30": "thirty",
        "40": "forty",
        "50": "fifty",
        "60": "sixty",
        "70": "seventy",
        "80": "eighty",
        "90": "ninety",
        "100": "hundred",
        "1000": "thousand"
    }

    let strNumber = "";
    if (number <= 20) {
        strNumber = numberNames["" + number];
    } else if (number > 20 && number < 100) {
        let indFirst = (number + "").slice(0,1).concat("0");
        indFirst = numberNames[indFirst];
        let indSecond = (number + "").slice(1);
        indSecond = indSecond !== "0" ? numberNames[indSecond] : "";
        strNumber = indFirst + " " + indSecond;
    } else if (number >= 100 && number < 1000) {
        let indFirst = (number + "").slice(0,1);
        indFirst = numberNames[indFirst] + " " + numberNames["100"];
        let lastNumbers = (number + "").slice(1);

        if (+lastNumbers >= 20) {
            let indSecond = (number + "").slice(1,2).concat("0");
            indSecond = numberNames[indSecond];
            let indThird = (number + "").slice(2);
            indThird = (indThird === "0") ? "" : numberNames[indThird];
            strNumber = indFirst + " " + indSecond + " " + indThird; 
        } else {
            let ind = +lastNumbers; 
            let indexSecond = ind !== 0 ? numberNames[ind] : "";
            strNumber = indFirst + " " + indexSecond;
        }
        
    } else {
        strNumber = numberNames["1000"];
    }

    return strNumber.trim();
}

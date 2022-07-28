module.exports = function toReadable (number) {

    const ones = {0: "", 1: "one", 2: "two", 3: "three", 4: "four",
                 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine",
              };
    const tens = {0: "", 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen",
                15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen"
              };
    const twentys = {2: "twenty", 3: "thirty", 4: "forty", 5: "fifty",
                 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety"
              };
  
    a = String(number).length != 3 ?
                              '' : number % 100 != 0 ?
                              ones[parseInt(number / 100)] + ' hundred ' :
                              ones[parseInt(number / 100)] + ' hundred';
    bb = number % 100 in tens ?
                              tens[number % 100] : parseInt(number % 100 / 10) == 0 ?
                              '' : number % 10 == 0 ?
                              twentys[parseInt(number % 100 / 10)] : twentys[parseInt(number % 100 / 10)] + " ";
    ccc = number % 10 != 0 && !(number % 100 in tens) ?
                              ones[number % 10] : String(number).length == 1 ?
                              "zero" : '';
  
    return (`${a}${bb}${ccc}`)
  }
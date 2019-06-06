class createCard {
  visa() {
    var visaDigits = [4];
    var visaDigSum = 8;

    for (var i = 0; i < 14; i++) {
      var randomDigit = Math.floor(Math.random() * 10);
      visaDigits.push(randomDigit);
      if (i % 2 === 1) {
        randomDigit *= 2;
        if (randomDigit > 9) {
          randomDigit -= 9;
        }
      }
      visaDigSum += randomDigit;
    }

    var lastDigit = 10 - (visaDigSum % 10);
    if (visaDigSum % 10 === 0) {
      lastDigit = 0;
    }
    visaDigits.push(lastDigit);
    return visaDigits.join('');
  }

  masterCard() {
    var masterCardDigits = [5];
    var masterCardDigSum = 1;

    var randomDigit = Math.floor(Math.random() * 5 + 1);
    masterCardDigits.push(randomDigit);
    masterCardDigSum += randomDigit;

    for (var i = 0; i < 13; i++) {
      randomDigit = Math.floor(Math.random() * 10);
      masterCardDigits.push(randomDigit);
      if (i % 2 === 0) {
        randomDigit *= 2;
        if (randomDigit > 9) {
          randomDigit -= 9;
        }
      }
      masterCardDigSum += randomDigit;
    }

    var lastDigit = 10 - (masterCardDigSum % 10);
    if (masterCardDigSum % 10 === 0) {
      lastDigit = 0;
    }
    masterCardDigits.push(lastDigit);
    return masterCardDigits.join('');
  }

  discover() {
    var discoverDigits = [6, 0, 1, 1];
    var discoverDigSum = 6;

    for (var i = 0; i < 11; i++) {
      var randomDigit = Math.floor(Math.random() * 10);
      discoverDigits.push(randomDigit);
      if (i % 2 === 0) {
        randomDigit *= 2;
        if (randomDigit > 9) {
          randomDigit -= 9;
        }
      }
      discoverDigSum += randomDigit;
    }

    var lastDigit = 10 - (discoverDigSum % 10);
    if (discoverDigSum % 10 === 0) {
      lastDigit = 0;
    }
    discoverDigits.push(lastDigit);
    return discoverDigits.join('');
  }

  amex() {
    var americanExpressDigits = [3];
    var americanExpressDigSum = 3;

    var randomDigit = Math.floor(Math.random() * 2);
    if (randomDigit === 0) {
      randomDigit = 4;
    }
    if (randomDigit === 1) {
      randomDigit = 7;
    }
    americanExpressDigits.push(randomDigit);
    randomDigit *= 2;
    if (randomDigit > 9) {
      randomDigit -= 9;
    }
    americanExpressDigSum += randomDigit;

    for (var i = 0; i < 12; i++) {
      randomDigit = Math.floor(Math.random() * 10);
      americanExpressDigits.push(randomDigit);
      if (i % 2 === 1) {
        randomDigit *= 2;
        if (randomDigit > 9) {
          randomDigit -= 9;
        }
      }
      americanExpressDigSum += randomDigit;
    }

    var lastDigit = 10 - (americanExpressDigSum % 10);
    if (americanExpressDigSum % 10 === 0) {
      lastDigit = 0;
    }
    americanExpressDigits.push(lastDigit);
    return americanExpressDigits.join('');
  }

  cvv() {
    return Math.floor(Math.random() * 900 + 100);
  }

  exp() {
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var monthRandomed = Math.floor(Math.random() * 12 + 1);
    var yearRandomed = Math.floor(Math.random() * 10) + year;
    if (yearRandomed === year) {
      var monthsToEnd = 12 - month;
      monthRandomed = Math.floor(Math.random() * monthsToEnd + 1) + month;
    }
    if (yearRandomed === year + 9) {
      monthRandomed = Math.floor(Math.random() * (month - 1) + 1);
    }
    if (monthRandomed < 10) {
      monthRandomed = '0' + monthRandomed;
    }
    return `${monthRandomed}/${yearRandomed}`;
  }
}

export default new createCard();

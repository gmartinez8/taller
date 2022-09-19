function checker(string) {
  const splitedString = string.split('');

  let result = "";
  let counter = 1;

  for (let i=1; i<=splitedString.length; i++) {
    if(splitedString[i] === splitedString[i-1] && counter <= 8 && i < splitedString.length) {
      counter += 1;
    } else {
      result += `${counter}${splitedString[i-1]}`;
      counter = 1;
    }
  }

  return result;
}

module.exports = checker;
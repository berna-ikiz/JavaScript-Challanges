function selectTheColor(number) {
  if (number >= 0 && number <= 10) {
    return "BLACK";
  } else if (number >= 11 && number <= 20) {
    return "RED";
  } else if (number >= 21 && number <= 30) {
    return "BLUE";
  } else if (number >= 31 && number <= 40) {
    return "GREEN";
  } else if (number >= 41 && number <= 50) {
    return "PURPLE";
  } else {
    return "WHITE";
  }
}
console.log(selectTheColor(undefined));
console.log(selectTheColor(-5));
console.log(selectTheColor(6));
console.log(selectTheColor(20));
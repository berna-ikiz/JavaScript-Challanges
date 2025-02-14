function sayHello(name) {
  return `Merhaba ${name}`;
}

console.log(sayHello("Alice"));

let multiply = function (firstNumber, secondNumber) {
  return firstNumber * secondNumber;
};
console.log("Çarpma İşleminin sonucu: " + multiply(5, 3));

let devide = (firstNumber, secondNumber) => firstNumber / secondNumber;

console.log("Bölme işleminin sonucu: " + devide(10, 2));

function greetUser(name = "misafir", surname) {
  return "Hoş geldin, " + name + " " + surname + "!";
}
console.log(greetUser("John", "Doe"));
console.log(greetUser(undefined, "Doe"));

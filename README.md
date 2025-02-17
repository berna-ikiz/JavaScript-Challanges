# JavaScript Mini Challenges

This repository contains two JavaScript challenges:

1. **Functions Challenge** - Various function types and parameter handling.
2. **Select the Color Challenge** - Mapping numbers to colors based on a defined range.

---

## 1. Functions Challenge

This challenge consists of different types of function implementations in JavaScript:

- **Function Declaration:** `sayHello(name)` - Returns a greeting message.
- **Function Expression:** `multiply(firstNumber, secondNumber)` - Returns the multiplication of two numbers.
- **Arrow Function:** `divide(firstNumber, secondNumber)` - Returns the division result of two numbers.
- **Default Parameters:** `greetUser(name = "misafir", surname)` - Returns a welcome message with a default name if none is provided.

### Usage

Run the script `functions.js` in your terminal or browser console:

```sh
node functions.js
```

Example outputs:

```sh
Merhaba Alice
Çarpma İşleminin sonucu: 15
Bölme işleminin sonucu: 5
Hoş geldin, John Doe!
Hoş geldin, misafir Doe!
```

---

## 2. Select the Color Challenge

This challenge requires mapping a given number (0-50) to a specific color based on predefined ranges.

- Numbers **0-10** → "BLACK"
- Numbers **11-20** → "RED"
- Numbers **21-30** → "BLUE"
- Numbers **31-40** → "GREEN"
- Numbers **41-50** → "PURPLE"
- Numbers below 0 or above 50 → "WHITE"

### Usage

Run the script `selectTheColor.js` in your terminal or browser console:

```sh
node selectTheColor.js
```

Example outputs:

```sh
Input: undefined -> Output: WHITE
Input: -5 -> Output: WHITE
Input: 6 -> Output: BLACK
Input: 20 -> Output: RED
```

---

## Requirements

- Node.js (if running via terminal)
- A modern web browser (if running via browser console)

Enjoy coding! 🚀

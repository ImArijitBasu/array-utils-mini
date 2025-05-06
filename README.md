# 📦 array-utils-mini

A lightweight JavaScript utility library that re-implements core and intermediate array methods **from scratch** — perfect for learning, interviews, and low-level control.
No built-in array methods used (except `length`)!

---

## 🚀 Installation

```bash
npm install array-utils-mini
```

---

## 📚 What’s Inside?

### ✅ Basic Methods

* `push(arr, value)`
* `pop(arr)`
* `shift(arr)`
* `unshift(arr, value)`
* `indexOf(arr, value)`
* `includes(arr, value)`
* `reverse(arr)`

### 🯩 Medium-Level Operations

* `map(arr, callback)`
* `filter(arr, callback)`
* `reduce(arr, callback, initial)`
* `slice(arr, start, end)`
* `splice(arr, index, deleteCount, ...items)`

### ✨ Bonus Features

* `unique(arr)` — remove duplicate values
* `max(arr)` — get the maximum value
* `min(arr)` — get the minimum value
* `insertArrayAt(arr, pos, toInsert)` — insert an array in a specific position of an array

---

## 🔧 Usage

```js
import * from 'array-utils-mini';

const arr = [1, 2, 2, 3, 4];

console.log(unique(arr)); // [1, 2, 3, 4]
console.log(max(arr));    // 4
console.log(min(arr));    // 1

push(arr, 5);
console.log(arr);         // [1, 2, 2, 3, 4, 5]
```

---

## 🧠 Why Use This?

* Great for **learning** how array methods work under the hood.
* Helpful for **DSA practice** and **JavaScript interviews**.
* Lightweight and zero dependencies.
* Easy to contribute new methods or enhancements.

---

## 🤝 Contributing

Contributions are welcome!
If you’d like to add more array methods or improve the existing ones:

1. Fork the repo
2. Create a new branch
3. Submit a pull request

Or just message me directly if you have ideas, find bugs, or want to collaborate!

---

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).

---

## 📌 Links

* 🔗 [View on npm](https://www.npmjs.com/package/array-utils-mini)

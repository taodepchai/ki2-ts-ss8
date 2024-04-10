"use strict";
// Union Types cho biến có thể là số hoặc chuỗi
let myVar;
myVar = 10; // Hợp lệ
myVar = "Hello"; // Hợp lệ
myVar = true; // Lỗi: Không thể gán giá trị boolean cho biến có kiểu là number hoặc string
let dog = {
    name: "Dog",
    age: 3,
    run: () => console.log("cho dang chay")
};

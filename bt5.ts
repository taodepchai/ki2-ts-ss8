// Union Types cho biến có thể là số hoặc chuỗi
let myVar: number | string;
myVar = 10;    // Hợp lệ
myVar = "Hello"; // Hợp lệ
myVar = true;   // Lỗi: Không thể gán giá trị boolean cho biến có kiểu là number hoặc string


// Intersection Types cho một đối tượng có cả thuộc tính và phương thức từ hai loại
interface Animal {
    name: string;
    age: number;
}

interface CanRun {
    run(): void;
}

type AnimalCanRun = Animal & CanRun;

let dog: AnimalCanRun = {
    name: "Dog",
    age: 3,
    run: () => console.log("cho dang chay")
};

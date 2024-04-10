interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: string;
}


let person: Employee = {
    name: "efgh", 
    age: 25, 
    employeeId: "bbbb",
}

console.log(person);

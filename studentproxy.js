let student = {
    name: 'Jack',
    age: 24
}

const handler = { };

// passing empty handler
const proxy1 = new Proxy(student, {});

console.log(proxy1); // Proxy {name: "Jack", age: 24}
console.log(proxy1.name); // Jack
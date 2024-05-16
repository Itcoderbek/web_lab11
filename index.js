const fs = require('fs');
try {
    const data = fs.readFileSync('mytext.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err);
  }

try {
  fs.writeFileSync('mytext.txt', 'Hello, world!', 'utf8');
  console.log('File written successfully.');
} catch (err) {
  console.error('Error writing file:', err);
}

const myObject = { name: 'Alice', age: 30 };
const jsonString = JSON.stringify(myObject);
console.log(jsonString);

const jsonStr = '{"name":"Bob","age":25}';
const parsedObject = JSON.parse(jsonStr);
console.log(parsedObject.name); 
console.log(parsedObject.age);
const todoList = ["Buy groceries"];

todoList.push('Buy groceries');
todoList.push('Finish homework');

console.log(todoList);
const todoList2 = [];

todoList.push('Buy groceries');
todoList.push('Finish homework');

console.log(todoList2);

const update = require('immutability-helper');

let student = {name:'John Caster', grades:['A','C','B']}

var newStudent = update(student, {
  grades: {0: {$set: 'X'}}
})

var newGrades = update(student, {
  grades: { $set: ['a','b','c']}
})

var spliceGrades = update(student, {
  grades: { $splice: [[1,0, 1000, 1001, 1002]]}
})

var numbers = [1,3,4,5,6,7];

var newNumbers = update(numbers, {
  $apply: function(n) { return n.concat(['x'])}
})
console.log(newStudent);
console.log(student);
console.log(newGrades);
console.log(spliceGrades);
console.dir(newNumbers);
console.table(newNumbers);
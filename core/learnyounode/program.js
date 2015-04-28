// HELLO WORLD

// console.log('HELLO WORLD');

// BABY STEPS

// my solution:
var args = process.argv.slice(2).map(Number);
var total = 0
for(var i in args) { total += args[i]; }
console.log(total);

// learnyounode solution:
// var result = 0
// for (var i = 2; i < process.argv.length; i++) {
//       result += Number(process.argv[i])
// }
// console.log(result)
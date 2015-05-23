// HELLO WORLD

// console.log('HELLO WORLD');

// BABY STEPS

// my solution:
// var args = process.argv.slice(2).map(Number);
// var total = 0
// for(var i in args) { total += args[i]; }
// console.log(total);

// learnyounode solution:
// var result = 0
// for (var i = 2; i < process.argv.length; i++) {
//       result += Number(process.argv[i])
// }
// console.log(result)

// MY FIRST I/O

// my solution:
// var fs = require('fs')
// var file = fs.readFileSync(process.argv[2]);
// var newlines = file.toString().split('\n').length - 1
// console.log(newlines);

// learnyounode solution:
// var fs = require('fs')
// var content = fs.readFileSync(process.argv[2])
// var lines = content.toString().split('\n').length - 1
// console.log(lines)

// MY FIRST ASYNC I/O

// my solution:
// var fs = require('fs')
// var file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })


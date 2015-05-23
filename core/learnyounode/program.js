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

// FILTERED LS

// my solution:
// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })

// MAKE IT MODULAR

// my solution:
// var mymodule = require('./mymodule.js')

// var dir = process.argv[2]
// var ext = process.argv[3]

// mymodule(dir, ext, function(err, list) {
//   if (err) {
//    throw err;
//   }
//   else list.forEach(function (file) {
//    console.log(file);
//   })
// });

// learnyounode solution:
// var filterFn = require('./mymodule.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err)
//     return console.error('There was an error:', err)

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })

// HTTP CLIENT

// my solution:
// var http = require('http');

// http.get(process.argv[2], function(response) {
//   response.setEncoding('utf8');
//   response.on('error', console.error);
//   response.on('data', console.log);
// });

// HTTP COLLECT:
// Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect all data from the server (not just the first "data" event) and then write two lines to the console (stdout).

// The first line you write should just be an integer representing the number of characters received from the server. The second line should contain the complete String of characters sent by the server.

// my solution:
// var http = require('http');
// var dataString = "";
// http.get(process.argv[2], function(resp) {
//   resp.setEncoding('utf8');
//   resp.on('data', function(input){
//       dataString = dataString.concat(input);
//   });
//   resp.on('end', function(){
//       console.log(dataString.length);
//       console.log(dataString);
//   });
// }).on('error', console.error);

// learnyounode solution:
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })
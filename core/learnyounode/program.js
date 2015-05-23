// HELLO WORLD
// Write a program that prints the text "HELLO WORLD" to the console (stdout).

// console.log('HELLO WORLD');

// BABY STEPS
// Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).

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
// Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines (\n) it contains to the console (stdout), similar to running cat file | wc -l.

// The full path to the file to read will be provided as the first command-line argument. You do not need to make your own test file.

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
// Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.

// The full path to the file to read will be provided as the first command-line argument.

// my solution:
// var fs = require('fs')
// var file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })

// FILTERED LS
// Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

// For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .txt. Note that the second argument will not come prefixed with a '.'.

// The list of files should be printed to the console, one file per line. You must use asynchronous I/O.

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
// This problem is the same as the previous but introduces the concept of modules. You will need to create two files to solve this.

// Create a program that prints a list of files in a given directory, filtered by the extension of the files. The first argument is the directory name and the second argument is the extension filter. Print the list of files (one file per line) to the console. You must use asynchronous I/O.

// You must write a module file to do most of the work. The module must export a single function that takes three arguments: the directory name, the filename extension string and a callback function, in that order. The filename extension argument must be the same as what was passed to your program. Don't turn it into a RegExp or prefix with "." or do anything except pass it to your module where you can do what you need to make your filter work.

// The callback function must be called using the idiomatic node(err, data) convention. This convention stipulates that unless there's an error, the first argument passed to the callback will be null, and the second will be your data. In this exercise, the data will be your filtered list of files, as an Array. If you receive an error, e.g. from your call to  fs.readdir(), the callback must be called with the error, and only the error, as the first argument.

// You must not print directly to the console from your module file, only from your original program.

// In the case of an error bubbling up to your original program file, simply check for it and print an informative message to the console.

// These four things are the contract that your module must follow.

//   * Export a single function that takes exactly the arguments described.
//   * Call the callback exactly once with an error or some data as described.
//   * Don't change anything else, like global variables or stdout.
//   * Handle all the errors that may occur and pass them to the callback.

// The benefit of having a contract is that your module can be used by anyone who expects this contract. So your module could be used by anyone else who does learnyounode, or the verifier, and just work.

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
// Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Write the String contents of each "data" event from the response to a new line on the console (stdout).

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

// JUGGLING ASYNC
// This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time you will be provided with three URLs as the first three command-line arguments.

// You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You don't need to print out the length, just the data as a String; one line per URL. The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.

// my solution:
// const http = require('http')
// const bl = require('bl')
// const source = process.argv.slice(2)
// var count = 0
// var content = []

// function printContent() {
//   for (var i = 0; i < content.length; i++) {
//       console.log(content[i])
//   }
// };

// function getContent(source, index) {
//   http.get(source[index], function(response) {
//     response.pipe(bl(function (error, data) {
//       if (error) {
//         return console.error(error)
//       }
//       content[index] = data.toString();
//       if (++count == source.length) {
//         printContent();
//       }
//     }))
//   })
// };

// for (var i = 0; i < source.length; i++) {
//   getContent(source, i)
// };

// learnyounode solution:
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)

//       results[index] = data.toString()
//       count++

//       if (count == 3)
//         printResults()
//     }))
//   })
// }

// for (var i = 0; i < 3; i++)
//   httpGet(i)

// TIME SERVER
// Write a TCP time server!

// Your server should listen to TCP connections on the port provided by the first argument to your program. For each connection you must write the current date & 24 hour time in the format:

//     "YYYY-MM-DD hh:mm"

// followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:

//     "2013-07-06 17:42"

// my solution:
// var net = require("net");
// var strftime = require('strftime');

// console.log("starting server at port " + process.argv[2]) // Not need for solution, added for clarity.

// var server = net.createServer(function (socket) {
//   socket.end(strftime('%Y-%m-%d %H:%M\n'));
// })

// server.listen(process.argv[2]);

// learnyounode solution:
// var net = require('net')

// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))
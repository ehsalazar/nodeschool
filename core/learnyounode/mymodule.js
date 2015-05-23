// MAKE IT MODULAR

// my solution:

// var fs = require('fs')

// module.exports = function(dirname, filter, callback) {
// var regex = new RegExp('\\.' + filter + '$')

// var filelist = new Array()
// var i = 0

// fs.readdir(dirname, function (err, list) {

//   if (err) {
//     return callback(err);
//   }
//   else list.forEach(function (file) {
//     if (regex.test(file))
//       filelist[i] = file;
//       i += 1;
//     })
//   return callback(null, filelist)
//   })

// };

// learnyounode solution:

// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {

//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }
var fs = require('fs-readfile-promise');
fs.readFile('./posts.json', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

// function run (fn) {
//     var gen = fn();
//
//     function next (err, data) {
//         var result = gen.next(data);
//         if (result.done) return;
//         result.value(next);
//     }
//
//     next();
// }
//
// function* g () {
//     yield 1;
//     yield 2;
//     return 3;
// }
//
// run(g)
// EXPORTING MODULES USING NODE JS

const add = (x,y) => x+y;

const PI = 3.14159;

const square = x => x*x;

// FIRST WAY OF EXPORTING MODULES 
module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;


// SECOND WAY OF EXPORTING MODULES
// const math = {
//     add: add,
//     PI: PI,
//     square: square
// }
// module.exports = math;


// THIRD WAY OF EXPORTING MODULES
// Directly export modules into the function, variable 
// module.exports.add = (x,y) => x+y;
// module.exports.PI = 3.14159;
// module.exports.square = x => x*x;


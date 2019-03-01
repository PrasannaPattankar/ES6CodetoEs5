function simpleExaml() {
  let a = 10;
  console.log("the value of first a is", a);
  if (true) {
    let a = 20;
    console.log("the value of second a is", a);
  }
  console.log("the value of third a is", a);
}
simpleExaml();

//same example  with keyword var

function simpleExample() {
  var b = 10;
  console.log("the value of first b is", b);
  if (true) {
    var b = 20;
    console.log("the value of second b is", b);
  }
  console.log("the value of  third b is", b);
}
simpleExample();

// var d = 25;
// console.log(d);
// function simpleExamplee() {
//   var c = 10;
//   console.log("the value of first c is", c);
//   if (true) {
//     var c = 20;
//     console.log("the value of second c is", c, d);
//   }
//   console.log("the value of  third c is", c);
// }
// console.log(d);
// simpleExamplee();
// var e = 24;
// var e = 36;
// console.log(e);

// let f = 13;
// let f = 36;
// console.log(f);

//console.log(adds(1, 9));
//fat arrow function
var add = (a, b) => a + b;
console.log(add(1, 2));

var mul = (a, b) => a * b;
console.log(mul(3, 2));

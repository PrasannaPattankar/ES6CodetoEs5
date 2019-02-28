"use strict";

function simpleExaml() {
  var a = 10;
  console.log("the value of first a is", a);

  if (true) {
    var _a = 20;
    console.log("the value of second a is", _a);
  }

  console.log("the value of third a is", a);
}

simpleExaml(); // same example  with keyword var

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

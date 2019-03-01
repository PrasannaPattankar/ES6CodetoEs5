# ES6CodetoEs5
It gives description how to convert es6 code into es5 



First need to install the packages for babel

npm install --save-dev @babel/core @babel/cli

npm install @babel/preset-env --save-dev


create one file with name .babelrc in the root folder and write the below code



{
  "presets": ["@babel/preset-env"]
}




"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[63],{5731:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return o},default:function(){return m}});var t=a(3366),r=(a(7294),a(4983)),l=a(3076),s=["components"],o={},p={_frontmatter:o},i=l.Z;function m(e){var n=e.components,a=(0,t.Z)(e,s);return(0,r.kt)(i,Object.assign({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"Data Wrangling and Manipulation in JS"),(0,r.kt)("p",null,"This guide goes over 3 major concepts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Array Operations"),(0,r.kt)("li",{parentName:"ul"},"Javascript Objects"),(0,r.kt)("li",{parentName:"ul"},"Wrangling in D3")),(0,r.kt)("h2",null,"Array Operations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]\n")),(0,r.kt)("h3",null,"Map"),(0,r.kt)("p",null,"Map applies a function to each element of an array and returns a new array of the function outputs."),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},".map()")," to return an array of the squares of ",(0,r.kt)("inlineCode",{parentName:"p"},"myArr"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const squares = myArr.map(x => x**2);\nconsole.log(squares); // [1, 4, 9, 16, 25, 36, 49, 64, 81]\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"../../static/images/arrayMapExample.png",alt:"test"})),(0,r.kt)("p",null,"We can also use more complex functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const factorials = myArr.map((x) => {\n    let prod = 1;\n    for (let i = 1; i <= x; ++i) {\n        prod *= i;\n    }\n    return prod;\n});\nconsole.log(factorials); // [1, 2, 6, 24, 120, 720, 5040, 40320, 362880]\n")),(0,r.kt)("p",null,"The index of each element is passed in as the second item:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const indices = myArr.map((x, i) => i)\nconsole.log(indices) // [0, 1, 2, 3, 4, 5, 6, 7, 8]\n")),(0,r.kt)("h3",null,"Filter"),(0,r.kt)("p",null,"The filter operation returns an array of elements from the original array that meet a specified condition."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".filter()")," returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," values from the elements passed through a function. The ",(0,r.kt)("inlineCode",{parentName:"p"},"%")," is the modulus operator which returns the remainder after division. When you divide an even number by 2, there will always be a remainder of zero. Get the even numbers of ",(0,r.kt)("inlineCode",{parentName:"p"},"myArr")," using ",(0,r.kt)("inlineCode",{parentName:"p"},".filter()"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"../../static/images/arrayFilterExample.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const evenNumbers = myArr.filter(x => x % 2 === 0);\nconsole.log(evenNumbers); // [2, 4, 6, 8]\n")),(0,r.kt)("h2",null,"Javascript Objects"),(0,r.kt)("p",null,"Objects are key-value collections of data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const myObj = {\n    name: "Labyrinth",\n    nWriters: 5\n};\n')),(0,r.kt)("p",null,"We can access items by their key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log(myObj.name); // "Labyrinth"\n')),(0,r.kt)("h3",null,"Object Destructuring"),(0,r.kt)("p",null,"We can turn object values into individual variables as follows: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const { name, nWriters } = myObj;\nconsole.log(name, nWriters) // "Labyrinth", 5\n')),(0,r.kt)("h2",null,"Wrangling with D3"),(0,r.kt)("p",null,"Oftentimes, our data will be arrays of objects. This array contains data for 3 students."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const students = [\n    { major: "Math", gpa: 3.00 },\n    { major: "Compsci", gpa: 3.50 },\n    { major: "Compsci", gpa: 3.75 }\n]\n')),(0,r.kt)("h3",null,"d3.max()"),(0,r.kt)("p",null,"We can get the maximum gpa of all students:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { max } from "d3-array";\n\nconst maxGpa = max(students, d => d.gpa)\nconsole.log(maxGpa) // 3.75\n')),(0,r.kt)("p",null,"The first argument passed into ",(0,r.kt)("inlineCode",{parentName:"p"},"d3.max()")," must be an array of values. Then, the second argument can be a function that returns a value for each element of the array."),(0,r.kt)("h3",null,"d3.nest()"),(0,r.kt)("p",null,"Often, we'll want to group data by a common value. Here, we're going to group together students with the same major using ",(0,r.kt)("inlineCode",{parentName:"p"},"d3.nest()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { nest } from \"d3-collection\";\n\nconst nestedData = nest()\n    .key((d) => d.major)\n    .entries(students)\n\nconsole.log(nestedData)\n// [\n//   { \n//       key: 'Math', \n//       values: [ { major: 'Math', gpa: 3 } ],\n//   },\n//   { \n//       key: 'Compsci', \n//       values: [ \n//           { major: 'Compsci', gpa: 3.5 }, \n//           { major: 'Compsci', gpa: 3.75 } \n//       ] \n//   }\n// ]\n")),(0,r.kt)("p",null,"Here, we pass a function through ",(0,r.kt)("inlineCode",{parentName:"p"},".key()")," for the major value. This tells d3 to group the data by major. Then, we pass the entire array through by entering the array name into ",(0,r.kt)("inlineCode",{parentName:"p"},".entries()"),"."),(0,r.kt)("p",null,"If we want to get the maximum GPA by major, we can map the ",(0,r.kt)("inlineCode",{parentName:"p"},"nestedData")," array and then use ",(0,r.kt)("inlineCode",{parentName:"p"},"d3.max()")," to get the maximum value from each major's ",(0,r.kt)("inlineCode",{parentName:"p"},"values")," key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const maxGpaByDept = nestedData.map({ key, values }) => ({\n    key,\n    maxGPA: max(values, (d) => d.gpa),\n}));\n\nconsole.log(maxGpaByDept);\n// [ { key: 'Math', maxGPA: 3 }, { key: 'Compsci', maxGPA: 3.75 } ]\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-guides-wrangling-md-e19a5a3cea5a27bf57ff.js.map